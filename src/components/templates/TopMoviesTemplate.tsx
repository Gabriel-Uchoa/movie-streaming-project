import useTopMovies from "../../hooks/useTopMovies"
import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"
import TopMovies from "../organisms/TopMovies"

const TopMoviesTemplate = () => {
    useTopMovies()

    return (
        <>
            <NavBar />
            <TopMovies />
            <Footer />
        </>
    )
}

export default TopMoviesTemplate