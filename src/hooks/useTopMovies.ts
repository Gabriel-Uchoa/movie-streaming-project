import { useEffect } from "react";
import { useSelector } from "react-redux";
import getTopMovies from "../services/api/getTopMovies";
import store from "../store";
import { setTopMoviesAction } from "../store/movies/actions";
import { iState } from "../types/store.interface";

const useTopMovies = () => {
    const topMoviesList = useSelector((state: iState) => state.movies.topMoviesList)

    useEffect(() => {
        if (topMoviesList.length) {
            return
        }
        const getTopMoviesData = async () => {
            const response = await getTopMovies()
            store.dispatch(setTopMoviesAction(response))
        } 

        getTopMoviesData()
    }, [])
}

export default useTopMovies