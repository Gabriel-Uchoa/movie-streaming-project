import { iGenre } from "../../../types/movieDetails.interface"
import { DivGenres, MovieGenreStyle } from "./styles"


const MovieGenre: React.FC<{ genres: iGenre[] }> = (props) => {
    return (
        <DivGenres>
            {props.genres.map((genre) => {
                return <MovieGenreStyle>{genre.name}</MovieGenreStyle>
            })}</DivGenres>
    )
}

export default MovieGenre