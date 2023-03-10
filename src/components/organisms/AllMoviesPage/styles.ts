import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainMoviePage = styled.main`
    display: grid;
    grid-template-columns: 250px 250px 250px 250px;
    height: fit-content;
    color: white;
    padding: 20px 0;
    justify-content: space-evenly;
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: white;
`