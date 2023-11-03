import React from "react";
import {
  CardContainer,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "../../Styles/products";

const SingleProductCard = ({ product }) => {
  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice> Price : ${product.price.toFixed(2)}</ProductPrice>
    </CardContainer>
  );
};

export default SingleProductCard;
