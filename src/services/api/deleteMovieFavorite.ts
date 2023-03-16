import axios from "axios";
import getMoviesFavorites from "./getMoviesFavorites";

const deleteMovieFavorite = async (idMovie: string, idUser: number) => {
    try {
        const result = await getMoviesFavorites(idUser);
        const movie = result.find((movie: any) => movie.movieId === idMovie);
        await axios.delete(`https://api-generator.retool.com/RQahPt/user_favorites/${movie.id}`);
        return true; 
    } catch (error) {
        console.error(error);
        throw error; 
    }
};

export default deleteMovieFavorite;
