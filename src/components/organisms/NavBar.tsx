import NavigationItems from "../atoms/NavigationItems"
import SearchItem from "../molecules/SearchItem"
import TitleApp from "../atoms/TitleApp"
import ProfileArea from "../molecules/ProfileArea"
import { DivNavBar, NavBarStyle } from "../../styles/navBar"

const NavBar = () => {
    return (
        <NavBarStyle>
            <DivNavBar>
                <TitleApp />
                <NavigationItems item="Home" />
                <NavigationItems item="Filmes" />
                <NavigationItems item="Recentes" />
                <NavigationItems item="Favoritos" />
            </DivNavBar>
            <DivNavBar>
                <SearchItem />
                <ProfileArea />
            </DivNavBar>
        </NavBarStyle>
    )
}

export default NavBar