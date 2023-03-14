import { iMovieDetails } from "../types/movieDetails.interface"

const useLastWatchMovies = (lastWatchedMoviesList: iMovieDetails[]) => {
    const noRepetitionMovies = lastWatchedMoviesList.reduce((acc: iMovieDetails[], movie) => {
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

export default useLastWatchMovies