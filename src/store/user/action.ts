import { User } from "../../types/user.interface";

export const setDataUserLogged = (Data: User) => {
    return {
        type: "SET_DATA_USER_LOGGED",
        payload: Data
    }
}

export const useLogout = (Data: boolean) => {
    return {
        type: "USER_LOGOUT",
        payload: Data
    }
}

export const setMoviesFavorites = (Data: any) => {
    return {
        type: "SET_MOVIES_FAVORITES",
        payload: Data
    }
}