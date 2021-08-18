import { useState } from "react";
import { useSelector } from "react-redux";

export const useProductsFields = () => {
  const adminSaveUserInputProducts = useSelector(
    (state) => state.adminSaveUserInputProducts
  );

  const { userInput } = adminSaveUserInputProducts;

  const [name, setProductName] = useState(
    userInput.name ? userInput.name : ""
  );
  const [price, setPrice] = useState(
    userInput.price ? userInput.price : 0
  );
  const [brand, setBrand] = useState(
    userInput.brand ? userInput.brand : ""
  );
  const [qty, setQty] = useState(
    userInput.qty ? userInput.qty : 0
  );
  const [category, setCategory] = useState(
    userInput.category ? userInput.category : ""
  );
  const [description, setDescription] = useState(
    userInput.description ? userInput.description : ""
  );

  const [direction, setDirection] = useState(
    userInput.directions ? userInput.directions : ""
  );
  const [waring, setWaring] = useState(
    userInput.waring ? userInput.waring : ""
  );
  const [ingredient, setIngredient] = useState(
    userInput.ingredient ? userInput.ingredient : ""
  );
  const [features, setFeatures] = useState(
    userInput.features ? userInput.features : []
  );
  const [featuresText, setFeaturesText] = useState(
    userInput.featuresText ? userInput.featuresText : ""
  );
  const [extraInfo, setExtraInfo] = useState(
    userInput.extraInfo ? userInput.extraInfo : ""
  );
  const [type, setType] = useState(
    userInput.type ? userInput.type : ""
  );
  const [imageUrl, setImageUrl] = useState(
    userInput.image ? userInput.image : ""
  );

  const formGroups = [
    {
      title: "Product Name",
      type: "text",
      placeholder: "Enter Product Name",
      onChangeFunction: setProductName,
      value: name,
    },
    {
      title: "brand",
      type: "select",
      placeholder: "Enter product brand",
      onChangeFunction: setBrand,
      value: brand,
    },

    // {
    //   title: "Quantity",
    //   type: "number",
    //   placeholder: "How many: qty",
    //   onChangeFunction: setQty,
    //   value: qty,
    // },
    {
      title: "category",
      type: "text",
      placeholder: "Enter product category",
      onChangeFunction: setCategory,
      value: category,
    },
    {
      title: "description",
      type: "",
      as: "textarea",
      placeholder: "Enter product description",
      onChangeFunction: setDescription,
      value: description,
    },
    {
      title: "direction",
      type: "",
      as: "textarea",
      placeholder: "Enter product directions (if exist)",
      onChangeFunction: setDirection,
      value: direction,
    },
    {
      title: "warning",
      type: "",
      as: "textarea",
      placeholder: "Enter product waring (if exist)",
      onChangeFunction: setWaring,
      value: waring,
    },
    {
      title: "ingredient",
      type: "",
      as: "textarea",
      placeholder: "Enter product ingredient (if exist)",
      onChangeFunction: setIngredient,
      value: ingredient,
    },
    {
      title: "features",
      type: "",
      as: "textarea",
      placeholder:
        "Enter product features (enter the feature then click on add feature button)",
      onChangeFunction: setFeaturesText,
      value: featuresText,
      values: features,
      hasButton: true,
    },
    {
      title: "extraInfo",
      type: "",
      as: "textarea",
      placeholder: "Enter product extra Info html",
      onChangeFunction: setExtraInfo,
      value: extraInfo,
    },
    {
      title: "type",
      type: "text",
      placeholder: "Enter product type(it's temporary field)",
      onChangeFunction: setType,
      value: type,
    },
    {
      title: "image",
      type: "text",
      placeholder:
        "Enter product image url(it's temporary field)",
      onChangeFunction: setImageUrl,
      value: imageUrl,
    },
  ];

  const addOtherFeature = () => {
    if (featuresText) {
      setFeatures([...features, featuresText]);
      setFeaturesText("");
    }
  };

  const handleDeleteFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const productFieldsValues = {
    name,
    price,
    brand,
    qty,
    category,
    description,
    direction,
    waring,
    ingredient,
    features,
    extraInfo,
    // image: image && image.url ? image.url : "",
    image: imageUrl,
    type,
  };

  const resetAllState = () => {
    setProductName("");
    setPrice(0);
    setBrand("");
    setQty(0);
    setCategory("");
    setDescription("");
    setDirection("");
    setWaring("");
    setIngredient("");
    setFeatures([]);
    setFeaturesText("");
    setExtraInfo("");
    setType("");
    setImageUrl("");
  };

  return {
    resetAllState,
    productFieldsValues,
    handleDeleteFeature,
    addOtherFeature,
    formGroups,
  };
};
