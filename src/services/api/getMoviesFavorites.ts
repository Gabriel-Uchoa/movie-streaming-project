import axios from "axios";

const getMoviesFavorites = async (userID: string | number) => {
    const response = await axios.get("https://apigenerator.dronahq.com/api/f05MaH5U/users_favorites_movies")
    const filteredMovies = response.data.filter((movie: any) => movie.userId === userID);
    return filteredMovies
}

export default getMoviesFavorites