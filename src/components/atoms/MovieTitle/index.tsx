import useSelectedMovie from "../../../hooks/useSelectedMovie"
import { TitleStyle } from "./styles"

const MovieTitle: React.FC = () => {
    const selectedMovie = useSelectedMovie()

    return (
        <TitleStyle>{selectedMovie?.title}</TitleStyle>
    )
}

export default MovieTitle