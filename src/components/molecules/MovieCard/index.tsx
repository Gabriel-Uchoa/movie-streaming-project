import MovieGenre from "../../atoms/MovieGenre"
import TimeAndTitle from "../TimeAndTitle"
import { DivMovieCard } from "./styles"

const MovieCard: React.FC = () => {
    return (
        <DivMovieCard>
            <MovieGenre />
            <TimeAndTitle />
        </DivMovieCard>
    )
}

export default MovieCard