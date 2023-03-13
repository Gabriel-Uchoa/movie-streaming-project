import axios from "axios"
import adaptGetMoviesDetails from "../../shared/adapters/adaptGetMoviesDetails"
import store from "../../store"
import { setMoviesListAction } from "../../store/movies/actions"

const getMoviesDetails = async (movieId: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=65c05f674efd5047870ea0c8723dea6a&language=pt-BR`)

    const adaptedResponse = adaptGetMoviesDetails(response.data)

    store.dispatch(setMoviesListAction(adaptedResponse))

    return adaptedResponse
}

export default getMoviesDetails