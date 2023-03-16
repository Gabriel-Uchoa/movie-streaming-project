import { useEffect } from "react";
import { useSelector } from "react-redux";
import getMoviesDetails from "../services/api/getMoviesDetails";
import getMoviesFavorites from "../services/api/getMoviesFavorites";
import store from "../store";
import { setMoviesFavorites } from "../store/movies/actions";

interface apiMoviesFavorites {
    userId?: number,
    movieId: number,
    id?: number
}

const useFavoritesMovies = async (userID: string | number, movies: any) => {
    const { movies_favorites } = useSelector((state: any) => state.movies);

    if (movies_favorites.length) {
        return;
    }
    const fetchFavorites = async () => {
        const favorites = await getMoviesFavorites(userID);
        /*
            //Mock dos filmes favoritos caso api esteja inacessível  
            const mock = [
                { movieId: 1077280 },
                { movieId: 315162 },
                { movieId: 934433 },
                { movieId: 631842 },
                { movieId: 536554 },
                { movieId: 76600 },
                { movieId: 934433 },
                { movieId: 785084 },
            ]
       
            const favorites = mock 
        */
        favorites.forEach((movie: apiMoviesFavorites) => {
            getMoviesDetails(movie.movieId).then(
                movieDetailed => {
                    store.dispatch(
                        setMoviesFavorites(movieDetailed)
                    );
                }
            )
        });
    };

    await fetchFavorites();

};

export default useFavoritesMovies;
