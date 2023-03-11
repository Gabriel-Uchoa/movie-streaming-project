import playImage from '../../../assets/images/play.png'
import useSelectedMovie from '../../../hooks/useSelectedMovie'
import { DivCover, Image } from './styles'

const MovieCover: React.FC = () => {
    const selectedMovie = useSelectedMovie()
    
    if (!selectedMovie) {
        return null
    }
    
    const backdropImage = `https://image.tmdb.org/t/p/w500${selectedMovie?.backdrop_path}`

    return (
        <DivCover datatype={backdropImage} >
            <Image src={playImage} alt="imagem de iniciar reprodução" />
        </DivCover>
    )
}

export default MovieCover