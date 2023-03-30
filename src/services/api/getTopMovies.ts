import axios from "axios"
import { VITE_API_KEY } from "../../envs"
import getTopMoviesDetails from "./getTopMoviesDetails"
import.meta.env.VITE_API_KEY

const getTopMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${VITE_API_KEY}&language=pt-BR&page=1`)

    const topMovies = response.data

    const topMoviesPromise = await Promise.all(
        topMovies.results.map((movie: any) => {
            return getTopMoviesDetails(movie.id)
        })
    )

    return topMoviesPromise
}

export default getTopMovies