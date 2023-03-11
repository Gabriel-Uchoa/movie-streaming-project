import axios from "axios";
import { User } from "../../types/user.interface";
export interface ApiResponse {
    users: User[];
}

const getUsersApi = async (): Promise<ApiResponse> => {
    const response = await axios.get("https://apigenerator.dronahq.com/api/ZvQfn1rX/users")
    return ({ users: response.data })
}

export default getUsersApi