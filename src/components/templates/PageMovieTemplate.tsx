import usePopularMovies from "../../hooks/usePopularMovies"
import useTopMovies from "../../hooks/useTopMovies"
import Footer from "../organisms/Footer"
import IndividualMovie from "../organisms/IndividualMovie"
import NavBar from "../organisms/NavBar"

const PageMovieTemplate: React.FC = () => {
    usePopularMovies()
    useTopMovies()

    return (
        <>
        <NavBar />
        <IndividualMovie />
        <Footer />
        </>
    )   
}

export default PageMovieTemplate