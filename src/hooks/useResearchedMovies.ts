import { useMemo } from "react";
import { useSelector } from "react-redux";
import { iMovieDetails } from "../types/movieDetails.interface";
import { iSearchMovies } from "../types/searchMovies.interface"
import { iState } from "../types/store.interface";

const useResearchedMovies = (researchedMovies: iSearchMovies[]) => {
    const moviesList = useSelector((state: iState) => state.movies.moviesList);
    const topMoviesList = useSelector((state: iState) => state.movies.topMoviesList);

    return useMemo(() => {
        const idResearchedMovies = researchedMovies.map((movie) => movie.id)
        const idMoviesList = moviesList.map((movie) => movie.id)
        const idTopMoviesList = topMoviesList.map((movie) => movie.id)

        let commonIds = idMoviesList.filter((id) => idResearchedMovies.includes(id))
        if (!commonIds.length) {
            commonIds = idTopMoviesList.filter((id) => idResearchedMovies.includes(id))
        }

        let commonMovies = moviesList.filter((movie) => commonIds.includes(movie.id))
        if (!commonMovies.length) {
            commonMovies = topMoviesList.filter((movie) => commonIds.includes(movie.id))
        }

        const noRepetitionMovies = commonMovies.reduce((acc: iMovieDetails[], movie) => {
            const exists = acc.some((f: iMovieDetails) => f.id === movie.id)
            if (!exists) {
                acc.push(movie)
            }
            return acc
        }, [])

        return noRepetitionMovies
    }, [researchedMovies])

}

export default useResearchedMovies