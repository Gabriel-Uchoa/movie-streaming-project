import { useEffect } from "react";
import { useSelector } from "react-redux";
import getMoviesFavorites from "../services/api/getMoviesFavorites";
import store from "../store";
import { setMoviesFavorites } from "../store/user/action";

const useFavoritesMovies = (userID: string | number) => {
    const { movies_favorites } = useSelector((state: any) => state.user_info);

    useEffect(() => {
        if (movies_favorites.length) {
            console.log(movies_favorites)
            return;
        }
        const fetchFavorites = async () => {
            const favorites = await getMoviesFavorites(userID);
            favorites.forEach((movie: any) => {
                store.dispatch(
                    setMoviesFavorites({
                        movieID: movie.movieID,
                        userId: movie.userId,
                    })
                );
            });
        };
        fetchFavorites();
    }, []);
};

export default useFavoritesMovies;
