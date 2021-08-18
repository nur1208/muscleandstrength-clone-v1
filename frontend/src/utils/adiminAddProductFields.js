import { useState } from "react";
import { useSelector } from "react-redux";
import { USER_INPUT_SUP_PRODUCTS } from "./localStorageConstenses";

export const useSupProductsFields = () => {
  // const adminSaveUserInputProducts = useSelector(
  //   (state) => state.adminSaveUserInputProducts
  // );

  // const { userInputSupProduct: saveInput } =
  //   adminSaveUserInputProducts;

  const saveInput = JSON.parse(
    localStorage.getItem(USER_INPUT_SUP_PRODUCTS)
  );

  console.log({ saveInput });
  const [price, setPrice] = useState(
    saveInput ? saveInput.price : 0
  );
  const [image, setImage] = useState(
    saveInput ? saveInput.image : ""
  );
  const [size, setSize] = useState(
    saveInput ? saveInput.size : ""
  );
  const [servings, setServings] = useState(
    saveInput ? saveInput.servings : 0
  );
  const [perServingPrice, setPerServingPrice] = useState(
    saveInput ? saveInput.perServingPrice : 0
  );
  const [pointPerUnit, setPointPerUnit] = useState(
    saveInput ? saveInput.pointPerUnit : 0
  );
  const [flavors, setFlavors] = useState(
    saveInput ? saveInput.flavors : []
  );
  const [flavorText, setFlavorText] = useState(
    saveInput ? saveInput.flavorText : ""
  );
  const supProductFieldsValues = {
    price,
    image,
    size,
    servings,
    perServingPrice,
    pointPerUnit,
    flavors,
  };

  const formGroups2 = [
    {
      title: "Price",
      type: "number",
      placeholder: "Price in Euro",
      onChangeFunction: setPrice,
      value: price,
    },
    {
      title: "image",
      type: "text",
      placeholder: "Enter image url",
      onChangeFunction: setImage,
      value: image,
    },
    {
      title: "size",
      type: "text",
      placeholder: "Enter size",
      onChangeFunction: setSize,
      value: size,
    },
    {
      title: "servings",
      type: "number",
      placeholder: "Enter servings",
      onChangeFunction: setServings,
      value: servings,
    },
    {
      title: "per Serving Price",
      type: "number",
      placeholder: "Enter per Serving Price",
      onChangeFunction: setPerServingPrice,
      value: perServingPrice,
    },
    {
      title: "point per unit",
      type: "number",
      placeholder: "Enter point per unit",
      onChangeFunction: setPointPerUnit,
      value: pointPerUnit,
    },
    {
      title: "flavors",
      type: "",
      as: "textarea",
      placeholder:
        "Enter product flavors (enter the flavors then click on add feature button)",
      onChangeFunction: setFlavorText,
      value: flavorText,
      values: flavors,
      hasButton: true,
    },
  ];

  const addOtherFeature = () => {
    if (flavorText) {
      setFlavors([...flavors, flavorText]);
      setFlavorText("");
    }
  };

  const handleDeleteFeature = (index) => {
    setFlavors(flavors.filter((_, i) => i !== index));
  };

  const resetAllState = () => {
    setPrice(0);
    setImage("");
    setSize(0);
    setServings(0);
    setPerServingPrice(0);
    setPointPerUnit(0);
    setFlavors([]);
    setFlavorText("");
  };

  return {
    addOtherFeature,
    handleDeleteFeature,
    formGroups2,
    supProductFieldsValues,
    resetAllState,
  };
};
