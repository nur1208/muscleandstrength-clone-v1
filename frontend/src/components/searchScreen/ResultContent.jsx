import React from "react";
import { ResultContentWrap } from "../../styledComponents/searchScreen/resultContentSC";
import { CatalogListing } from "./CatalogListing";
import { HttpErrors } from "./HttpErrors";
import { SearchInfoBar } from "./SearchInfoBar";

export const ResultContent = ({
  catalogData,
  isOptionsBtn,
  showingTitle,
}) => {
  return (
    <ResultContentWrap id="ResultContentWrap">
      <SearchInfoBar
        isOptionsBtn={isOptionsBtn}
        showingTitle={showingTitle}
      />
      <HttpErrors />
      <CatalogListing catalogData={catalogData} />
    </ResultContentWrap>
  );
};
