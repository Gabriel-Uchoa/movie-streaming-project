import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #525252;
  width: 500px;
  padding: 48px;
  margin: 20px auto;
  border-radius: 24px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 32px;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    padding: 16px;
    margin: 10px auto;
  }
`;

export const StyleForm = styled.form`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const DualInput = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const AreaButtons = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Span = styled.span`
  width: 100%;
  cursor: pointer;
  padding: 10px 20px;
  &:hover {
    transition: 300ms all;
    background-color: #cfcfcf7e;
  }

  @media screen and (max-width: 480px) {
    padding: 8px 16px;
  }
`;
