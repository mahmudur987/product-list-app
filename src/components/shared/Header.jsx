import React from "react";
import {
  Logo,
  NavLink,
  NavLinks,
  NavbarContainer,
  SearchInput,
} from "../../Styles/Header";

const Header = () => {
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
    </NavbarContainer>
  );
};

export default Header;
