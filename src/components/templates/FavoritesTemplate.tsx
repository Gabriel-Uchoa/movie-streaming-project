import FavoritesMovies from "../organisms/FavoritesMovies"
import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"

const FavoritesTemplate: React.FC = () => {

    return (
        <>
            <NavBar />
            <FavoritesMovies />
            <Footer />
        </>
    )
}

export default FavoritesTemplate
