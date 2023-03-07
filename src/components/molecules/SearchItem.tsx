import searchImage from "../../assets/images/search-interface-symbol.png"
import { ImageSearch, SearchInput, RightSideNavBar } from "../../styles/navBar"

const SearchItem: React.FC = () => {
    return (
      <RightSideNavBar>
        <SearchInput type="text" />
        <ImageSearch src={searchImage} alt="símbolo de pesquisa" />
      </RightSideNavBar>
    )
}

export default SearchItem 
