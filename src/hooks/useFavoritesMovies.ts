import { useEffect } from "react";
import { useSelector } from "react-redux";
import getMoviesDetails from "../services/api/getMoviesDetails";
import getMoviesFavorites from "../services/api/getMoviesFavorites";
import store from "../store";
import { setMoviesFavorites } from "../store/movies/actions";

interface apiMoviesFavorites {
    userId?: number,
    movieID: number,
    id?: number
}

const useFavoritesMovies = async (userID: string | number, movies: any) => {
    if (movies.length) {
        return;
    }
    const fetchFavorites = async () => {
        const favorites = await getMoviesFavorites(userID);
        console.log("favorites", favorites)
        /*
            //Mock dos filmes favoritos caso api esteja inacessível  
            const mock = [
                { movieID: 1077280 },
                { movieID: 315162 },
                { movieID: 934433 },
                { movieID: 631842 },
                { movieID: 536554 },
                { movieID: 76600 },
                { movieID: 934433 },
                { movieID: 785084 },
            ]
       
            const favorites = mock 
        */
        favorites.forEach((movie: apiMoviesFavorites) => {
            getMoviesDetails(movie.movieID).then(
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
