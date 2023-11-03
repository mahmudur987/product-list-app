import React, { useEffect, useState } from "react";
import SingleProductCard from "../Products/SingleProductCard";
import {
  ProductContainer,
  ProductHEading,
  ProductMainContainer,
  SeeAllButton,
} from "../../Styles/products";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error", err));
  }, []);
  console.log(products);
  return (
    <ProductMainContainer>
      <ProductHEading>Products </ProductHEading>

      <ProductContainer>
        <div>
          <h2>Mens Fashion</h2>
          {products
            ?.filter((x) => x.category === "Mens Fashion")
            .slice(0, 1)
            .map((product, i) => (
              <SingleProductCard key={i} product={product} />
            ))}
        </div>
        <div>
          <h2>Womens Fashion</h2>

          {products
            ?.filter((x) => x.category === "Womens Fashion")
            .slice(0, 1)
            .map((product, i) => (
              <SingleProductCard key={i} product={product} />
            ))}
        </div>
        <div>
          <h2>Home Appliances</h2>

          {products
            ?.filter((x) => x.category === "Home Appliances")
            .slice(0, 1)
            .map((product, i) => (
              <SingleProductCard key={i} product={product} />
            ))}
        </div>
      </ProductContainer>

      <SeeAllButton to="/products">See All Products</SeeAllButton>
    </ProductMainContainer>
  );
};

export default HomeProduct;
