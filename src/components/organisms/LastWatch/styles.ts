import { Link } from "react-router-dom";
import styled from "styled-components";

export const GeralDiv = styled.div`
    color: white;
    margin: 20px 50px;
`

export const MainLastWatchMovies = styled.main`
    display: grid;
    grid-template-columns: 250px 250px 250px;
    justify-content: center;
    column-gap: 30px;
`

export const TitleAndButton = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 40px;
    width: 52vw;
`

export const LinkCentralMovieCardStyle = styled(Link)`
    grid-column-start: 1;
    grid-column-end: 3;
    width: 100%;
    min-height: 360px;
    text-decoration: none;
    color: white;
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