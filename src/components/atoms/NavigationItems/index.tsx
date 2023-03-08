import { NavigationItemStyle } from "./styles"

const NavigationItems: React.FC<{ item: string, href: string, handleClick?: any }> = (props) => {
  return (
    <NavigationItemStyle href={props.href} onClick={props.handleClick}>{props.item}</NavigationItemStyle>
  )
}

export default NavigationItems 
