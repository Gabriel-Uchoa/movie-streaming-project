import { iAction } from "../../types/store.interface"

const MOVIES_INICIAL_STATE = {
    moviesList: [],
    lastWatchMoviesList: [],
    movies_favorites: []
}

const moviesReducer = (state = MOVIES_INICIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "ADD_MOVIES_TO_LIST":
            const newMoviesList = [...state.moviesList]
            newMoviesList.push(action.payload as never)
            return {
                ...state,
                moviesList: newMoviesList
            }
        case "ADD_LAST_WATCH_MOVIES_TO_LIST":
            const newLastWatchMoviesList = [...state.lastWatchMoviesList]
            newLastWatchMoviesList.push(action.payload as never)
            return {
                ...state,
                lastWatchMoviesList: newLastWatchMoviesList
            }
        case "SET_MOVIES_FAVORITES":
            const movieToAdd = action.payload;
            const isAlreadyFavorite = state.movies_favorites.some((movie: { id: number }): any => movie.id === movieToAdd.id);
            if (isAlreadyFavorite) {
                return state;
            }
            return {
                ...state,
                movies_favorites: [...state.movies_favorites, movieToAdd]
            };

        default:
            return state
    }
}

export default moviesReducer