import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const MotherContainer = styled.div`
  background-color: #bac8ff;
  height: 100%;
`;

const Background = styled.div`
  padding: 50px;
  background-image: url('static/background1.png');
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
  line-height: 30px;
  border: none;
  width: 300px;
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

const SLink = styled(Link)`
  margin: 0 auto;
`;

const HomePage = () => {
  return (
    <MotherContainer>
      <BorderAnimation>
        <Background>
          <Title>
            <h1>Yoon's Page</h1>
          </Title>
          <SLink to="/blog">
            <IntroButton>Go Blog!</IntroButton>
          </SLink>
        </Background>
      </BorderAnimation>
    </MotherContainer>
  );
};

export default HomePage;
