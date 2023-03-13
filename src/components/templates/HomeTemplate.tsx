import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"
import AllMoviesPage from "../organisms/AllMoviesPage"
import usePopularMovies from "../../hooks/usePopularMovies"
import { iDataUser } from "../../types/store.interface"
import { useSelector } from "react-redux"
import useFavoritesMovies from "../../hooks/useFavoritesMovies"

const HomeTemplate: React.FC = () => {
    const user_info: iDataUser = useSelector((state: any) => state.user_info);

    useFavoritesMovies(user_info.personal_info.id)
    usePopularMovies()

    return (
        <>
            <NavBar />
            <AllMoviesPage />
            <Footer />
        </>
    )
}

export default HomeTemplate
