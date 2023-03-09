import { iMovieDetails } from "../../types/movieDetails.interface";

export const setMoviesListAction = (moviesList: iMovieDetails) => {
    return {
        type: "ADD_MOVIES_TO_LIST",
        payload: moviesList
    }
}