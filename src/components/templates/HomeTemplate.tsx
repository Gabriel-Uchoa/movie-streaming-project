import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"
import AllMoviesPage from "../organisms/AllMoviesPage"
import { useEffect } from "react"
import { getPopularMovies } from "../../services/api/getPopularMovies"

const HomeTemplate: React.FC = () => {
    useEffect(() => {
        getPopularMovies()
    }, [])

    return (
        <>
            <NavBar />
            <AllMoviesPage />
            <Footer />
        </>
    )
}

export default HomeTemplate
