import { iAction, iDataUser } from "../../types/store.interface"

const USER_DATA_INITIAL_STATE: iDataUser = {
    personal_info: {
        name: '',
        email: '',
        password: '',
        phone: '',
        picture: '',
        id: 0,
    },
    logged: false,
    movies_favorites: []
}

const userReducer = (state = USER_DATA_INITIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "SET_DATA_USER_LOGGED":
            return {
                ...state,
                personal_info: action.payload,
                logged: true
            }
        case "USER_LOGOUT":
            return {
                ...state,
                personal_info: '',
                logged: false
            }
        case "SET_MOVIES_FAVORITES":
            if (!state.movies_favorites.includes(action.payload.movieID)) {
                return {
                    ...state,
                    movies_favorites: [...state.movies_favorites, action.payload.movieID],
                };
            }
        default:
            return state
    }
}

export default userReducer