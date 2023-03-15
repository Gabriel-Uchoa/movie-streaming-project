import { useEffect } from "react"
import getUsersApi from "../services/api/getUsersApi"
import store from "../store"
import { setDataUserLogged } from "../store/user/action"
import { User } from "../types/user.interface"

interface iDataLocal {
    id: number,
    name: string,
    picture: string
}

const usePersistLogin = () => {

    const authLoading = async () => {
        const { users } = await getUsersApi();
        const DataUserLocalStorage = localStorage.getItem("Watchflix_GG")
        if (DataUserLocalStorage) {
            let DataUserString: iDataLocal = JSON.parse(DataUserLocalStorage)
            const authenticatedUser = users.find(
                ({ id }: User) => id === DataUserString.id
            );
            if (authenticatedUser) {
                const { email, id, name, phone, picture } = authenticatedUser;
                store.dispatch(setDataUserLogged({ email, id, name, phone, picture }));
            }
        }
    }
    authLoading()
}

export default usePersistLogin