import { iMovieDetails } from "../../types/movieDetails.interface";

export const setMoviesListAction = (moviesList: iMovieDetails) => {
    return {
        type: "ADD_MOVIES_TO_LIST",
        payload: moviesList
    }
}

export const setLastWatchMoviesAction = (moviesList: iMovieDetails) => {
    return {
        type: "ADD_LAST_WATCH_MOVIES_TO_LIST",
        payload: moviesList
    }
}

export const setMoviesFavorites = (moviesList: iMovieDetails) => {
    return {
        type: "SET_MOVIES_FAVORITES",
        payload: moviesList
    }
}