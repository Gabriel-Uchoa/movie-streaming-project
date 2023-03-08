import axios from "axios"

export default async function getUsersApi() {
    try {
        const Users = await axios.get("https://apigenerator.dronahq.com/api/ZvQfn1rX/users")
        return Users.data;
    } catch (error) {
        console.log(error);
    }
}