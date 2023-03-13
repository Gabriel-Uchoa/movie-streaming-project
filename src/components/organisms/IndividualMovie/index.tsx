import { useState } from "react"
import useSelectedMovie from "../../../hooks/useSelectedMovie"
import useTrailers from "../../../hooks/useTrailers"
import FavoriteButton from "../../atoms/FavoriteButton"
import MovieOverview from "../../atoms/MovieOverview"
import MovieTitle from "../../atoms/MovieTitle"
import MovieCover from "../../molecules/MovieCover"
import MovieDetails from "../../molecules/MovieDetails"
import TrailerCard from "../../molecules/TrailerCard"
import { ContainsDivTrailers, DivDetailsMovie, DivTextDetails, DivTrailers, MainIndividualMovie, TrailersTitle } from "./styles"

const IndividualMovie: React.FC = () => {
    const selectedMovie = useSelectedMovie()
    const trailers = useTrailers()

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
                    {trailers?.length ? trailers.map((trailer, index) => {
                        return <TrailerCard key={index} keyTrailer={trailer.key} numberTrailer={`0${index + 1}`} />
                    }) : <span>Esse título não possui trailers para serem exibidos.</span>}
                </DivTrailers>
            </ContainsDivTrailers>
        </MainIndividualMovie>
    )
}

export default IndividualMovie