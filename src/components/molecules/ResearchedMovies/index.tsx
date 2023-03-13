import { useEffect, useState } from "react"
import useResearchedMovies from "../../../hooks/useResearchedMovies"
import searchMovies from "../../../services/api/searchMovies"
import { iMovieDetails } from "../../../types/movieDetails.interface"
import { iSearchMovies } from "../../../types/searchMovies.interface"
import Spinner from "../../atoms/Spinner"
import { LinkStyle, MainMoviePage } from "../../organisms/AllMoviesPage/styles"
import MovieCard from "../MovieCard"

const ResearchedMovies: React.FC<{query: string}> = (props) => {
    const { query } = props
    const [researchedMovies, setresearchedMovies] = useState<iSearchMovies[]>([])
    const [finalResearchedMovies, setFinalResearchedMovies] = useState<iMovieDetails[]>([])

    useEffect(() => {
        const getResearchedMovies = async () => {
            if (query) {
            const response = await searchMovies(query)
            setresearchedMovies(response)
            }
        }
        getResearchedMovies()
    }, [query])
    
    setFinalResearchedMovies(useResearchedMovies(researchedMovies))

    return (
        <>
      {finalResearchedMovies.length === 0 ? (
        <Spinner />
      ) : (
        <MainMoviePage>
          {finalResearchedMovies.map((movie: iMovieDetails, index) => (
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