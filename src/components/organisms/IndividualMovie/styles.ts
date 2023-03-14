import styled from "styled-components";

export const MainIndividualMovie = styled.main`
    display: flex;
    color: white;
    flex-wrap: wrap;
    height: fit-content;
    justify-content: center;
    gap: 40px;
    padding: 50px;
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
    gap: 10px;
    font-size: small;
`

export const ContainsDivTrailers = styled.div`
    width: 80vw;
`

export const DivTrailers = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
    justify-content: center;
    }
`

export const TrailersTitle = styled.h4`
    font-size: 20px;
    margin-bottom: 20px;
`