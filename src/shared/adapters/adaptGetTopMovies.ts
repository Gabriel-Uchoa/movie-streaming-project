import { iTopMovies } from "../../types/topMovies.interface"

const adaptGetTopMovies = (topMovies: any) => {
    const adaptedMovies: iTopMovies[] = topMovies.results.map((movie: any) => {
        return {
            id: movie.id
        }
    })

    return adaptedMovies
}

export default adaptGetTopMovies