import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import styled, { StyleSheetManager } from "styled-components";
function Result(){
    const location = useLocation();
    const answers = location.state.answers;
    const resultList = location.state.resultList;

    const [resultType,setResultType] = useState('');
    const [resultImg,setResultImg] = useState('');
    const [result,setResult] = useState('');
    const [parts,setParts] = useState([]);

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
        const result = [
            answerCounts['E'] > answerCounts['I'] ? 'E' : 'I',
            answerCounts['S'] > answerCounts['N'] ? 'S' : 'N',
            answerCounts['T'] > answerCounts['F'] ? 'T' : 'F',
        ].join('')
        setResult(result);
    },[])
    
    useEffect(() => {
        if (resultList[result]) {
            setResultType(resultList[result][0]);
            setParts(resultList[result][0].split(', '));
            setResultImg(resultList[result][1]);
            console.log(resultList[result][0].split(', '));
        }

    }, [result]);


    return(
        <>
         <StyleSheetManager shouldForwardProp={(prop) => prop !== 'ishighlighted'}>
            <Container>
            <ResultImage src={resultImg}/><br/><br/>

       
        {parts.map((phrase, index) => (
            <div key={index}>
                {phrase.split(' ').map((word, idx) => (
                <StyledSpan key={idx} ishighlighted={ highlightedWords.includes(word) ? 'true' : undefined}>
                    {word}{' '}
                </StyledSpan>
                ))}
            <br />
            </div>
            ))}
            </Container>
        </StyleSheetManager>
        </>
    )
}


export default Result;

const Container = styled.div`
font-family: "monggle";
p{
    margin:0px
}

`

const ResultImage = styled.img`
    width: 30%;
    height: 30%;
    min-width:150px;
    min-height:150px;
    max-width:250px;
    max-height:250px;
`

const StyledSpan = styled.span`
    color: ${({ ishighlighted }) => ishighlighted ? '#ff594d' : '#2d2d2d'};
    font-size: ${({ ishighlighted }) => ishighlighted ? '33px' : '25px'};
`
