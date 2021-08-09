import React from "react";
import { useSelector } from "react-redux";
import { TextWrap } from "../../styledComponents/searchScreen/resultContentSC";
import { SearchInfoBarMW } from "../../styledComponents/searchScreen/searchInfoBarSC";
import { OptionsBtn } from "../OptionsBtn";
import { StoreControlComp } from "./StoreControlComp";

export const SearchInfoBar = ({
  isOptionsBtn,
  showingTitle,
}) => {
  const productSearch = useSelector(
    (state) => state.productSearch
  );
  const { query } = productSearch;
  return (
    <SearchInfoBarMW id="SearchInfoBarMW">
      <TextWrap id="TextWrap">
        {showingTitle
          ? showingTitle
          : `Showing results for '${query || " "}'`}
      </TextWrap>
      {isOptionsBtn ? (
        <OptionsBtn />
      ) : (
        <StoreControlComp noPadding={true} />
      )}
    </SearchInfoBarMW>
  );
};
