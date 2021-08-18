import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  resetUserInputSupProducts,
  saveUserInputSupProducts,
} from "../../actions/userActions";
import { useSupProductsFields } from "../../utils/adiminAddProductFields";
import { USER_INPUT_SUP_PRODUCTS } from "../../utils/localStorageConstenses";

import { Dialog } from "../cartScreen/ShippingInfoModal";
import { AddBtnContainer } from "./AddBtnContainer";
import { DealInput } from "./DealInput";
import { FormFields } from "./FormFields";

export const SupProducts = ({ setSupProducts, supProducts }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    addOtherFeature,
    handleDeleteFeature,
    formGroups2,
    supProductFieldsValues,
    resetAllState,
  } = useSupProductsFields();
  const [deals, setDeals] = useState([]);

  const dispatch = useDispatch(null);

  useEffect(() => {
    dispatch(saveUserInputSupProducts(supProductFieldsValues));
  }, [dispatch, supProductFieldsValues]);

  useEffect(() => {}, [supProductFieldsValues]);

  const handleResetInput = () => {
    resetAllState();
    localStorage.clear(USER_INPUT_SUP_PRODUCTS);
    // dispatch(resetUserInputSupProducts());
  };
  const handleAddSupProduct = () => {
    setSupProducts([
      ...supProducts,
      { ...supProductFieldsValues, deals },
    ]);
    handleResetInput();
  };

  useEffect(() => {
    console.log({ deals });
  }, [deals]);

  const handleAddDeal = () => {
    setIsDialogOpen(true);
  };

  const addBtnContainerProps = {
    handleAddProduct: handleAddSupProduct,
    handleResetInput,
    handleAddBuyingOptions: handleAddDeal,
    secondBtnTitle: "Add Deal",
  };

  const formFieldsProps = {
    formGroups: formGroups2,
    addOtherFeature,
    handleDeleteFeature,
  };

  const dealInputProps = {
    deals,
    setDeals,
  };
  return (
    <>
      <FormFields {...formFieldsProps} />
      <AddBtnContainer {...addBtnContainerProps} />
      {isDialogOpen && (
        <Dialog
          setIsModalOpen={setIsDialogOpen}
          isSmall={true}
          isSupDialog={true}
        >
          <DealInput {...dealInputProps} />
        </Dialog>
      )}
    </>
  );
};
