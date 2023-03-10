import React from "react";
import styled from "styled-components";

const SpinnerBack = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

const SpinnerCircle = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  margin-left: -25px;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: #888;
  animation: spinner 0.8s ease-in-out infinite;
  
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }`;

const Spinner: React.FC = () => {
    return (
        <SpinnerBack>
            <SpinnerContainer>
                <SpinnerCircle />
            </SpinnerContainer>
        </SpinnerBack>
    );
};

export default Spinner;
