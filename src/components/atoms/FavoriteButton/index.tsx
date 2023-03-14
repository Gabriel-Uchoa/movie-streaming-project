import favoriteImage from '../../../assets/images/favorite.png'
import { FavoriteImage } from './styles'

const FavoriteButton: React.FC<{ handleClick: any, favorite: boolean }> = (props) => {
    return (
        <FavoriteImage src={props.favorite ? "https://img.icons8.com/office/80/null/hearts.png" : favoriteImage} onClick={props.handleClick} alt="imagem de coração para representar um filme favoritado" />
    )
}

export default FavoriteButton