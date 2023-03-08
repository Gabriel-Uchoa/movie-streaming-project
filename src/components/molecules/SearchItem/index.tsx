import searchImage from "../../../assets/images/search-interface-symbol.png"
import { ImageSearch, RightSideNavBar, SearchInput } from "./styles"

const SearchItem: React.FC = () => {
    return (
      <RightSideNavBar>
        <SearchInput type="text" />
        <ImageSearch src={searchImage} alt="símbolo de pesquisa" />
      </RightSideNavBar>
    )
}

export default SearchItem 
