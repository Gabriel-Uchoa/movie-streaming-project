import useSelectedMovie from "../../../hooks/useSelectedMovie"
import useTrailers from "../../../hooks/useTrailers"
import FavoriteButton from "../../atoms/FavoriteButton"
import MovieOverview from "../../atoms/MovieOverview"
import MovieTitle from "../../atoms/MovieTitle"
import MovieCover from "../../molecules/MovieCover"
import MovieDetails from "../../molecules/MovieDetails"
import TrailerCard from "../../molecules/TrailerCard"
import { Span } from "../Sign/styles"
import { ContainsDivTrailers, DivDetailsMovie, DivTextDetails, DivTrailers, MainIndividualMovie, TrailersTitle } from "./styles"

const IndividualMovie: React.FC = () => {
    const selectedMovie = useSelectedMovie()
    const trailers = useTrailers()
    console.log(trailers)

    if (!selectedMovie) {
        return null;
    }

    return (
        <MainIndividualMovie>
            <MovieCover />
            <DivDetailsMovie>
                <MovieTitle />
                <MovieOverview />
                <DivTextDetails>
                    <MovieDetails />
                    <FavoriteButton />
                </DivTextDetails>
            </DivDetailsMovie>
            <ContainsDivTrailers>
                <TrailersTitle>Trailers</TrailersTitle>
                <DivTrailers>
                    {trailers ? trailers.map((trailer, index) => {
                        return <TrailerCard key={index} keyTrailer={trailer.key} />
                    }) : null }
                </DivTrailers>
            </ContainsDivTrailers>
        </MainIndividualMovie>
    )
}

export default IndividualMovie