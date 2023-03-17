import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { iMovieDetails } from "../types/movieDetails.interface"
import { iState } from "../types/store.interface"


const useSelectedMovie = () => {
    const moviesList = useSelector((state: iState) => state.movies.moviesList)
    const topMoviesList = useSelector((state: iState) => state.movies.topMoviesList)
    const [selectedMovie, setSelectedMovie] = useState<iMovieDetails>()
    const { id } = useParams()  

    useEffect (() => {
        if (moviesList.length) {
            const movie = moviesList.find((movie) => movie.id === Number(id))
            setSelectedMovie(movie)
        }
        const movie = topMoviesList.find((movie) => movie.id === Number(id))
            setSelectedMovie(movie)
    }, [moviesList, topMoviesList, id])

    return selectedMovie
}

export default useSelectedMovie