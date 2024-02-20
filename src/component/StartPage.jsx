import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';

function StartPage(){
    return(
        <>
        <Center>
            <h1>한국인의<span><br/> 밥상 만들기 </span></h1>
            {/* <img src="/image/main.png"/> */}
            <TestLink to="./test">테스트 시작하기</TestLink>
        </Center>
        </>
    )
}

export default StartPage;


const Center = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  h1 {
    font-size: 3em;
    font-weight: 700;
    line-height: 150%;
    font-family: GmarketSansBold;
    color: #67554e;
  }

  span {
    color: #ff8f59;
  }

  img {
    margin: 1.2em;
    width: 12em;
  }
`;


const TestLink = styled(Link)`
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
