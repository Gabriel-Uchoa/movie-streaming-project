import axios from "axios"
import adaptGetMoviesDetails from "../../shared/adapters/adaptGetMoviesDetails"
import { VITE_API_KEY } from "../../envs"
import.meta.env.VITE_API_KEY

const getAllMoviesDetails = async (movieId: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${VITE_API_KEY}&language=pt-BR`)

    const adaptedResponse = adaptGetMoviesDetails(response.data)

    return adaptedResponse
}

export default getAllMoviesDetails