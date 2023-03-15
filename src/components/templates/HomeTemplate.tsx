import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"
import AllMoviesPage from "../organisms/AllMoviesPage"
import usePopularMovies from "../../hooks/usePopularMovies"
import { iDataUser } from "../../types/store.interface"
import { useSelector } from "react-redux"
import useFavoritesMovies from "../../hooks/useFavoritesMovies"

const HomeTemplate: React.FC = () => {
    const user_data: iDataUser = useSelector((state: any) => state.user_info);
    const { movies_favorites } = useSelector((state: any) => state.movies);

    usePopularMovies()
    useFavoritesMovies(user_data.personal_info.id, movies_favorites)

    return (
        <>
            <NavBar />
            <AllMoviesPage />
            <Footer />
        </>
    )
}

export default HomeTemplate
