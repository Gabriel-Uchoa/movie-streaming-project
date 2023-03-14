import { useEffect, useState } from "react"
import useResearchedMovies from "../../../hooks/useResearchedMovies"
import searchMovies from "../../../services/api/searchMovies"
import { iMovieDetails } from "../../../types/movieDetails.interface"
import { iSearchMovies } from "../../../types/searchMovies.interface"
import Spinner from "../../atoms/Spinner"
import { LinkStyle, MainMoviePage } from "../../organisms/AllMoviesPage/styles"
import MovieCard from "../MovieCard"
import { DivNoMovie } from "./styles"

const ResearchedMovies: React.FC<{ query: string }> = (props) => {
    const { query } = props
    const [researchedMovies, setresearchedMovies] = useState<iSearchMovies[]>([])
    const adaptedResearchedMovies = useResearchedMovies(researchedMovies)

    useEffect(() => {
        const getResearchedMovies = async () => {
            if (query) {
                const response = await searchMovies(query)
                setresearchedMovies(response)
            }
        }
        getResearchedMovies()
    }, [query])

    console.log(adaptedResearchedMovies)

    return (
        <>
            {adaptedResearchedMovies.length === 0 ? (
                <DivNoMovie>
                    <h1>Não localizamos nenhum título para essa pesquisa.</h1>
                </DivNoMovie>
            ) : (
                <MainMoviePage>
                    {adaptedResearchedMovies.map((movie: iMovieDetails, index) => (
                        <LinkStyle key={index} to={`/movie/${movie.id}`}>
                            <MovieCard genres={movie.genres} poster={movie.poster_path} title={movie.title} runtime={movie.runtime} />
                        </LinkStyle>
                    ))}
                </MainMoviePage>
            )}
        </>
    )
}

export default ResearchedMovies