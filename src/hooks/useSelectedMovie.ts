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
            const mainMovie = moviesList.find((movie) => movie.id === Number(id))
            setSelectedMovie(mainMovie)
            if (!mainMovie) {
                const topMovie = topMoviesList.find((movie) => movie.id === Number(id))
                setSelectedMovie(topMovie)
            }
    }, [id, moviesList, topMoviesList])
    
    return selectedMovie
}

export default useSelectedMovie