import { iGenre } from "../../../types/movieDetails.interface"
import MovieGenre from "../../atoms/MovieGenre"
import TimeAndTitle from "../TimeAndTitle"
import { DivCentralMovie } from "./styles"

const CentralMovieCard: React.FC<{genres: iGenre[], poster: string, title: string, runtime: string}> = (props) => {
    const backdropImage = `https://image.tmdb.org/t/p/w500${props.poster}`

    return (
        <DivCentralMovie datatype={backdropImage}>
            <MovieGenre genres={props.genres} />
            <TimeAndTitle title={props.title} runtime={props.runtime} />
        </DivCentralMovie>
    )
}

export default CentralMovieCard