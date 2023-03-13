import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getMoviesDetails } from "../../../services/api/getMoviesDetails"
import { iDataUser, iState } from "../../../types/store.interface"
import ViewMore from "../../atoms/ViewMore"
import CentralMovieCard from "../../molecules/CentralMovieCard"
import MovieCard from "../../molecules/MovieCard"
import { LinkStyle } from "../AllMoviesPage/styles"
import { GeralDiv, LinkCentralMovieCardStyle, MainLastWatchMovies, TitleAndButton, WithoutMovie } from "./styles"

const FavoritesMovies = () => {
    const { movies_favorites } = useSelector((state: any) => state.movies);

    if (!movies_favorites.length) {
        return <WithoutMovie>
            <span>Você ainda não possui nenhum filme visto recentemente.</span>
        </WithoutMovie>
    }

    const [firstMovie, ...remainingMovies] = movies_favorites
    return (
        <GeralDiv>
            <TitleAndButton>
                <h1>Favoritos</h1>
                <ViewMore />
            </TitleAndButton>
            <MainLastWatchMovies>
                <LinkCentralMovieCardStyle to={`/movie/${firstMovie.id}`}> <CentralMovieCard genres={firstMovie.genres} poster={firstMovie.backdrop_path} title={firstMovie.title} runtime={firstMovie.runtime} /> </LinkCentralMovieCardStyle>
                
                {remainingMovies.map((movie, index) => {
                    return <LinkStyle key={index} to={`/movie/${movie.id}`}> <MovieCard genres={movie.genres} poster={movie.poster_path} title={movie.title} runtime={movie.runtime} /> </LinkStyle>
                })} 
            </MainLastWatchMovies>
        </GeralDiv>
    )
}

export default FavoritesMovies