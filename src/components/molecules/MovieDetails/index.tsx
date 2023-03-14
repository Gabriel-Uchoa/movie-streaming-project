import useSelectedMovie from "../../../hooks/useSelectedMovie"

const MovieDetails: React.FC = () => {
    const selectedMovie = useSelectedMovie()

    const separateGenres = () => {
        const genreArray: string[] = []
        if (selectedMovie) {
            selectedMovie.genres.map((genre) => {
                genreArray.push(genre.name)
            })
        }
        return genreArray
    }

    return (
        <>
            <span>Gênero: {separateGenres().join(', ')}</span>
            <span>Duração: {selectedMovie?.runtime}</span>
            <span>Avaliação: {selectedMovie?.vote_average}</span>
        </>
    )
}

export default MovieDetails