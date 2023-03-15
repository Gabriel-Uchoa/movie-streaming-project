import axios from "axios"
import adaptGetTrailers from "../../shared/adapters/adaptGetTrailers"
import { VITE_API_KEY } from "../../envs"
import.meta.env.VITE_API_KEY

const getTrailers = async (movieId: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${VITE_API_KEY}&language=pt-BR`)

    const adaptedResponse = adaptGetTrailers(response.data)

    return adaptedResponse
}

export default getTrailers