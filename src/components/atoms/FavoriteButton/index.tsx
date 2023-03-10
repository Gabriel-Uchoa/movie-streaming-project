import favoriteImage from '../../../assets/images/favorite.png'
import { FavoriteImage } from './styles'

const FavoriteButton: React.FC = () => {
    return (
        <FavoriteImage src={favoriteImage} alt="imagem de coração para representar um filme favoritado" />
    )
}

export default FavoriteButton