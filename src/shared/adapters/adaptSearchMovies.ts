import { iSearchMovies } from "../../types/searchMovies.interface"

const adaptSearchMovies = (researchedMovies: any) => {
    const adaptedMovies: iSearchMovies[] = researchedMovies.results.map((movie: any) => {
        return {
            id: movie.id
        }
    })

    return adaptedMovies
}

export default adaptSearchMovies