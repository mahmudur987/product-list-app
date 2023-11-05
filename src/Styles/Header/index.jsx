import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  background: #007bff;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  gap: 20px;
  position: relative;
  @keyframes slideRightToLeft {
    0% {
      transform: translateX(100%); /* Start position off-screen to the right */
    }
    100% {
      transform: translateX(0); /* End position, no translation */
    }
  }

  animation: slideRightToLeft 3s linear;
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin: 0 10px;
  max-width: 400px;
  width: 100%;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
  border: 0;
`;
export const Menu = styled.div`
  display: none;
  @media (max-width: 920px) {
    display: block;
    button {
      background-color: #007bff;
      color: white;
      border: 0;
      font-size: 25px;
    }
  }
`;
export const MenuItems = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: #007bff;
  padding: 20px;
  gap: 5px;
  @keyframes slideRightToLeft {
    0% {
      transform: translateX(100%); /* Start position off-screen to the right */
    }
    100% {
      transform: translateX(0); /* End position, no translation */
    }
  }

  animation: slideRightToLeft 0.3s linear;
`;
