import { useSelector } from "react-redux"
import { iMovieDetails } from "../../../types/movieDetails.interface"
import { iState } from "../../../types/store.interface"
import MovieCard from "../../molecules/MovieCard"
import { MainMoviePage, LinkStyle } from "./styles"

const AllMoviesPage: React.FC = () => {
    const moviesList = useSelector((state: iState) => state.movies.moviesList)

    return (
        <MainMoviePage>
            {moviesList.map((movie: iMovieDetails, index) => {
                return <LinkStyle key={index} to={`/movie/${movie.id}`}>
                    <MovieCard genres={movie.genres} poster={movie.poster_path} title={movie.title} runtime={movie.runtime} />
                </LinkStyle>
            })}
        </MainMoviePage>
    )
}

export default AllMoviesPage
