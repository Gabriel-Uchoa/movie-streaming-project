import usePopularMovies from "../../hooks/usePopularMovies"
import Footer from "../organisms/Footer"
import IndividualMovie from "../organisms/IndividualMovie"
import NavBar from "../organisms/NavBar"

const PageMovieTemplate: React.FC = () => {
    usePopularMovies()

    return (
        <>
        <NavBar />
        <IndividualMovie />
        <Footer />
    </>
    )   
}

export default PageMovieTemplate