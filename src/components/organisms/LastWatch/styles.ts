import { Link } from "react-router-dom";
import styled from "styled-components";

export const GeralDiv = styled.div`
    color: white;
`

export const MainLastWatchMovies = styled.main`
    display: grid;
    grid-template-columns: 250px 250px 250px;
    justify-content: center;
    column-gap: 30px;

    @media screen and (max-width: 860px) {
        grid-template-columns: 250px;
    }
`

export const TitleAndButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
    margin: 0 auto 30px auto;
    @media screen and (max-width: 860px) {
        width: 700px;
    }
    @media screen and (max-width: 700px) {
        width: 600px;
    }
    @media screen and (max-width: 630px) {
        width: 550px;
    }
    @media screen and (max-width: 550px) {
        width: 250px;
    }
`

export const LinkCentralMovieCardStyle = styled(Link)`
    grid-column-start: 1;
    grid-column-end: 3;
    width: 100%;
    min-height: 360px;
    text-decoration: none;
    color: white;
    @media screen and (max-width: 548px) {
        grid-column-start: 1;
        grid-column-end: 2;
    }
`

export const WithoutMovie = styled.div`
    height: 40vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
`

export const MainLastWatchMoviesAllView = styled.main`
    display: grid;
    grid-template-columns: 250px 250px 250px 250px;
    justify-content: center;
    column-gap: 80px;
    @media screen and (max-width: 1090px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, .1fr));
    padding: 10px 0;
    }
`

export const TitleAndButtonAllView = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 40px;
    width: 80vw;
`