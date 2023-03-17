import { iMovieDetails } from "../../types/movieDetails.interface"

const adaptGetTopMoviesDetails = (movieDetails: any) => {
    const hours = Math.floor(movieDetails.runtime / 60)
    const remainingMinutes = movieDetails.runtime % 60

    const adaptedTopMoviesDetails: iMovieDetails = {
        backdrop_path: movieDetails.backdrop_path,
        genres: movieDetails.genres,
        id: movieDetails.id,
        overview: movieDetails.overview,
        poster_path: movieDetails.poster_path,
        title: movieDetails.title,
        vote_average: movieDetails.vote_average,
        runtime: `${hours}h ${remainingMinutes}min`
    }
    return adaptedTopMoviesDetails
}

export default adaptGetTopMoviesDetails