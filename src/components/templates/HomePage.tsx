import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"
import MoviePage from "../organisms/MoviePage"
import RenderSign from "../organisms/Sign"
const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            {/* <MoviePage /> */}
            <RenderSign />
            <Footer />
        </>
    )
}

export default HomePage