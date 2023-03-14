import { iAction, iDataUser } from "../../types/store.interface"

const USER_DATA_INITIAL_STATE = {
    personal_info: {
        name: '',
        email: '',
        password: '',
        phone: '',
        picture: '',
        id: 0,
    },
    logged: false,
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

        default:
            return state
    }
}

export default userReducer