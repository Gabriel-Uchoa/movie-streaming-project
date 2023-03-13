import { iMovieDetails } from "./movieDetails.interface"
import { iFavoriteMovies } from "./movieFavorite.interface"
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
export interface iDataUser {
    personal_info: User,
    logged: boolean
    movies_favorites: Array<iFavoriteMovies>
}