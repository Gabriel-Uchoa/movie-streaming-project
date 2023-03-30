import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import useLastWatchMovies from "../../../hooks/useLastWatchMovies"
import { iMovieDetails } from "../../../types/movieDetails.interface"
import { iState } from "../../../types/store.interface"
import ViewMore from "../../atoms/ViewMore"
import CentralMovieCard from "../../molecules/CentralMovieCard"
import MovieCard from "../../molecules/MovieCard"
import { LinkStyle } from "../AllMoviesPage/styles"
import { GeralDiv, LinkCentralMovieCardStyle, MainLastWatchMovies, MainLastWatchMoviesAllView, TitleAndButton, TitleAndButtonAllView, WithoutMovie } from "./styles"

const LastWatch = () => {
    const [viewMore, setViewMore] = useState<boolean>(false)
    const [movies, setMovies] = useState<iMovieDetails[]>([]);
    const { noRepetitionMovies, firstMovie, firstFourNumbers } = useLastWatchMovies(movies)

    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('lastWatchedMovies') || '');
        if (savedMovies) {
            setMovies(savedMovies);
        }
    }, [])

    const handleClick = () => {
        setViewMore(!viewMore)
    }

    if (!noRepetitionMovies.length) {
        return <WithoutMovie>
            <span>Você ainda não possui nenhum filme visto recentemente.</span>
        </WithoutMovie>
    }

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