import axios from "axios";

interface User {
    name: string,
    email: string,
    password: string,
    phone: string,
    picture: string,
}

export default async function postUsersApi(Data: User) {
    try {
        const response = await axios.post('https://api-generator.retool.com/ORSLKk/users', Data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}