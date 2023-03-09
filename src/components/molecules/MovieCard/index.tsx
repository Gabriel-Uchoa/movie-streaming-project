import { iGenre } from "../../../types/movieDetails.interface"
import MovieGenre from "../../atoms/MovieGenre"
import TimeAndTitle from "../TimeAndTitle"
import { DivMovieCard } from "./styles"

const MovieCard: React.FC<{genres: iGenre[], poster: string, title: string, runtime: number}> = (props) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${props.poster}`

    return (
        <DivMovieCard datatype={imageUrl}>
            <MovieGenre genres={props.genres} />
            <TimeAndTitle title={props.title} runtime={props.runtime} />
        </DivMovieCard>
    )
}

export default MovieCard

// genres, poster, title, runtime