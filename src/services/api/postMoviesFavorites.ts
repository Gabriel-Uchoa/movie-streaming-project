import axios from "axios";

export default async function postUsersApi(userData: any) {
    try {
        const response = await axios.post('https://apigenerator.dronahq.com/api/f05MaH5U/users_favorites_movies', userData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
