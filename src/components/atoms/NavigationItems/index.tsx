import { NavigationItemStyle } from "./styles"

const NavigationItems: React.FC<{ item: string, link: string, handleClick?: any }> = (props) => {
  return (
    <NavigationItemStyle to={props.link} onClick={props.handleClick}>{props.item}</NavigationItemStyle>
  )
}

export default NavigationItems 
