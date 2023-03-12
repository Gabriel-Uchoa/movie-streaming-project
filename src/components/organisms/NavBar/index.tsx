import NavigationItems from "../../atoms/NavigationItems"
import SearchItem from "../../molecules/SearchItem"
import TitleApp from "../../atoms/TitleApp"
import ProfileArea from "../../molecules/ProfileArea"
import { Burger, CloseIcon, DivNavBar, NavBarStyle, NavItem, NavMenu, } from "./styles"
import { useCallback, useEffect, useLayoutEffect, useState } from "react"

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {
        function updateWidth() {
            setWidth(document.body.clientWidth);
        }
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        if (width >= 1080) {
            setIsOpen(false);
        }
    }, [width]);

    const checkUserToken = useCallback(() => {
        const userToken = localStorage.getItem('user_token_watchflix_1.0');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
        } else if (userToken) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        checkUserToken();
    }, [checkUserToken]);

    const toggleMenu = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
        localStorage.clear();
    }, []);

    return (
        <NavBarStyle>
            <TitleApp />
            <NavMenu isOpen={isOpen}>
                {isOpen ? <TitleApp /> : null}

                <DivNavBar>
                    <NavItem>
                        <NavigationItems item="Home" link="/" />
                    </NavItem>
                    <NavItem>
                        <NavigationItems item="Filmes" link="/movies" />
                    </NavItem>
                    <NavItem>
                        <NavigationItems item="Recentes" link="/last_watch" />
                    </NavItem>
                    <NavItem>
                        <NavigationItems item="Favoritos" link="/favorites" />
                    </NavItem>
                </DivNavBar>
                <DivNavBar>
                    <SearchItem />
                    {isLoggedIn ? <ProfileArea /> : null}
                    {isLoggedIn ? <NavigationItems item="Logout" link="/login" handleClick={logout} /> : null}
                    {isLoggedIn ? null : <NavigationItems item="Login" link="/login" handleClick={logout} />}
                </DivNavBar>

            </NavMenu>
            <Burger onClick={toggleMenu}>
                <CloseIcon>X</CloseIcon>
            </Burger>
        </NavBarStyle>
    )
}

export default NavBar
