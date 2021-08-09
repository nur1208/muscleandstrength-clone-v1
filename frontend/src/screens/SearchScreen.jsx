import React from "react";
import { useSelector } from "react-redux";
import { ListProducts } from "../components/ListProducts";
import { TitleBlock } from "../components/searchScreen/TitleBlock";
import { filters } from "../data/storeFilters";
import { SearchMainContainer } from "./styledCompo/searchScreen";
export const SearchScreen = () => {
  const productSearch = useSelector((state) => state.productSearch);
  return (
    <SearchMainContainer>
      <TitleBlock />

      <ListProducts
        title="All Products"
        isTitleDisable={true}
        filtersData={filters}
        catalogData={productSearch}
      />
    </SearchMainContainer>
  );
};
