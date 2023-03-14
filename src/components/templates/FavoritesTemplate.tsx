import { useSelector } from "react-redux";
import useFavoritesMovies from "../../hooks/useFavoritesMovies";
import { iDataUser } from "../../types/store.interface";
import FavoritesMovies from "../organisms/FavoritesMovies"
import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"

const FavoritesTemplate: React.FC = () => {
    const user_info: iDataUser = useSelector((state: any) => state.user_info);

    useFavoritesMovies(user_info.personal_info.id)
    return (
        <>
            <NavBar />
            <FavoritesMovies />
            <Footer />
        </>
    )
}

export default FavoritesTemplate
