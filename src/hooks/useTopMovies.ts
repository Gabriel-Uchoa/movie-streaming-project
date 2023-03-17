import { useEffect } from "react";
import { useSelector } from "react-redux";
import getTopMovies from "../services/api/getTopMovies";
import { iState } from "../types/store.interface";

const useTopMovies = () => {
    const topMoviesList = useSelector((state: iState) => state.movies.topMoviesList)

    useEffect(() => {
        if (topMoviesList.length) {
            return
        }
        getTopMovies()
    }, [])
}

export default useTopMovies