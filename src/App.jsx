import { useState } from 'react';
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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage/>}/>
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
