import React, { useEffect } from "react";
import {
  resetSavedUserInputDeal,
  saveUserInputDeal,
} from "../../actions/userActions";
import { useDealFields } from "../../utils/adminDealFields";
import { AddBtnContainer } from "./AddBtnContainer";
import { FormFields } from "./FormFields";

export const DealInput = ({ deals, setDeals }) => {
  const {
    flavors,
    formGroups2,
    resetAllState,
    dealFieldsValues,
  } = useDealFields();

  useEffect(() => {
    saveUserInputDeal(dealFieldsValues);
  }, [dealFieldsValues]);

  const handleAddProduct = () => {
    setDeals([...deals, dealFieldsValues]);
    handleResetInput();
  };
  const handleResetInput = () => {
    resetAllState();
    resetSavedUserInputDeal();
  };

  const addBtnContainerProps = {
    handleAddProduct,
    handleResetInput,
  };

  return (
    <div>
      <FormFields formGroups={formGroups2} addItems={flavors} />
      <AddBtnContainer {...addBtnContainerProps} />
    </div>
  );
};
