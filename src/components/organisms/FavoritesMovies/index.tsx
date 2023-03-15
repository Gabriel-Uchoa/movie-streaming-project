import { useState } from "react"
import { useSelector } from "react-redux"
import useLastWatchMovies from "../../../hooks/useLastWatchMovies"
import ViewMore from "../../atoms/ViewMore"
import CentralMovieCard from "../../molecules/CentralMovieCard"
import MovieCard from "../../molecules/MovieCard"
import { LinkStyle } from "../AllMoviesPage/styles"
import { GeralDiv, LinkCentralMovieCardStyle, MainLastWatchMovies, MainLastWatchMoviesAllView, TitleAndButton, TitleAndButtonAllView, WithoutMovie } from "../LastWatch/styles"

const FavoritesMovies = () => {
    const { movies_favorites } = useSelector((state: any) => state.movies);
    const [viewMore, setViewMore] = useState<boolean>(false)
    const { noRepetitionMovies, firstMovie, firstFourNumbers } = useLastWatchMovies(movies_favorites)

    const handleClick = () => {
        setViewMore(!viewMore)
    }

    if (!movies_favorites.length) {
        return (
            <WithoutMovie>
                <span>Você ainda não adicinou nenhum filme aos favoritos.</span>
            </WithoutMovie>
        )
    }

    return (
        <GeralDiv>
            {!viewMore ?
                <>
                    <TitleAndButton>
                        <h1>Favoritos</h1>
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
                        <h1>Favoritos</h1>
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

export default FavoritesMovies