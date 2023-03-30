import styled from "styled-components";

interface NavMenuProps {
    isOpen: boolean;
}
export const NavBarStyle = styled.nav`
    display: flex;
    color: white;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 28px 65px;
    gap: 20px;
    @media screen and (max-width: 1080px) {
        text-align: center;
        flex-direction: column;
    }
`;
export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  z-index: 2;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    padding: 40px;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #333;
  }
`;

export const NavItem = styled.li`
  @media screen and (max-width: 1080px) {
    margin: 0;
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const Burger = styled.div`
    display: none;

    @media screen and (max-width: 1080px) {
        display: block;
        cursor: pointer;
        position: absolute;
        right: 20px;
        font-size: 1.8rem;
        color: #fff;
        z-index: 1000;
    }
`;

export const CloseIcon = styled.p`
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
`;

export const DivNavBar = styled.nav`
    display: flex;
    gap: 25px;
    align-items: center;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
        margin-top: 20px;
    }
`;