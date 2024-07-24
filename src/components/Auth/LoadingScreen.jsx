import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/images/logo.png'; 
import BackgroundImage from '../../assets/images/logo.png'; 

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  opacity: 5.9;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  animation: ${rotate} 2s linear ;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  animation: ${slideIn} 2s ease-in-out;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #ffc107;
  animation: ${fadeIn} 3s ease-in-out;
`;

const LoadingScreen = () =>{
  return (
    <Container>
      <Overlay>
        <LogoImage src={logo} alt="Golden Ore Bank Logo" />
        <Title>NiViQ Bank</Title>
        <Subtitle>Making the Future Golden</Subtitle>
      </Overlay>
    </Container>
  );
}

export default LoadingScreen;
