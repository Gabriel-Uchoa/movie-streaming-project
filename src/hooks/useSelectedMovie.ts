import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { iMovieDetails } from "../types/movieDetails.interface"
import { iState } from "../types/store.interface"


const useSelectedMovie = () => {
    const moviesList = useSelector((state: iState) => state.movies.moviesList)
    const [selectedMovie, setSelectedMovie] = useState<iMovieDetails>()
    const { id } = useParams()  

    useEffect (() => {
        const movie = moviesList.find((movie) => movie.id === Number(id))
        setSelectedMovie(movie)
    }, [moviesList, id])

    return selectedMovie
}

export default useSelectedMovie