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
            <span>Genre: {separateGenres().join(', ')}</span>
            <span>Duration: {selectedMovie?.runtime}</span>
            <span>Rating: {selectedMovie?.vote_average}</span>
        </>
    )
}

export default MovieDetails