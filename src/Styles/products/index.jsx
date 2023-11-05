import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const ProductMainContainer = styled.div`
  max-width: 1900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 5px;
  flex-wrap: wrap;
  h2 {
    text-align: center;
    margin: 10px auto;
    color: red;
  }
`;
export const ProductHEading = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;
  flex-wrap: nowrap;
  font-size: 30px;
  font-weight: 700;
  margin: 30px;

  background-color: aqua;
  padding: 10px;
  border-radius: 30px;
  @keyframes colorChange {
    0% {
      color: rebeccapurple; /* Start with black color */
    }
    50% {
      color: red; /* Midpoint with red color */
    }
    100% {
      color: black; /* End back to black color */
    }
  }
  animation: colorChange 3s infinite linear;
`;

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  max-width: 250px;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductImage = styled.img`
  max-width: 245px;
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #555;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #007bff;
  font-weight: bold;
  margin-top: 10px;
  @keyframes colorChange {
    0% {
      color: #007bff; /* Start with black color */
    }
    50% {
      color: yellowgreen; /* Midpoint with red color */
    }
    100% {
      color: black; /* End back to black color */
    }
  }
  animation: colorChange 10s infinite linear;
`;

export const SeeAllButton = styled(Link)`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px auto;

  &:hover {
    background-color: #0056b3;
  }
`;
