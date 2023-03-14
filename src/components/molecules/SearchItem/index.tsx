import { useState } from "react"
import { useNavigate } from "react-router-dom"
import searchImage from "../../../assets/images/search-interface-symbol.png"
import { ImageSearch, RightSideNavBar, SearchInput } from "./styles"

const SearchItem: React.FC = () => {
    const [query, setQuery] = useState<string>('')
    const history = useNavigate()

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(evt.currentTarget.value)
    }

    const handleClick = (evt: React.MouseEvent<HTMLImageElement>) => {
      evt.preventDefault()
      history(`/search/${query}`)
    }

    return (
      <RightSideNavBar>
        <SearchInput type="text" value={query} onChange={handleChange} />
        <ImageSearch src={searchImage} alt="símbolo de pesquisa" onClick={handleClick} />
      </RightSideNavBar>
    )
}

export default SearchItem 
