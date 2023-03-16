import axios from "axios";
import { User } from "../../types/user.interface";
export interface ApiResponse {
    users: User[];
}

const getUsersApi = async (): Promise<ApiResponse> => {
    const response = await axios.get("https://api-generator.retool.com/ORSLKk/users")
    return ({ users: response.data })
}

export default getUsersApi