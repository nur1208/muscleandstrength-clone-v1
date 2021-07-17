import React from "react";
import { useSelector } from "react-redux";
import { ProductsWrapper } from "../../styledComponents/searchScreen/productsSC";
import { Product } from "./Product";

export const Products = () => {
  const productSearch = useSelector((state) => state.productSearch);

  const { products } = productSearch;
  return (
    <ProductsWrapper id="ProductsWrapper">
      {products.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </ProductsWrapper>
  );
};
