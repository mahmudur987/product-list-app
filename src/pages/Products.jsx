import React, { useEffect, useState } from "react";
import {
  ProductContainer,
  ProductHEading,
  ProductMainContainer,
} from "../Styles/products";
import SingleProductCard from "../components/Products/SingleProductCard";
import SortingComponent from "../components/shared/Button";
import Pagination from "../components/shared/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [category, setCategory] = useState("");
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.products.filter((product) => {
          return !category || product.category === category;
        });

        setCount(filteredProducts.length);

        const paginatedProducts = filteredProducts.slice(
          indexOfFirstProduct,
          indexOfLastProduct
        );

        setProducts(paginatedProducts);
      })
      .catch((err) => console.error("Error", err));
  }, [currentPage, category, indexOfFirstProduct, indexOfLastProduct]);

  const handleSort = (option) => {
    let sortedProducts = [...products];
    if (option === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  let displayProduct;

  if (products) {
    displayProduct = products?.map((product, i) => (
      <SingleProductCard key={i} product={product} />
    ));
  }

  return (
    <ProductMainContainer>
      <ProductHEading>All Products</ProductHEading>

      <SortingComponent setCategory={setCategory} handleSort={handleSort} />

      <ProductContainer>{displayProduct}</ProductContainer>

      <Pagination
        totalProducts={count}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </ProductMainContainer>
  );
};

export default Products;
