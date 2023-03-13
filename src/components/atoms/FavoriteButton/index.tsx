import favoriteImage from '../../../assets/images/favorite.png'
import { FavoriteImage } from './styles'

const FavoriteButton: React.FC<{ handleClick: any, favorite:boolean }> = (props) => {
    console.log("isFavorite: ",  props.favorite)
    return (
        <FavoriteImage src={favoriteImage} onClick={props.handleClick} alt="imagem de coração para representar um filme favoritado" />
    )
}

export default FavoriteButton