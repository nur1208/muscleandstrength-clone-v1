import React from "react";
import { useMediaQuery } from "react-responsive";
import { ResultContentWrap } from "../../styledComponents/searchScreen/resultContentSC";
import { CatalogListing } from "./CatalogListing";
import { HttpErrors } from "./HttpErrors";
import { SearchInfoBar } from "./SearchInfoBar";

export const ResultContent = ({
  catalogData,
  isOptionsBtn,
  showingTitle,
}) => {
  const isLaptop = useMediaQuery({ minWidth: 840 });

  return (
    <ResultContentWrap id="ResultContentWrap">
      {isLaptop && (
        <SearchInfoBar
          isOptionsBtn={isOptionsBtn}
          showingTitle={showingTitle}
        />
      )}
      <HttpErrors />
      <CatalogListing catalogData={catalogData} />
    </ResultContentWrap>
  );
};
