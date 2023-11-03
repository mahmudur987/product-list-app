import React, { useState } from "react";
import styled from "styled-components";
const SortContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  position: relative;
`;
const SortButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.8s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
const Container = styled.div`
  display: ${(props) => (props.isopen ? "block" : "none")};
  position: absolute;
  top: 50px;
  right: 20px;
  font-size: 18px;
  background-color: whitesmoke;
  padding: 20px;
  p {
    font-weight: 600;
  }
`;
const SortOptions = styled.select`
  margin: 5px 0;
  font-weight: 600;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
`;

const SortOption = styled.option`
  margin: 5px 0;
  font-weight: 600;
`;

const SortingComponent = ({ setCategory, handleSort }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSortOptions = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SortContainer>
      <SortButton onClick={toggleSortOptions}>Sort</SortButton>
      <Container isopen={isOpen}>
        <p>By Category</p>
        <SortOptions onChange={(e) => setCategory(e.target.value)}>
          <SortOption value={""} selected>
            All
          </SortOption>
          <SortOption value={"Mens Fashion"}>Men's Fashion</SortOption>
          <SortOption value={"Womens Fashion"}>Women's Fashion</SortOption>
          <SortOption value={"Home Appliances"}>Home Appliance</SortOption>
        </SortOptions>
        <p> By Price</p>

        <SortOptions onChange={(e) => handleSort(e.target.value)}>
          <SortOption value={""} selected>
            {" "}
            select
          </SortOption>
          <SortOption value={"lowToHigh"}> Price Low to High</SortOption>
          <SortOption value={"highToLow"}> Price High to Low</SortOption>
        </SortOptions>
      </Container>
    </SortContainer>
  );
};

export default SortingComponent;
