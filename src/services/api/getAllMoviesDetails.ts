import axios from "axios"
import adaptGetMoviesDetails from "../../shared/adapters/adaptGetMoviesDetails"
import store from "../../store"
import { setMoviesListAction } from "../../store/movies/actions"
import { VITE_API_KEY } from "../../envs"
import.meta.env.VITE_API_KEY

const getAllMoviesDetails = async (movieId: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${VITE_API_KEY}&language=pt-BR`)

    const adaptedResponse = adaptGetMoviesDetails(response.data)

    store.dispatch(setMoviesListAction(adaptedResponse))

    return adaptedResponse
}

export default getAllMoviesDetails