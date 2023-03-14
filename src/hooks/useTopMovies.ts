import { useSelector } from "react-redux";
import { iMovieDetails } from "../types/movieDetails.interface"
import { iState } from "../types/store.interface";

const useTopMovies = () => {
    const moviesList = useSelector((state: iState) => state.movies.moviesList);

    const noRepetitionMovies = moviesList.reduce((acc: iMovieDetails[], movie) => {
        const exists = acc.some((f: iMovieDetails) => f.id === movie.id)
        if (!exists) {
            acc.push(movie)
        }
        return acc
    }, [])

    const [firstMovie, ...remainingMovies] = noRepetitionMovies
    const firstFourNumbers = [...remainingMovies.slice(0, 4).map((movie) => movie)]

    return { noRepetitionMovies, firstMovie, firstFourNumbers }
}

export default useTopMovies