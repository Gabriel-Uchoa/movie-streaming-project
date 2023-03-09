import Footer from "../organisms/Footer"
import NavBar from "../organisms/NavBar"
import MoviePage from "../organisms/MoviePage"
import { useSelector } from "react-redux"
import { iState } from "../../types/store.interface"
import { useEffect } from "react"
import { getPopularMovies } from "../../services/api/getPopularMovies"

const HomeTemplate: React.FC = () => {
    const moviesList = useSelector((state: iState) => state.movies.moviesList)

    console.log(moviesList)

    useEffect(() => {
        const getData = async () => {
            await getPopularMovies()
        }
        getData()
    }, [])

    return (
        <>
            <NavBar />
            <MoviePage />
            <Footer />
        </>
    )
}

export default HomeTemplate