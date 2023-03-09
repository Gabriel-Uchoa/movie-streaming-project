import { iAction } from "../../types/store.interface"

const MOVIES_INICIAL_STATE = {
    moviesList: []
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
        default: 
            return state
    }
}

export default moviesReducer