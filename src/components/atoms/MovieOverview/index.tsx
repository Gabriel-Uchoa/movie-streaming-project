import useSelectedMovie from "../../../hooks/useSelectedMovie"

const MovieOverview: React.FC = () => {
    const selectedMovie = useSelectedMovie()

    return (
        <span>{selectedMovie?.overview ? selectedMovie?.overview : 'Esse título não possui sinopse para ser exibida.'}</span>
    )
}

export default MovieOverview