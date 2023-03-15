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

const useFavoritesMovies = (userID: string | number) => {
    const { movies_favorites } = useSelector((state: any) => state.movies);

    useEffect(() => {
        if (movies_favorites.length) {
            return;
        }
        const fetchFavorites = async () => {
            const favorites = await getMoviesFavorites(userID);
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
        fetchFavorites();
    }, []);
};

export default useFavoritesMovies;
