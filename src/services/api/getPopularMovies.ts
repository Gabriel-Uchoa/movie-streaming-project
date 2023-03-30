//https://api.themoviedb.org/3/movie/popular?api_key=65c05f674efd5047870ea0c8723dea6a&language=pt-BR&page=1

import axios from "axios"
import getAllMoviesDetails from "./getAllMoviesDetails"
import { VITE_API_KEY } from "../../envs"
import.meta.env.VITE_API_KEY

const getPopularMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${VITE_API_KEY}&language=pt-BR&page=1`)

    const popularMovies = response.data

    const moviesDetailsPromise = await Promise.all(
        popularMovies.results.map((movie: any) => {
            return getAllMoviesDetails(movie.id)
        })
    )

    return moviesDetailsPromise
}

export default getPopularMovies