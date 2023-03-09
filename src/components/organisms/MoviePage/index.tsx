import { useSelector } from "react-redux"
import { iMovieDetails } from "../../../types/movieDetails.interface"
import { iState } from "../../../types/store.interface"
import MovieCard from "../../molecules/MovieCard"
import { DivMoviePage } from "./styles"

const MoviePage: React.FC = () => {
    const moviesList = useSelector((state: iState) => state.movies.moviesList)

    return (
        <DivMoviePage>
            {moviesList.map((movie: iMovieDetails) => {
                return <MovieCard genres={movie.genres} poster={movie.poster_path} title={movie.title} runtime={movie.runtime} />
            })}
        </DivMoviePage>
    )
}

export default MoviePage