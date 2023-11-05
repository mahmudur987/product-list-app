import React, { useState } from "react";
import {
  Logo,
  Menu,
  MenuItems,
  NavLink,
  NavLinks,
  NavbarContainer,
  SearchInput,
} from "../../Styles/Header";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <NavbarContainer>
      <Logo>MyEcommerce</Logo>
      <SearchInput type="text" placeholder="Search..." />
      <NavLinks>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Login</NavLink>
        <NavLink>Signup</NavLink>
      </NavLinks>

      <Menu>
        <button onClick={() => setShow(!show)}>
          <AiOutlineMenu />
        </button>

        {show && (
          <MenuItems>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Login</NavLink>
            <NavLink>Signup</NavLink>
          </MenuItems>
        )}
      </Menu>
    </NavbarContainer>
  );
};

export default Header;
