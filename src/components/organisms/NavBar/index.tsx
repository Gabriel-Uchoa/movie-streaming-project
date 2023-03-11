import NavigationItems from "../../atoms/NavigationItems"
import SearchItem from "../../molecules/SearchItem"
import TitleApp from "../../atoms/TitleApp"
import ProfileArea from "../../molecules/ProfileArea"
import { DivNavBar, NavBarStyle } from "./styles"
import { useEffect, useState } from "react"

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user_token_watchflix_1.0');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
        } else if (userToken) {
            setIsLoggedIn(true);
        }
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.clear();
    }

    return (
        <NavBarStyle>
            <DivNavBar>
                <TitleApp />
                <NavigationItems item="Home" href="/" />
                <NavigationItems item="Filmes" href="/movies" />
                <NavigationItems item="Recentes" href="/last_watch" />
                <NavigationItems item="Favoritos" href="/favorites" />
            </DivNavBar>
            <DivNavBar>
                <SearchItem />
                {isLoggedIn ? <ProfileArea /> : null}
                {isLoggedIn ? <NavigationItems item="Logout" href="/login" handleClick={logout} /> : null}
                {isLoggedIn ? null : <NavigationItems item="Login" href="/login" handleClick={logout} />}
            </DivNavBar>
        </NavBarStyle>
    )
}

export default NavBar