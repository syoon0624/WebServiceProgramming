import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const MotherContainer = styled.div`
  background-color: #bac8ff;
  height: 100%;
`;

const Background = styled.div`
  padding: 50px;
  background-image: url('img/background.png');
  background-repeat: no-repeat;
  height: 350px;
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.a`
  margin: 0 auto;
  color: #ffe3e3;
  font-size: 40px;
`;

const IntroButton = styled.button`
  margin: 0 auto;
  width: 50%;
  line-height: 30px;
  border: none;
  background-color: #63e6be;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    background-color: #20c997;
  }
`;

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3)
  }
`;

const BorderAnimation = styled.div`
  position: absolute;
  border: 10px solid black;
  top: 50%;
  left: 50%;
  margin-top: -175px;
  margin-left: -322px;
  :hover {
    animation: ${bounce} 1s;
    transform: scale(1.3);
  }
`;

const HomePage = () => {
  return (
    <MotherContainer>
      <BorderAnimation>
        <Background>
          <Title>
            <h1>Yoon's Page</h1>
          </Title>
          <IntroButton>Go Blog!</IntroButton>
        </Background>
      </BorderAnimation>
    </MotherContainer>
  );
};

export default HomePage;
