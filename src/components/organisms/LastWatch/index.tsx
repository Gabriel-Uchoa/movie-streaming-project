import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { iMovieDetails } from "../../../types/movieDetails.interface"
import { iState } from "../../../types/store.interface"
import ViewMore from "../../atoms/ViewMore"
import CentralMovieCard from "../../molecules/CentralMovieCard"
import MovieCard from "../../molecules/MovieCard"
import { LinkStyle } from "../AllMoviesPage/styles"
import { GeralDiv, LinkCentralMovieCardStyle, MainLastWatchMovies, MainLastWatchMoviesAllView, TitleAndButton, TitleAndButtonAllView, WithoutMovie } from "./styles"

const LastWatch = () => {
    const lastWatchedMoviesList = useSelector((state: iState) => state.movies.lastWatchMoviesList)
    const [viewMore, setViewMore] = useState<boolean>(false)

    const handleClick = () => {
        setViewMore(!viewMore)
        console.log(viewMore)
    }

    if (!lastWatchedMoviesList.length) {
        return <WithoutMovie>
            <span>Você ainda não possui nenhum filme visto recentemente.</span>
        </WithoutMovie>
    }

    const noRepetitionMovies = lastWatchedMoviesList.reduce((acc: iMovieDetails[], movie) => {
        const exists = acc.some((f: iMovieDetails) => f.id === movie.id)
        if (!exists) {
            acc.push(movie)
        }
        return acc
    }, [])

    const [firstMovie, ...remainingMovies] = noRepetitionMovies
    const firstFourNumbers = [...remainingMovies.slice(0, 4).map((movie) => movie)]

    return (
        <GeralDiv>
            {!viewMore ?
                <>
                    <TitleAndButton>
                        <h1>Vistos Recentemente</h1>
                        <ViewMore onClick={handleClick} viewMore={viewMore} />
                    </TitleAndButton>
                    <MainLastWatchMovies>
                        {<LinkCentralMovieCardStyle to={`/movie/${firstMovie.id}`}> <CentralMovieCard genres={firstMovie.genres} poster={firstMovie.backdrop_path} title={firstMovie.title} runtime={firstMovie.runtime} /> </LinkCentralMovieCardStyle>
                        }
                        {firstFourNumbers.map((movie, index) => {
                            return <LinkStyle key={index} to={`/movie/${movie.id}`}> <MovieCard genres={movie.genres} poster={movie.poster_path} title={movie.title} runtime={movie.runtime} /> </LinkStyle>
                        })}
                    </MainLastWatchMovies>
                </> :
                <>
                    <TitleAndButtonAllView>
                        <h1>Vistos Recentemente</h1>
                        <ViewMore onClick={handleClick} viewMore={viewMore} />
                    </TitleAndButtonAllView>
                    <MainLastWatchMoviesAllView>
                        {noRepetitionMovies.map((movie, index) => {
                            return <LinkStyle key={index} to={`/movie/${movie.id}`}> <MovieCard genres={movie.genres} poster={movie.poster_path} title={movie.title} runtime={movie.runtime} /> </LinkStyle>
                        })}
                    </MainLastWatchMoviesAllView>
                </>
            }

        </GeralDiv>
    )
}

export default LastWatch