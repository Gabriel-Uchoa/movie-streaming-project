import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getPopularMovies } from "../services/api/getPopularMovies"
import { iState } from "../types/store.interface"

const usePopularMovies = () => {
    const moviesList = useSelector((state: iState) => state.movies.moviesList)

    useEffect(() => {
        if (moviesList.length) {
            return
        }
        getPopularMovies()
    }, [])
}

export default usePopularMovies