import axios from "axios";

interface User {
    name: string,
    email: string,
    password: string,
    phone: string,
    picture: string,
}

export default async function postUsersApi(Data: User) {
    axios.post('https://apigenerator.dronahq.com/api/ZvQfn1rX/users', Data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}