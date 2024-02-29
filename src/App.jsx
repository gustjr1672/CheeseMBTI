import { useEffect, useState } from 'react';
import './App.css';
import StartPage from './component/StartPage';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Question from './component/Question';
import {optionList, questionList, resultList} from './questionList';
import Result from './component/Result';
import Loding from './component/Loding';

function App() {
  const [answers, setAnswers] = useState([])
  const [page,setPage] = useState(0);


  const addAnswer = (answer) =>{
    setAnswers([...answers,answer]);
    if(page < questionList.length){
      setPage(page+1);
    }
  }

  const deleteAnswer = () =>{
    setAnswers([...answers].slice(0,-1));
    if(page > 0){
      setPage(page-1);
    }
  }

  // 컴포넌트가 처음 렌더링될 때 이미지 preload 작업을 수행합니다.
  useEffect(() => {
    preloadImages();
  }, []);

  // 이미지 preload 함수
  const preloadImages = () => {
    // 모든 이미지 경로를 하나의 배열로 합칩니다.
    const images = optionList.reduce((acc, curr) => {
      return acc.concat(curr.imgPath);
    }, []);

    const resultImages = Object.values(resultList).map(result => result[1]);

    images.push(...resultImages);

    // 모든 이미지 preload 작업을 비동기적으로 수행합니다.
    Promise.all(images.map(imagePath => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imagePath;
        img.onload = resolve; // 이미지 로드 성공 시 resolve 호출
        img.onerror = reject; // 이미지 로드 실패 시 reject 호출
      });
    }))
  };


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage setPage={setPage}/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/loding" element={<Loding/>}/>
          <Route path="/test" 
          element={
          page<questionList.length?
          <Question 
            question={questionList[page]}
            options={optionList[page].options}
            imgPath={optionList[page].imgPath}
            addAnswer={addAnswer}
            deleteAnswer={deleteAnswer}
          />
          :<Loding answers={answers} resultList={resultList}/>
        }/>
        
        </Routes>
        {/* <StartPage/> */}
      </BrowserRouter>
    </>
  )
}

export default App
