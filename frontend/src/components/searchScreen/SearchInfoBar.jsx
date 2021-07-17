import React from "react";
import { useSelector } from "react-redux";
import { TextWrap } from "../../styledComponents/searchScreen/resultContentSC";
import { SearchInfoBarMW } from "../../styledComponents/searchScreen/searchInfoBarSC";
import { StoreControlComp } from "./StoreControlComp";

export const SearchInfoBar = () => {
  const productSearch = useSelector((state) => state.productSearch);
  const { query } = productSearch;
  return (
    <SearchInfoBarMW id="SearchInfoBarMW">
      <TextWrap id="TextWrap">Showing results for '{query}' </TextWrap>
      <StoreControlComp noPadding={true} />
    </SearchInfoBarMW>
  );
};
