import getUsersApi, { ApiResponse } from "../services/api/getUsersApi"
import { User } from "../types/user.interface";

export default async function EmailUsed(email: string): Promise<boolean> {
    let exist = false;
    const response: ApiResponse = await getUsersApi();
    if (response) {
        response.users.forEach((user: User) => {
            if (user.email.toLowerCase() === email.toLowerCase()) {
                exist = true;
            }
        });
    }

    return exist;
}