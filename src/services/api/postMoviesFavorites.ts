import axios from "axios";

export default async function postUsersApi(userData: any) {
    try {
        const response = await axios.post('https://api-generator.retool.com/RQahPt/user_favorites', userData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
