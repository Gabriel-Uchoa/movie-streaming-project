import { iMovieDetails } from "../../types/movieDetails.interface"

const adaptGetMoviesDetails = (movieDetails: any) => {
    const hours = Math.floor(movieDetails.runtime / 60)
    const remainingMinutes = movieDetails.runtime % 60

    const adaptedMoviesDetails: iMovieDetails = {
        backdrop_path: movieDetails.backdrop_path,
        genres: movieDetails.genres,
        id: movieDetails.id,
        overview: movieDetails.overview,
        poster_path: movieDetails.poster_path,
        title: movieDetails.title,
        vote_average: Math.round(movieDetails.vote_average),
        runtime: `${hours}h ${remainingMinutes}min`
    }
    return adaptedMoviesDetails
}

export default adaptGetMoviesDetails