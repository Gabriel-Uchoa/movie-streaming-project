import { useEffect } from "react";
import { useSelector } from "react-redux";
import useFavoritesMovies from "../../hooks/useFavoritesMovies";
import { iDataUser } from "../../types/store.interface";
import FavoritesMovies from "../organisms/FavoritesMovies"
import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"

const FavoritesTemplate: React.FC = () => {
    const user_data: iDataUser = useSelector((state: any) => state.user_info);
    const { movies_favorites } = useSelector((state: any) => state.movies);

    useEffect(() => {
        useFavoritesMovies(user_data.personal_info.id, movies_favorites)
    }, [])
    return (
        <>
            <NavBar />
            <FavoritesMovies />
            <Footer />
        </>
    )
}

export default FavoritesTemplate
