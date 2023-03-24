import useSelectedMovie from "../../../hooks/useSelectedMovie"
import { MovieDescription } from "./styles"

const MovieOverview: React.FC = () => {
    const selectedMovie = useSelectedMovie()

    return (
        <MovieDescription>{selectedMovie?.overview ? selectedMovie?.overview : 'Esse título não possui sinopse para ser exibida.'}</MovieDescription>
    )
}

export default MovieOverview