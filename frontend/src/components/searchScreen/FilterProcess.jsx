import React from "react";
import {
  FilterBtn,
  FilterProcessMW,
} from "../../styledComponents/searchScreen/filterProcessSC";

export const FilterProcess = () => {
  return (
    <FilterProcessMW id="FilterProcessMW">
      <FilterBtn id="FilterBtn" isBlueBtn={true}>
        Apply Filters
      </FilterBtn>
      <FilterBtn id="FilterBtn">Reset</FilterBtn>
    </FilterProcessMW>
  );
};
