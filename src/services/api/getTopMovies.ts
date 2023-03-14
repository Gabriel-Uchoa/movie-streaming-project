import axios from "axios"
import adaptGetTopMovies from "../../shared/adapters/adaptGetTopMovies"

const getTopMovies = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=65c05f674efd5047870ea0c8723dea6a&language=pt-BR&page=1')

    const adaptedResponse = adaptGetTopMovies(response.data)

    return adaptedResponse
}

export default getTopMovies