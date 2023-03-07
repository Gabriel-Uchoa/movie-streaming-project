import { NavigationItemStyle } from "../../styles/navBar"

const NavigationItems: React.FC<{ item: string }> = (props) => {
    return (
      <NavigationItemStyle>{props.item}</NavigationItemStyle>
    )
}

export default NavigationItems 
