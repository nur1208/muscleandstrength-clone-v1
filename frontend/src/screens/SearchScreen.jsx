import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNumOfProducts,
  searchProducts,
} from "../actions/productsAction";
import { ListProducts } from "../components/ListProducts";
import { TitleBlock } from "../components/searchScreen/TitleBlock";
import { filters } from "../data/storeFilters";
import { SearchMainContainer } from "./styledCompo/searchScreen";
export const SearchScreen = ({ match }) => {
  const productSearch = useSelector(
    (state) => state.productSearch
  );

  const dispatch = useDispatch(null);

  const query = match.params.query;
  useEffect(() => {
    dispatch(searchProducts(query));
    dispatch(getNumOfProducts(query));
    console.log({ query });
  }, [dispatch, query]);
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
