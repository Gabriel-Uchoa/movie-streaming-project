import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"
import MoviePage from "../organisms/MoviePage"

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <MoviePage />
            <Footer />
        </>
    )
}

export default HomePage