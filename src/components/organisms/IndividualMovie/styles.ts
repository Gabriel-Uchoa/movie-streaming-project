import styled, { css } from "styled-components";

export const MainIndividualMovie = styled.main`
    display: flex;
    color: white;
    flex-wrap: wrap;
    height: fit-content;
    justify-content: center;
    gap: 40px;
    padding: 50px;
    background: url(${props => props.datatype});
    background-size: cover;
    text-shadow: 0.1em 0.1em 0.2em black;
    position: relative;
`

export const DivPlay = styled.div`
    width: 144px;
    height: 144px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    left: 150px;
    top: 200px;
    z-index: 1;
    @media screen and (max-width: 1200px) {
        left: 100px;
        top: 280px;
    }
    @media screen and (max-width: 930px) {
        position: relative;
        top: 210px;
        left: 0px;
        margin: 50px;
    }
    @media screen and (max-width: 697px) {
        left: 0px;
        top: 0px;
        margin: 30px;
    }
`

const sharedStyleImage = css`
    position: absolute;
`

export const SecondContainer = styled.img`
    ${sharedStyleImage}
`

export const FirstContainer = styled.img`
    ${sharedStyleImage}
`

export const PlayImage = styled.img`
    ${sharedStyleImage}
`

export const DivDetailsMovie = styled.div`
    width: 45vw;
    display: flex;
    flex-direction: column;
    gap: 35px;
    justify-content: center;
`

export const DivTextDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    font-size: small;
`

export const ContainsDivTrailers = styled.div`
    width: 80vw;
    @media screen and (max-width: 850px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const DivTrailers = styled.div`
    display: flex;
    gap: 20px;
    margin: 0 auto;
    
    @media screen and (max-width: 1500px) {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    @media screen and (max-width: 850px) {
        display: block;
    }
`

export const TrailersTitle = styled.h4`
    font-size: 20px;
    margin-bottom: 20px;
`