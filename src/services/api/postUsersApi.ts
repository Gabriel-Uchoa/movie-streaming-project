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
        const response = await axios.post('https://apigenerator.dronahq.com/api/ZvQfn1rX/users', Data, { timeout: 20000 });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}