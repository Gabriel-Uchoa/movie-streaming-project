import { useState } from "react"
import { useSelector } from "react-redux"
import ViewMore from "../../atoms/ViewMore"
import { TextViewMore } from "../../atoms/ViewMore/styles"
import CentralMovieCard from "../../molecules/CentralMovieCard"
import MovieCard from "../../molecules/MovieCard"
import { LinkStyle } from "../AllMoviesPage/styles"
import { GeralDiv, LinkCentralMovieCardStyle, MainLastWatchMovies, MainLastWatchMoviesAllView, TitleAndButton, TitleAndButtonAllView, WithoutMovie } from "../LastWatch/styles"

const FavoritesMovies = () => {
    const { movies_favorites } = useSelector((state: any) => state.movies);
    const [viewMore, setViewMore] = useState<boolean>(false)

    const handleClick = () => {
        setViewMore(!viewMore)
        console.log(viewMore)
    }

    if (!movies_favorites.length) {
        return (
            <WithoutMovie>
                <span>Você ainda não adicinou nenhum filme aos favoritos.</span>
            </WithoutMovie>
        )
    }

    const [firstMovie, ...remainingMovies] = movies_favorites
    const firstFourNumbers = [...remainingMovies.slice(0, 4).map((movie: any) => movie)]

    return (
        <GeralDiv>
            {!viewMore ?
                <>
                    <TitleAndButton>
                        <h1>Vistos Recentemente</h1>
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
                        <h1>Vistos Recentemente</h1>
                        <ViewMore onClick={handleClick} viewMore={viewMore} />
                    </TitleAndButtonAllView>
                    <MainLastWatchMoviesAllView>
                        {remainingMovies.map((movie: any, index: any) => {
                            return <LinkStyle key={index} to={`/movie/${movie.id}`}> <MovieCard genres={movie.genres} poster={movie.poster_path} title={movie.title} runtime={movie.runtime} /> </LinkStyle>
                        })}
                    </MainLastWatchMoviesAllView>
                </>
            }

        </GeralDiv>
    )
}

export default FavoritesMovies