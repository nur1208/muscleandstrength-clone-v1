import React from "react";
import { AddButton, AddButtonW } from "./styledComp";

export const AddBtnContainer = ({
  handleAddProduct,
  handleAddBuyingOptions,
  handleResetInput,
  secondBtnTitle,
}) => {
  return (
    <AddButtonW>
      {handleAddProduct && (
        <AddButton onClick={handleAddProduct}>Add</AddButton>
      )}
      {handleAddBuyingOptions && (
        <AddButton onClick={handleAddBuyingOptions}>
          {secondBtnTitle || "Add buying option"}
        </AddButton>
      )}
      {handleResetInput && (
        <AddButton onClick={handleResetInput}>reset</AddButton>
      )}
    </AddButtonW>
  );
};
