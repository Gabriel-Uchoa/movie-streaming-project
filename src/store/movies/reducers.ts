import { iAction } from "../../types/store.interface"

const MOVIES_INICIAL_STATE = {
    moviesList: [],
    lastWatchMoviesList: [],
    topMoviesList: [],
    movies_favorites: []
}

const moviesReducer = (state = MOVIES_INICIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "ADD_MOVIES_TO_LIST":
            return {
                ...state,
                moviesList: action.payload
            }
        case "ADD_LAST_WATCH_MOVIES_TO_LIST":
            const newLastWatchMoviesList = [...state.lastWatchMoviesList]
            newLastWatchMoviesList.unshift(action.payload as never)
            return {
                ...state,
                lastWatchMoviesList: newLastWatchMoviesList
            }
        case "ADD_TOP_MOVIES_TO_LIST":
            return {
                ...state,
                topMoviesList: action.payload
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