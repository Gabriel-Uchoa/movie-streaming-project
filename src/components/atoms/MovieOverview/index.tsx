import useSelectedMovie from "../../../hooks/useSelectedMovie"

const MovieOverview: React.FC = () => {
    const selectedMovie = useSelectedMovie()

    return (
        <span>{selectedMovie?.overview}</span>
    )
}

export default MovieOverview