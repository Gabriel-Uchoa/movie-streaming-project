import axios from "axios"
import adaptGetTopMovies from "../../shared/adapters/adaptGetTopMovies"
import { VITE_API_KEY } from "../../envs"
import.meta.env.VITE_API_KEY

const getTopMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${VITE_API_KEY}&language=pt-BR&page=1`)

    const adaptedResponse = adaptGetTopMovies(response.data)

    return adaptedResponse
}

export default getTopMovies