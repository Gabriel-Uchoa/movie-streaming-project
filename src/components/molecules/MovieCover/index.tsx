import playImage from '../../../assets/images/play.png'
import useSelectedMovie from '../../../hooks/useSelectedMovie'
import store from '../../../store'
import { setLastWatchMoviesAction } from '../../../store/movies/actions'
import { DivCover, Image } from './styles'

const MovieCover: React.FC = () => {
    const selectedMovie = useSelectedMovie()

    if (!selectedMovie) {
        return null
    }

    const backdropImage = `https://image.tmdb.org/t/p/w500${selectedMovie?.backdrop_path}`

    return (
        <DivCover datatype={backdropImage} >
            <Image onClick={() => store.dispatch(setLastWatchMoviesAction(selectedMovie))
            } src={playImage} alt="imagem de iniciar reprodução" />
        </DivCover>
    )
}

export default MovieCover