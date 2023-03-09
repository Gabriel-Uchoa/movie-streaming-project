import { iMovieDetails } from "../../types/movieDetails.interface"

const adaptGetMoviesDetails = (movieDetails: any) => {
    const adaptedMoviesDetails: iMovieDetails = {
        backdrop_path: movieDetails.backdrop_path,
        genres: movieDetails.genres,
        id: movieDetails.id,
        overview: movieDetails.overview,
        poster_path: movieDetails.poster_path,
        title: movieDetails.title,
        vote_average: movieDetails.vote_average,
        runtime: movieDetails.runtime
    }
    return adaptedMoviesDetails
}

export default adaptGetMoviesDetails