import { iAction } from "../../types/store.interface"

const MOVIES_INICIAL_STATE = {
    moviesList: [],
    lastWatchMoviesList: []
}

const moviesReducer = (state = MOVIES_INICIAL_STATE, action: iAction) => {
    console.log({ state: state.lastWatchMoviesList })

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
        default:
            return state
    }
}

export default moviesReducer