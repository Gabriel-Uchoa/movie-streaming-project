import { useSelector } from "react-redux"
import { iState } from "../../../types/store.interface"
import ViewMore from "../../atoms/ViewMore"
import CentralMovieCard from "../../molecules/CentralMovieCard"
import MovieCard from "../../molecules/MovieCard"
import { GeralDiv, MainLastWatchMovies, TitleAndButton } from "./styles"

const LastWatch = () => {
    const lastWatchedMoviesList = useSelector((state: iState) => state.movies.lastWatchMoviesList)

    if (!lastWatchedMoviesList) {
        return null
    }

    const [firstMovie, ...remainingMovies] = lastWatchedMoviesList

    return (
        <GeralDiv>
            <TitleAndButton>
                <h1>Vistos Recentemente</h1>
                <ViewMore />
            </TitleAndButton>
            <MainLastWatchMovies>
                {<CentralMovieCard genres={firstMovie.genres} poster={firstMovie.backdrop_path} title={firstMovie.title} runtime={firstMovie.runtime} />
                }
                {remainingMovies.map((movie) => {
                    return <MovieCard genres={movie.genres} poster={movie.poster_path} title={movie.title} runtime={movie.runtime} />
                })}
            </MainLastWatchMovies>
        </GeralDiv>
    )
}

export default LastWatch