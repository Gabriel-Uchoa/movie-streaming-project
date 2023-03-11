import { User } from "../../types/user.interface";

export const setDataUserLogged = (moviesList: User) => {
    return {
        type: "SET_DATA_USER_LOGGED",
        payload: moviesList
    }
}