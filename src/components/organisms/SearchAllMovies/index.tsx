import { useParams } from "react-router-dom"
import ResearchedMovies from "../../molecules/ResearchedMovies"

const SearchAllMovies = () => {
    const { query } = useParams()

    if(!query) {
        return null
    }

    return (
        <div>
            <h1>Exibindo resultados para "{query}"</h1>
            <ResearchedMovies query={query} />
        </div>
    )
}

export default SearchAllMovies