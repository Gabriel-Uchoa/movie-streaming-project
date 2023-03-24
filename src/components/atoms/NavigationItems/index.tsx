import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavigationItemStyle } from "./styles"

const NavigationItems: React.FC<{ item: string, link: string, handleClick?: any }> = (props) => {  
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location]);

  return (
    <NavigationItemStyle selected={selectedItem === props.link} to={props.link} onClick={props.handleClick}>{props.item}</NavigationItemStyle>
  )
}

export default NavigationItems 
