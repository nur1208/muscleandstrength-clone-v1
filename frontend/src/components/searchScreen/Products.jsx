import React from "react";
import { ProductsWrapper } from "../../styledComponents/searchScreen/productsSC";
import { Product } from "./Product";

export const Products = () => {
  return (
    <ProductsWrapper id="ProductsWrapper">
      <Product />
    </ProductsWrapper>
  );
};
