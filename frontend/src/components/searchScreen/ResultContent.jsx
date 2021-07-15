import React from "react";
import { ResultContentWrap } from "../../styledComponents/searchScreen/resultContentSC";
import { CatalogListing } from "./CatalogListing";
import { HttpErrors } from "./HttpErrors";
import { SearchInfoBar } from "./SearchInfoBar";

export const ResultContent = () => {
  return (
    <ResultContentWrap id="ResultContentWrap">
      <SearchInfoBar />
      <HttpErrors />
      <CatalogListing />
    </ResultContentWrap>
  );
};
