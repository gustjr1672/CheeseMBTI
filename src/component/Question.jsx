import { useState } from "react";
import styled from "styled-components";

function Question({question, options, addAnswer, deleteAnswer}){
    const [selectedOption, setSelectedOption] = useState('');

    const handleNextQuestion = () =>{
        setSelectedOption('');
        if(selectedOption === '0'){
            addAnswer(question.A);
        }
        else if(selectedOption === '1'){
            addAnswer(question.B);
        }
    }

    const handelBeforeQuestion = ()=>{
        deleteAnswer();
    }

    const handleOptionChange = (e)=>{
        setSelectedOption(e.target.value);
    }

    return(
        <>
            <h2>{question.question}</h2>
            <Container>
                <form>
                    {options.map((option,index)=>(
                        <RadioButtonContainer key={index} >
                                <input
                                type="radio"
                                id={`option-${index}`}
                                name="option"
                                value={index}
                                checked={selectedOption===`${index}`}
                                onChange={handleOptionChange}
                                />
                                <RadioTitle>
                                    <label htmlFor={`option-${index}`}> {option} </label>       
                                </RadioTitle>                 
                        </RadioButtonContainer>
                    ))}
                </form>
            </Container>
            <button onClick={handelBeforeQuestion}>이전</button>
            <button onClick={handleNextQuestion}>다음</button>
        </>
    )
}

export default Question;


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 80vw;
    height: 30vh;
    margin: 0;
    form{
        margin-top: 20px;
        display: flex;
        @media screen and (max-width: 768px) {
            /* 모바일 환경에서의 스타일 */
            flex-direction: column;
          }
        
          @media screen and (min-width: 769px) {
            /* 웹 환경에서의 스타일 */
            flex-direction: row;
            max-width: 
          }
        align-items: center;
        width: 100%;
        height:100%;
    }
`
const RadioTitle = styled.div`
    text-aline:center;
    border: 2px solid #ab9a5b59;
    border-radius: 5px;
    padding: 1rem;
    transition: transform 150ms ease;
    border-radius: 0.4em;
`

const RadioButtonContainer = styled.div`
    position: relative;
    height: 20%;
    width: 60%;
    // max-width: 60%;
    margin: 0.5rem;

    input[type="radio"]{
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        margin: 0;
        cursor: pointer;

        &:checked + ${RadioTitle} {
            background-color: #ffe072;
            border: 2px solid #ab9a5b59;
            color: #4953ff;
            transform: scale(1.04, 1.04);
            
        }
        &:checked + ${RadioTitle} label{
            color: #4953ff;
            background-color: #ffe072;  
        }
    }

    label{
        text-align: center;
        font-size: 0.8rem;
        font-weight: 600;
        // text-transform: uppercase;
        letter-spacing: 1px;
        color: #4953ff;
    }
`
