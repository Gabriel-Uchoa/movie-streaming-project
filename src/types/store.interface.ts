import { string } from "yup"
import { iMovieDetails } from "./movieDetails.interface"
import { User } from "./user.interface"

export interface iAction {
    type: string,
    payload: any
}

export interface iState {
    movies: {
        moviesList: iMovieDetails[],
        lastWatchMoviesList: iMovieDetails[]
    }
}
