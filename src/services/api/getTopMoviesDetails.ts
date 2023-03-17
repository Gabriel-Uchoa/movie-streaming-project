import axios from "axios"
import store from "../../store"
import { setTopMoviesAction } from "../../store/movies/actions"
import { VITE_API_KEY } from "../../envs"
import adaptGetTopMoviesDetails from "../../shared/adapters/adaptGetTopMoviesDetails"
import.meta.env.VITE_API_KEY

const getTopMoviesDetails = async (movieId: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${VITE_API_KEY}&language=pt-BR`)

    const adaptedResponse = adaptGetTopMoviesDetails(response.data)

    store.dispatch(setTopMoviesAction(adaptedResponse))

    return adaptedResponse
}

export default getTopMoviesDetails