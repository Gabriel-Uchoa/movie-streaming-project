import axios from "axios";
interface User {
    name: string,
    email: string,
    password: string,
    phone: string,
    picture: string,
    id: number
}
//organizar interfaces
export interface ApiResponse {
    users: User[];
}

export default async function getUsersApi(): Promise<ApiResponse> {
    try {
        const response = await axios.get<User[]>("https://apigenerator.dronahq.com/api/ZvQfn1rX/users");
        return { users: response.data };
    } catch (error) {
        console.log(error);
        return { users: [] };
    }
}
