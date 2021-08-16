import React from "react";
import {
  FormWrapper,
  ProductInputW,
  ProductsWrapper,
  ImageWrapper,
  ImageLoadBtn,
  ChooseFileBtn,
  InputFile,
  UploadedImage,
  AddButton,
  AddButtonW,
  FeatureWrapper,
  ButtonF,
  CustomSelect,
} from "./styledComp";
import { FaImage } from "react-icons/fa";
import { Form, Button, Table } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetUserInputProducts,
  saveUserInputProducts,
  uploadingProductImage,
} from "../../actions/userActions";
import { useEffect } from "react";
import { addProduct } from "../../actions/productsAction";
import {
  Select,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export const Products = ({ isSidebarOpen }) => {
  const adminSaveUserInputProducts = useSelector(
    (state) => state.adminSaveUserInputProducts
  );
  const { userInput } = adminSaveUserInputProducts;
  const [uploading, setUploading] = useState(false);
  // const [userInput, setUserInput] = useState({});
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

  const dispatch = useDispatch(null);

  const AdminUploadingImage = useSelector(
    (state) => state.AdminUploadingImage
  );

  const { image } = AdminUploadingImage;

  const productAdd = useSelector((state) => state.productAdd);

  const { success } = productAdd;

  const handleInputFile = (e) => {
    const files = Array.from(e.target.files);

    setUploading(true);

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    dispatch(uploadingProductImage(formData));

    // fetch(`http://localhost:5000/api/image/image-upload`, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((images) => {
    //     console.log(images);
    //     setUploading(false);
    //     setImages(images);
    //   });
  };

  // useEffect(() => {
  //   const newA = featuresText.trim().split(":");
  //   // const eachElementTrim = newA.map((item) => item.trim());
  //   setFeatures(newA.map((item) => item.trim()).filter((item) => item !== ""));
  // }, [featuresText]);

  // useEffect(() => {
  //   const data = localStorage.getItem("userInputProducts");
  //   setUserInput(JSON.parse(data));
  //   setProductName(userInput.name);
  // }, []);

  const handleInput = (e, f) => {
    console.log(brand);
    f(e.target.value);
  };

  useEffect(() => {
    dispatch(
      saveUserInputProducts({
        name,
        price,
        brand,
        qty,
        category,
        description,
        directions: direction,
        waring,
        ingredient,
        features,
        featuresText,
        extraInfo,
        image: imageUrl,
        type,
      })
    );

    // localStorage.setItem(
    //   "userInputProducts",
    //   JSON.stringify({
    //     name,
    //     price,
    //     brand,
    //     qty,
    //     category,
    //     description,
    //     waring,
    //     ingredient,
    //     features,
    //     featuresText,
    //     extraInfo,
    //     image: imageUrl,
    //     type,
    //   })
    // );
  }, [
    brand,
    category,
    description,
    direction,
    dispatch,
    extraInfo,
    features,
    featuresText,
    imageUrl,
    ingredient,
    name,
    price,
    qty,
    type,
    waring,
  ]);

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

  useEffect(() => {
    if (success) {
      dispatch(resetUserInputProducts());
      resetAllState();
    }
  }, [dispatch, success]);

  const formGroups = [
    {
      title: "Product Name",
      type: "text",
      placeholder: "Enter Product Name",
      onChangeFunction: setProductName,
      value: name,
    },
    {
      title: "Price",
      type: "number",
      placeholder: "Price in Euro",
      onChangeFunction: setPrice,
      value: price,
    },
    {
      title: "brand",
      type: "select",
      placeholder: "Enter product brand",
      onChangeFunction: setBrand,
      value: brand,
    },

    {
      title: "Quantity",
      type: "number",
      placeholder: "How many: qty",
      onChangeFunction: setQty,
      value: qty,
    },
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

  const handleAddProduct = () => {
    dispatch(
      addProduct({
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
      })
    );
  };

  const addOtherFeature = () => {
    setFeatures([...features, featuresText]);
    setFeaturesText("");
  };

  const handleDeleteFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleResetInput = () => {
    resetAllState();
    dispatch(resetUserInputProducts());
  };
  return (
    <ProductsWrapper isSidebarOpen={isSidebarOpen}>
      <ProductInputW id="ProductInputW">
        <Form>
          <FormWrapper>
            {formGroups.map((item, index) =>
              item.type !== "select" ? (
                <Form.Group
                  controlId="formBasicProductName"
                  key={index}
                >
                  <Form.Label>{item.title}:</Form.Label>
                  <Form.Control
                    type={item.type}
                    placeholder={item.placeholder}
                    as={item.as}
                    onChange={(e) =>
                      handleInput(e, item.onChangeFunction)
                    }
                    value={item.value === 0 ? "" : item.value}
                  />
                  {item.hasButton && (
                    <>
                      <ul>
                        {features.map(
                          (
                            feature,
                            index ////
                          ) => (
                            <FeatureWrapper>
                              <li key={index}>- {feature}</li>
                              <ButtonF
                                onClick={() =>
                                  handleDeleteFeature(index)
                                }
                              >
                                Delete
                              </ButtonF>
                            </FeatureWrapper>
                          )
                        )}
                      </ul>
                      <Button onClick={addOtherFeature}>
                        add feature
                      </Button>
                    </>
                  )}
                </Form.Group>
              ) : (
                <FormControl id="first-name">
                  <FormLabel>Brand</FormLabel>
                  <CustomSelect>
                    <Select
                      placeholder="Select Brand"
                      onChange={(e) =>
                        handleInput(e, item.onChangeFunction)
                      }
                    >
                      <option value="610a5df809f5dc1ab041e575">
                        MuscleTech
                      </option>
                      <option value="61165926e21c1f5e5cef730a">
                        Dymatize
                      </option>

                      <option value="-1">Other</option>
                    </Select>
                  </CustomSelect>
                </FormControl>
              )
            )}
          </FormWrapper>
        </Form>
        <ImageWrapper id="ImageWrapper">
          <label htmlFor="single">
            {image ? (
              <UploadedImage src={image.url} alt={image.url} />
            ) : (
              <FaImage color="#3B5998" size="10x" />
            )}
          </label>
          <InputFile
            type="file"
            id="InputFile"
            name="InputFile"
            onChange={handleInputFile}
          />
          <ChooseFileBtn id="ChooseFileBtn" for="InputFile">
            <span>Choose a file</span>
          </ChooseFileBtn>
          {/* onChange={props.onChange} */}
        </ImageWrapper>
      </ProductInputW>
      <AddButtonW>
        <AddButton onClick={handleAddProduct}>Add</AddButton>
        <AddButton onClick={handleResetInput}>reset</AddButton>
      </AddButtonW>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name:</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.state.products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={(event) => this.increQty(event)}
                    value={index}
                  >
                    +
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(event) => this.decreQty(event)}
                    value={index}
                  >
                    -
                  </Button>
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </Table>
    </ProductsWrapper>
  );
};
