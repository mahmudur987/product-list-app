import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  background: #007bff;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
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
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
  border: 0;
`;
