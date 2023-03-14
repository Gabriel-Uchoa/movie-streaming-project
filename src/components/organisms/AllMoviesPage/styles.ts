import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainMoviePage = styled.main`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  height: fit-content;
  color: white;
  padding: 20px ;
  justify-content: space-evenly;

  @media screen and (max-width: 1090px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, .1fr));
    padding: 10px 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, .1fr));
    padding: 10px 0;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
`;
