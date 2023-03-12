import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationItemStyle = styled(Link)`
    cursor: pointer;
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;

      
  &:hover {
        background-color: #fff;
        color: #333;
        transition: 300ms all;
    }

  @media screen and (max-width: 768px) {
        display: flex;
        width: 100%;
        justify-content: center;
    &:hover {
      background-color: #fff;
      color: #333;
      border: none;
    }
  }


`

