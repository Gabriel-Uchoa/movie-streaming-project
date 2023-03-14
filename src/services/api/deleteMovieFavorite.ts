import axios from "axios";
import getMoviesFavorites from "./getMoviesFavorites";

const deleteMovieFavorite = async (idMovie: string, idUser: number) => {
    try {
        const result = await getMoviesFavorites(idUser);
        const movie = result.find((movie: any) => movie.movieID === idMovie);
        await axios.delete(`https://apigenerator.dronahq.com/api/f05MaH5U/users_favorites_movies/${movie.id}`);
    } catch (error) {
        console.error(error);
    }
};

export default deleteMovieFavorite;