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

export const CatalogListing = ({ catalogData }) => {
  const { loading, products, numOfProducts, query } =
    catalogData;
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
      {/* products is exist and there are products in the 
      database not loaded yet then show 'view Next products' 
      btn*/}
      {products.length !== 0 &&
        products.length !== numOfProducts && (
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
