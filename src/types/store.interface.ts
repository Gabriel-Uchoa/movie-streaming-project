import { iMovieDetails } from "./movieDetails.interface"

export interface iAction {
    type: string,
    payload: any
}

export interface iState {
    movies: {
        moviesList: iMovieDetails[]
    }
}