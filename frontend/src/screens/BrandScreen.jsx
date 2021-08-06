import React from "react";
import { TitleBlock } from "../components/searchScreen/TitleBlock";
import { SearchMainContainer } from "./styledCompo/searchScreen";

export const BrandScreen = () => {
  return (
    <SearchMainContainer id="SearchMainContainer">
      <TitleBlock title="MuscleTech" path="store/brans/MuscleTech" />
    </SearchMainContainer>
  );
};
