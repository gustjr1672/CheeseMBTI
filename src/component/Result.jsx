import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import styled, { StyleSheetManager } from "styled-components";
function Result(){
    const location = useLocation();
    const navigate = useNavigate();
    const answers = location.state.answers;
    const resultList = location.state.resultList;

    const [resultComments,setResultComments] = useState([]);
    const [resultImages, setResultImages] = useState([]);
    const highlightedWords = ['간장', '고추장', '얼큰한', '깔끔한', '고기파', '생선파'];
    const answerCounts = {
        E:0,
        I:0,
        S:0,
        N:0,
        T:0,
        F:0,
    }

    useEffect(()=>{ 
        answers.forEach(answer => {
            answerCounts[answer]++;
        });    
        const resultComments = [
            answerCounts['S'] > answerCounts['N'] ? resultList['S'][0] : resultList['N'][0],
            answerCounts['E'] > answerCounts['I'] ? resultList['E'][0] : resultList['I'][0],
            answerCounts['T'] > answerCounts['F'] ? resultList['T'][0] : resultList['F'][0],
        ]
        const resultImages = [
            answerCounts['S'] > answerCounts['N'] ? resultList['S'][1] : resultList['N'][1],
            answerCounts['E'] > answerCounts['I'] ? resultList['E'][1] : resultList['I'][1],
            answerCounts['T'] > answerCounts['F'] ? resultList['T'][1] : resultList['F'][1],
        ]
        setResultComments(resultComments);
        setResultImages(resultImages);
    },[])

    const handleGoBack =  ()=>{
        const isConfirmed = window.confirm("다시 테스트하시겠습니까?");
        if(isConfirmed){
            navigate('/');
        }
        else{
            history.pushState({answers,resultList}, "", window.location.href);
        }
        
    }

    useEffect(()=>{
        history.pushState({answers,resultList}, "", window.location.href);
        window.addEventListener('popstate',handleGoBack);

        return ()=>{
            window.removeEventListener('popstate',handleGoBack);
        }
    },[])

    return(
        <>
         <StyleSheetManager shouldForwardProp={(prop) => prop !== 'ishighlighted'}>
            <Container>
            <ResultImage>
                {resultImages.map((imagePath,index)=>(
    
                        <img key={index} src={imagePath}></img>
          
                ))}
            </ResultImage>
       
            {resultComments.map((phrase,index)=>(
                <div key={index}>
                    {phrase.split(' ').map((word,idx)=>(
                        <StyledSpan key={idx} ishighlighted={ highlightedWords.includes(word) ? 'true' : undefined}>
                            {word}{' '}
                        </StyledSpan>
                    ))}
                </div>
            ))}
            </Container>
        </StyleSheetManager>
        </>
    )
}


export default Result;

const Container = styled.div`
font-family: "mitme";
p{
    margin:0px
}
`
const ResultImage = styled.div`
    display:flex;
    justify-content: center;
    gap : 10px;
    margin-bottom:40px;
    img{
        @media screen and (max-width: 768px) {
            width:100px;
            height:100px;
        }
        @media screen and (min-width: 769px) {
            width: 150px;
            height: 150px;

        }
    }

`
const StyledSpan = styled.span`
    color: ${({ ishighlighted }) => ishighlighted ? '#ff594d' : '#2d2d2d'};
    font-size: ${({ ishighlighted }) => ishighlighted ? '33px' : '25px'};
`
