import { useEffect } from "react"
import { useSelector } from "react-redux"
import getPopularMovies from "../services/api/getPopularMovies"
import store from "../store"
import { setMoviesListAction } from "../store/movies/actions"
import { iState } from "../types/store.interface"

const usePopularMovies = () => {
    const moviesList = useSelector((state: iState) => state.movies.moviesList)

    useEffect(() => {
        if (moviesList.length) {
            return
        }
        const getMovies = async () => {
            const response = await getPopularMovies()
            store.dispatch(setMoviesListAction(response))
        }

    getMovies()
    }, [])
}

export default usePopularMovies