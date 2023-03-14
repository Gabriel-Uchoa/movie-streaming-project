import NavigationItems from "../../atoms/NavigationItems"
import SearchItem from "../../molecules/SearchItem"
import TitleApp from "../../atoms/TitleApp"
import ProfileArea from "../../molecules/ProfileArea"
import { Burger, CloseIcon, DivNavBar, NavBarStyle, NavItem, NavMenu, } from "./styles"
import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import { iDataUser } from "../../../types/store.interface"
import { useSelector } from "react-redux"
import store from "../../../store"
import { useLogout } from "../../../store/user/action"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(0)

    const user_data: iDataUser = useSelector((state: any) => state.user_info)

    useLayoutEffect(() => {
        function updateWidth() {
            setWidth(document.body.clientWidth);
        }
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

    const logout = useCallback(() => {
        store.dispatch(useLogout(false))
    }, []);


    useEffect(() => {
        if (width >= 1080) {
            setIsOpen(false);
        }
    }, [width]);
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
                    {user_data.logged ? <SearchItem /> : null}
                    {user_data.logged ? <ProfileArea url={user_data.personal_info.picture} name={user_data.personal_info.name}/> : null}
                    {user_data.logged ? <NavigationItems item="Logout" link="/login" handleClick={logout} /> : null}
                    {user_data.logged ? null : <NavigationItems item="Login" link="/login" handleClick={logout} />}
                </DivNavBar>

            </NavMenu>
            <Burger onClick={toggleMenu}>
                <CloseIcon>
                    {
                        isOpen
                            ?
                            <img src="https://img.icons8.com/fluency-systems-filled/48/ffffff/delete-sign.png" />
                            :
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/menu--v5.png" />
                    }
                </CloseIcon>
            </Burger>
        </NavBarStyle>
    )
}

export default NavBar
