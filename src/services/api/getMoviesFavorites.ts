import axios from "axios";

const getMoviesFavorites = async (userID: string | number) => {
    const response = await axios.get("https://api-generator.retool.com/RQahPt/user_favorites")
    const filteredMovies = response.data.filter((movie: any) => movie.userId === userID);
    return filteredMovies
}

export default getMoviesFavorites