import styled from "styled-components";

export const NavBarStyle = styled.nav`
    display: flex;
    color: white;
    justify-content: space-between;
    width: 100%;
    height: 13vh;
    padding: 30px;
    align-items: center;

    @media screen and (max-width: 1046px) {
        height: auto;
        flex-direction: column;
        padding: 20px;
    }
`;

export const DivNavBar = styled.nav`
    display: flex;
    gap: 45px;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    }
`;