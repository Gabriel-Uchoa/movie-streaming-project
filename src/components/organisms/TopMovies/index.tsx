import { useEffect, useState } from "react"
import useTopMovies from "../../../hooks/useTopMovies"
import getTopMovies from "../../../services/api/getTopMovies"
import ViewMore from "../../atoms/ViewMore"
import CentralMovieCard from "../../molecules/CentralMovieCard"
import MovieCard from "../../molecules/MovieCard"
import { LinkStyle } from "../AllMoviesPage/styles"
import { GeralDiv, LinkCentralMovieCardStyle, MainLastWatchMovies, MainLastWatchMoviesAllView, TitleAndButton, TitleAndButtonAllView } from "../LastWatch/styles"

const TopMovies = () => {
    const [viewMore, setViewMore] = useState<boolean>(false)
    const { noRepetitionMovies, firstMovie, firstFourNumbers } = useTopMovies()

    const handleClick = () => {
        setViewMore(!viewMore)
    }

    return (
        <GeralDiv>
            {!viewMore ?
                <>
                    <TitleAndButton>
                        <h1>Top Filmes</h1>
                        <ViewMore onClick={handleClick} viewMore={viewMore} />
                    </TitleAndButton>
                    <MainLastWatchMovies>
                        {<LinkCentralMovieCardStyle to={`/movie/${firstMovie.id}`}> <CentralMovieCard genres={firstMovie.genres} poster={firstMovie.backdrop_path} title={firstMovie.title} runtime={firstMovie.runtime} /> </LinkCentralMovieCardStyle>
                        }
                        {firstFourNumbers.map((movie, index) => {
                            return <LinkStyle key={index} to={`/movie/${movie.id}`}> <MovieCard genres={movie.genres} poster={movie.poster_path} title={movie.title} runtime={movie.runtime} /> </LinkStyle>
                        })}
                    </MainLastWatchMovies>
                </> :
                <>
                    <TitleAndButtonAllView>
                        <h1>Top Filmes</h1>
                        <ViewMore onClick={handleClick} viewMore={viewMore} />
                    </TitleAndButtonAllView>
                    <MainLastWatchMoviesAllView>
                        {noRepetitionMovies.map((movie, index) => {
                            return <LinkStyle key={index} to={`/movie/${movie.id}`}> <MovieCard genres={movie.genres} poster={movie.poster_path} title={movie.title} runtime={movie.runtime} /> </LinkStyle>
                        })}
                    </MainLastWatchMoviesAllView>
                </>
            }

        </GeralDiv>
    )
}

export default TopMovies