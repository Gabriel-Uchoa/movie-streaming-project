import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSelectedMovie from "../../../hooks/useSelectedMovie";
import useTrailers from "../../../hooks/useTrailers";
import deleteMovieFavorite from "../../../services/api/deleteMovieFavorite";
import postMoviesFavorites from "../../../services/api/postMoviesFavorites";
import store from "../../../store";
import { iDataUser } from "../../../types/store.interface";
import FavoriteButton from "../../atoms/FavoriteButton";
import MovieOverview from "../../atoms/MovieOverview";
import MovieTitle from "../../atoms/MovieTitle";
import MovieDetails from "../../molecules/MovieDetails";
import TrailerCard from "../../molecules/TrailerCard";
import { ContainsDivTrailers, DivDetailsMovie, DivPlay, DivTextDetails, DivTrailers, FirstContainer, MainIndividualMovie, PlayImage, SecondContainer, TrailersTitle } from "./styles"
import playImage from '../../../assets/images/play-vector.png'
import firstContainer from '../../../assets/images/play-first-container.png'
import secondContainer from '../../../assets/images/play-second-container.png'
import { setLastWatchMoviesAction } from "../../../store/movies/actions";



const IndividualMovie: React.FC = () => {
    const user_data: iDataUser = useSelector((state: any) => state.user_info);
    const { movies_favorites } = useSelector((state: any) => state.movies);

    const [isMovieFavorite, setIsMovieFavorite] = useState(false);
    const selectedMovie = useSelectedMovie();
    const trailers = useTrailers();

    const { id } = useParams();

    const backdropImage = `https://image.tmdb.org/t/p/w500${selectedMovie?.backdrop_path}`

    const handleClickAddFavorite = async () => {
        if (id) {
            if (isMovieFavorite) {
                await deleteMovieFavorite(id, user_data.personal_info.id)
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
                await postMoviesFavorites({ userId: user_data.personal_info.id, movieId: id }).then(function (response) {
                    setIsMovieFavorite(true);
                }).catch(function (error) {
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
        <MainIndividualMovie datatype={backdropImage}>
            <DivPlay onClick={() => store.dispatch(setLastWatchMoviesAction(selectedMovie))}>
                <SecondContainer src={secondContainer} alt="círculo que envolve o botão de play" />
                <FirstContainer src={firstContainer} alt="círculo que envolve o botão de play" />
                <PlayImage src={playImage} alt="símbolo de play" />
            </DivPlay>
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
