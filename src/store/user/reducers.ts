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
    movies_favorites: {
        movieId: ''
    }

}

const userReducer = (state = USER_DATA_INITIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "SET_DATA_USER_LOGGED":
            return {
                ...state,
                personal_info: action.payload,
            }
        default:
            return state
    }
}

export default userReducer