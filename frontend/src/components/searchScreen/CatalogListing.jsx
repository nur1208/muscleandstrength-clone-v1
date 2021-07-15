import React from "react";
import {
  ResultContentInnerWrap,
  SearchResultProducts,
} from "../../styledComponents/searchScreen/catalogListingSC";
import { Loader } from "./Loader";
import { Products } from "./Products";

export const CatalogListing = () => {
  return (
    <ResultContentInnerWrap id="ResultContentInnerWrap">
      <SearchResultProducts id="SearchResultProducts">
        {/* <Loader /> */}
        <Products />
      </SearchResultProducts>
    </ResultContentInnerWrap>
  );
};
