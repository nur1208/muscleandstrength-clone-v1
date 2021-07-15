import React from "react";
import { TextWrap } from "../../styledComponents/searchScreen/resultContentSC";
import { SearchInfoBarMW } from "../../styledComponents/searchScreen/searchInfoBarSC";
import { StoreControlComp } from "./StoreControlComp";

export const SearchInfoBar = () => {
  return (
    <SearchInfoBarMW id="SearchInfoBarMW">
      <TextWrap id="TextWrap">Showing results for 'The Ripper' </TextWrap>
      <StoreControlComp noPadding={true} />
    </SearchInfoBarMW>
  );
};
