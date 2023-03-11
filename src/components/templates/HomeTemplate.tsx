import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"
import AllMoviesPage from "../organisms/AllMoviesPage"
import usePopularMovies from "../../hooks/usePopularMovies"

const HomeTemplate: React.FC = () => {
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
