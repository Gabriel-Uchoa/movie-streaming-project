import useSelectedMovie from "../../../hooks/useSelectedMovie"
import FavoriteButton from "../../atoms/FavoriteButton"
import MovieOverview from "../../atoms/MovieOverview"
import MovieTitle from "../../atoms/MovieTitle"
import MovieCover from "../../molecules/MovieCover"
import MovieDetails from "../../molecules/MovieDetails"
import TrailerCard from "../../molecules/TrailerCard"
import { ContainsDivTrailers, DivDetailsMovie, DivTextDetails, DivTrailers, MainIndividualMovie, TrailersTitle } from "./styles"

const IndividualMovie: React.FC = () => {
    const selectedMovie = useSelectedMovie()

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
                    <TrailerCard />
                    <TrailerCard />
                    <TrailerCard />
                    <TrailerCard />
                </DivTrailers>
            </ContainsDivTrailers>
        </MainIndividualMovie>
    )
}

export default IndividualMovie