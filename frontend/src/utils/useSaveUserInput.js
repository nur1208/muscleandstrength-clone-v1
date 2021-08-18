import { useSupProductsFields } from "./adiminAddProductFields";

export const useSaveUserInput = () => {
  const { supProductFieldsValues } = useSupProductsFields();

  console.log({ supProductFieldsValues });

  // dispatch(saveUserInputProducts(productFieldsValues));
};
