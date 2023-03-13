import axios from "axios";

export default async function postMoviesFavorites(Data: any) {
    axios.post('https://apigenerator.dronahq.com/api/f05MaH5U/users_favorites_movies', Data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}