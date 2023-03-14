import { useParams } from "react-router-dom"
import ResearchedMovies from "../../molecules/ResearchedMovies"
import { GeralDiv } from "./styles"

const SearchAllMovies = () => {
    const { query } = useParams()

    if(!query) {
        return null
    }

    return (
        <GeralDiv>
            <h1>Exibindo resultados para "{query}"</h1>
            <ResearchedMovies query={query} />
        </GeralDiv>
    )
}

export default SearchAllMovies