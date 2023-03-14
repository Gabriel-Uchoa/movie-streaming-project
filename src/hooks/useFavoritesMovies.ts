import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getMoviesDetails } from "../services/api/getMoviesDetails";
import getMoviesFavorites from "../services/api/getMoviesFavorites";
import store from "../store";
import { setMoviesFavorites } from "../store/movies/actions";

interface apiMoviesFavorites {
    userId: number,
    movieID: number,
    id: number
}

const useFavoritesMovies = (userID: string | number) => {
    const { movies_favorites } = useSelector((state: any) => state.movies);

    useEffect(() => {
        if (movies_favorites.length) {
            console.log(movies_favorites)
            return;
        }
        const fetchFavorites = async () => {
            const favorites = await getMoviesFavorites(userID);
            favorites.forEach((movie: apiMoviesFavorites) => {
                getMoviesDetails(movie.movieID).then(
                    movieDetailed => {
                        console.log(movieDetailed)
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
