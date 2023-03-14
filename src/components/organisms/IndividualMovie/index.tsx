import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSelectedMovie from "../../../hooks/useSelectedMovie";
import useTrailers from "../../../hooks/useTrailers";
import deleteMovieFavorite from "../../../services/api/deleteMovieFavorite";
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
        if (id) {
            if (isMovieFavorite) {
                await deleteMovieFavorite(id, user_info.personal_info.id)
                    .then(function (result) {
                        if (result) {
                            setIsMovieFavorite(false);
                        } else {
                            alert("Não foi possivel desfavoritar!")

                        }
                    })
                    .catch(function (error) {
                        alert("Erro 500")
                    });

            } else {
                await postMoviesFavorites({ userId: user_info.personal_info.id, movieID: id })
                    .then(function (response) {
                        setIsMovieFavorite(true);
                    })
                    .catch(function (error) {
                        alert("Erro 500")
                    });
            }
        }
    };

    useEffect(() => {
        if (id) {
            const isFavorite = movies_favorites.find((movie: { id: number; }) => movie.id === Number(id));
            setIsMovieFavorite(!!isFavorite);
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
