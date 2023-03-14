import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationItemStyle = styled(Link)`
    cursor: pointer;
    color: white;
    text-decoration: none;
    padding: 0.5rem 0;
    margin: 0 0.7rem;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.2s ease-in-out;

      
  &:hover {
        border-bottom: 4px solid #FED530;
    }

  @media screen and (max-width: 768px) {
        display: flex;
        width: 100%;
        justify-content: center;
    &:hover {
      border-bottom: 4px solid #FED530;
    }
  }
`

