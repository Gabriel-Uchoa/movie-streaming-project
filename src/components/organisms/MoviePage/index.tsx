import MovieCard from "../../molecules/MovieCard"
import { DivMoviePage } from "./styles"

const MoviePage: React.FC = () => {
    return (
        <DivMoviePage>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </DivMoviePage>
    )
}

export default MoviePage