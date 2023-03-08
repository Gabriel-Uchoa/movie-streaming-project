import styled from "styled-components";

export const StyleFooter = styled.footer`
    width: 100%;
    bottom: 0;
    display: flex;
    color: #FFFFFF;
`

export const DescribeFooter = styled.section`
    background-color: #3D3D3D;
    width: 39vw;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 20px;
`

export const TitleDescribe = styled.h1`
    font-weight: 500;
    font-size: 60px;
    line-height: 88px;
`

export const Paragraph = styled.p`
    line-height: 32px;
`
export const NewsLetter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    &>p{
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
    }
`

export const NewsLetterInput = styled.div`
    background-color: #525252;
    padding: 8px;
    border-radius: 8px;
    width: 282px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>input{
        background-color: #525252;
        color: white;
        outline: none;
        border: none;
    }
    &>button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FED530;
        border: none;
        padding: 12px;
        border-radius: 8px;
        cursor: pointer;
    }
`

export const NavFooter = styled.section`
    background-color: #2E2E2E;
    width: 61vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
    padding: 30px 50px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 20px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    font-size: 16px;
    line-height: 32px;
    text-decoration: none;
    &:hover {
      color: gray;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Contact = styled.div`
    display: flex;
    gap: 24px;
    &>div{
        display: flex;
        align-items: center;
    }
`