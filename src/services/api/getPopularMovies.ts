//https://api.themoviedb.org/3/movie/popular?api_key=65c05f674efd5047870ea0c8723dea6a&language=pt-BR&page=1

import axios from "axios"
import { getMoviesDetails } from "./getMoviesDetails"

export const getPopularMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=65c05f674efd5047870ea0c8723dea6a&language=pt-BR&page=1")
    const popularMovies = response.data
    popularMovies.results.map((movie: any) => {
        getMoviesDetails(movie.id)
    })
}