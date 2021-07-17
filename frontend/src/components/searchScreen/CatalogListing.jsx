import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../actions/productsAction";
import {
  LoaderBlock,
  ResultContentInnerWrap,
  SearchResultProducts,
  Toolbar,
  ToolbarBottom,
  ViewMore,
  ViewMoreWrap,
  Loader,
} from "../../styledComponents/searchScreen/catalogListingSC";
import { Products } from "./Products";

export const CatalogListing = () => {
  const productSearch = useSelector((state) => state.productSearch);
  const { loading, products, numOfProducts, query } = productSearch;
  const dispatch = useDispatch(null);
  const leftProducts = numOfProducts - products.length;

  const handleViewMore = () => {
    const limit = products.length + leftProducts;
    dispatch(searchProducts(query, limit));
  };

  return (
    <ResultContentInnerWrap id="ResultContentInnerWrap">
      <SearchResultProducts id="SearchResultProducts">
        {loading ? <Loader /> : <Products />}
      </SearchResultProducts>
      {products.length !== numOfProducts && (
        <ToolbarBottom id="ToolbarBottom">
          <Toolbar id="Toolbar">
            <ViewMoreWrap id="ViewMoreWrap">
              <ViewMore id="ViewMore" onClick={handleViewMore}>
                View Next {leftProducts} Products
                <LoaderBlock id="LoaderBlock">
                  <Loader id="Loader" />
                </LoaderBlock>
              </ViewMore>
            </ViewMoreWrap>
          </Toolbar>
        </ToolbarBottom>
      )}
    </ResultContentInnerWrap>
  );
};
