import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSelectedMovie from "../../../hooks/useSelectedMovie";
import useTrailers from "../../../hooks/useTrailers";
import postMoviesFavorites from "../../../services/api/postMoviesFavorites";
import { iDataUser } from "../../../types/store.interface";
import FavoriteButton from "../../atoms/FavoriteButton";
import MovieOverview from "../../atoms/MovieOverview";
import MovieTitle from "../../atoms/MovieTitle";
import MovieCover from "../../molecules/MovieCover";
import MovieDetails from "../../molecules/MovieDetails";
import TrailerCard from "../../molecules/TrailerCard";
import { ContainsDivTrailers, DivDetailsMovie, DivTextDetails, DivTrailers, MainIndividualMovie, TrailersTitle } from "./styles"


const IndividualMovie: React.FC = () => {
    const user_info: iDataUser = useSelector((state: any) => state.user_info);
    const { movies_favorites } = useSelector((state: any) => state.movies);

    const [isMovieFavorite, setIsMovieFavorite] = useState(false);
    const selectedMovie = useSelectedMovie();
    const trailers = useTrailers();

    const { id } = useParams();

    const handleClickAddFavorite = async () => {
        if (isMovieFavorite) {
            return;
        }
        await postMoviesFavorites({ userId: user_info.personal_info.id, movieID: id });
        setIsMovieFavorite(true);
    };

    useEffect(() => {
        if (id) {
            setIsMovieFavorite(movies_favorites.includes(id) ? true : false);
        }
    }, [movies_favorites, id]);


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
                    <FavoriteButton favorite={isMovieFavorite} handleClick={handleClickAddFavorite} />
                </DivTextDetails>
            </DivDetailsMovie>
            <ContainsDivTrailers>
                <TrailersTitle>Trailers</TrailersTitle>
                <DivTrailers>
                    {trailers?.length ? (
                        trailers.map((trailer, index) => {
                            return <TrailerCard key={index} keyTrailer={trailer.key} numberTrailer={`0${index + 1}`} />;
                        })
                    ) : (
                        <span>Esse título não possui trailers para serem exibidos.</span>
                    )}
                </DivTrailers>
            </ContainsDivTrailers>
        </MainIndividualMovie>
    );
};

export default IndividualMovie;
