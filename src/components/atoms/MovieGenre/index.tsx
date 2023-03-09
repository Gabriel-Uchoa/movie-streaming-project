import { iGenre } from "../../../types/movieDetails.interface"
import { MovieGenreStyle } from "./styles"


const MovieGenre: React.FC<{genres: iGenre[]}> = (props) => {
    const separateGenres = () => {
        const genreArray: string[] = []
        props.genres.map((genre) => {
            genreArray.push(genre.name)
        })
        return genreArray
    }

    return (
        <MovieGenreStyle>{separateGenres().join(' | ')}</MovieGenreStyle>
    )
}

export default MovieGenre