import { useParams } from "react-router-dom"
import ResearchedMovies from "../../molecules/ResearchedMovies"
import { Title } from "./styles"

const SearchAllMovies = () => {
    const { query } = useParams()

    if(!query) {
        return null
    }

    return (
        <div>
            <Title>Exibindo resultados para "{query}"</Title>
            <ResearchedMovies query={query} />
        </div>
    )
}

export default SearchAllMovies