import axios from "axios"
import adaptSearchMovies from "../../shared/adapters/adaptSearchMovies"

const searchMovies = async (query: string) => {
    console.log(query)
    const searchWords = query.split(' ')
    const queryWords = searchWords.join('-')
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=65c05f674efd5047870ea0c8723dea6a&language=pt-BR&query=${queryWords}&page=1&include_adult=false`)

    const adaptedResponse = adaptSearchMovies(response.data)

    return adaptedResponse
}

export default searchMovies