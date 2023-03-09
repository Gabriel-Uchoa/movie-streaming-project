import { useState } from "react"
import getUsersApi, { ApiResponse } from "../services/api/getUsersApi"

interface Users {
    name: string,
    email: string,
    password: string,
    phone: string,
    picture: string,
    id: number
}

export default async function EmailUsed(email: string): Promise<boolean> {
    let exist = false;
    const response: ApiResponse = await getUsersApi();
    if (response) {
        response.users.forEach((user: Users) => {
            if (user.email.toLowerCase() === email.toLowerCase()) {
                exist = true;
            }
        });
    }

    return exist;
}