import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Question({question, options, imgPath, addAnswer, deleteAnswer}){
    const [selectedOption, setSelectedOption] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const navigate = useNavigate();

    const handleNextQuestion = () =>{
        setSelectedOption('');
        setQuestionNumber((questionNumber) => (questionNumber+1));
        if(selectedOption === '0'){
            addAnswer(question.A);
        }
        else if(selectedOption === '1'){
            addAnswer(question.B);
        }
    }

    const handleBeforeQuestion = ()=>{
        setSelectedOption('');
        deleteAnswer();
        if(questionNumber > 1){
            setQuestionNumber((questionNumber) => (questionNumber-1));
        }else{
            navigate(-1);
        }
    }

    const handleOptionChange = (e)=>{
        setSelectedOption(e.target.value);
    }

    useEffect(()=>{
        history.pushState(null,"",window.location.href);

        window.addEventListener("popstate",handleBeforeQuestion);

        return ()=>{
            window.removeEventListener("popstate",handleBeforeQuestion);
        }
    },[questionNumber]);

    return(
        <>
        <Container>
            <h2>
                {question.question}
            </h2>
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
                                <img src={imgPath[index]} alt={`Image ${index}`} /> 
                            </RadioTitle>           
                    </RadioButtonContainer>
                ))}
            </form>

        <Buttons>
            <Button onClick={handleBeforeQuestion}>이전</Button>
            <Button onClick={handleNextQuestion}>다음</Button>
        </Buttons>
        
        </Container>
        </>
    )
}

export default Question;


const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    h2{
        min-width:250px;
        min-height: 80px;
    }
    form{
        margin-top: 0px;
        display: flex;
        justify-content: center;
        
        @media screen and (max-width: 768px) {
            /* 모바일 환경에서의 스타일 */
            flex-direction: column;
            gap:50px;
          }
        
          @media screen and (min-width: 769px) {
            /* 웹 환경에서의 스타일 */
            flex-direction: row;
            gap: 170px;
          }
        align-items: center;
        width: 100%;
        height:100%;
    }
`
const RadioTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #ab9a5b59;
    transition: transform 150ms ease;
    
    width:100%;
    height:100%;
    img{
        object-fit: fill;
        @media screen and (max-width: 768px) {
            width: 100%;
            height: 170px;
        }
        
        @media screen and (min-width: 769px) {
            width: 200px;
            height: 200px;
        }
    }
`

const RadioButtonContainer = styled.div`
    display:flex;
    position: relative;
    height: 60%;
    width: 60%;
    min-width: 190px;
    min-height:190px;
    max-width: 202px;
    max-height: 250px;

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
            // background-color: #ffe072;
            transform: scale(1.04, 1.04);
            
        }
        &:checked + ${RadioTitle} label{
            background-color: #fff3a2;  
        }
    }

    label{
        text-align: center;
        font-size: 1.3rem;
        font-weight: 600;
        letter-spacing: 1px;
        width: 100%;
        border-bottom: solid 1px #3333337a;
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 768px) {
        gap: 18%;
        margin-top:50px;
      }
    
      @media screen and (min-width: 769px) {
        margin-top:60px;
        gap: 254px;
      }
  
`
const Button = styled.button`
    width: 10%;
    min-width: 120px;
    background: #fff6d5;
    font-family: inherit;
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em;
    cursor: pointer;
    &:hover{
        transform: translate(-0.05em, -0.05em);
        box-shadow: 0.15em 0.15em;
    }
    &:active{
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em;
    }
    a{
        color: #646cff
    }
`;