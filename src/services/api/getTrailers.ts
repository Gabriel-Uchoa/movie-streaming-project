import axios from "axios"
import adaptGetTrailers from "../../shared/adapters/adaptGetTrailers"

const getTrailers = async (movieId: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=65c05f674efd5047870ea0c8723dea6a&language=pt-BR`)

    const adaptedResponse = adaptGetTrailers(response.data)

    console.log(adaptedResponse)

    return adaptedResponse
}

export default getTrailers