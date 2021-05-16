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
} from "./styledComp";
import { FaImage } from "react-icons/fa";

import { Form, Button, Table } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadingProductImage } from "../../actions/userActions";
import { useEffect } from "react";
import { addProduct } from "../../actions/productsAction";

export const Products = ({ isSidebarOpen }) => {
  const [uploading, setUploading] = useState(false);
  const [name, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [qty, setQty] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [waring, setWaring] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [features, setFeatures] = useState([]);
  const [featuresText, setFeaturesText] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  const dispatch = useDispatch(null);

  const AdminUploadingImage = useSelector((state) => state.AdminUploadingImage);

  const { image } = AdminUploadingImage;

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

  useEffect(() => {
    const newA = featuresText.trim().split(";");
    // const eachElementTrim = newA.map((item) => item.trim());
    console.log(newA.map((item) => item.trim()));

    setFeatures(newA.map((item) => item.trim()).filter((item) => item !== ""));
  }, [featuresText]);

  const handleInput = (e, f) => {
    f(e.target.value);
  };

  const formGroups = [
    {
      title: "Product Name",
      type: "text",
      placeholder: "Enter Product Name",
      onChangeFunction: setProductName,
    },
    {
      title: "Price",
      type: "number",
      placeholder: "Price in Euro",
      onChangeFunction: setPrice,
    },
    {
      title: "brand",
      type: "text",
      placeholder: "Enter product brand",
      onChangeFunction: setBrand,
    },

    {
      title: "Quantity",
      type: "number",
      placeholder: "How many: qty",
      onChangeFunction: setQty,
    },
    {
      title: "category",
      type: "text",
      placeholder: "Enter product category",
      onChangeFunction: setCategory,
    },
    {
      title: "description",
      type: "",
      as: "textarea",
      placeholder: "Enter product description",
      onChangeFunction: setDescription,
    },
    {
      title: "warning",
      type: "",
      as: "textarea",
      placeholder: "Enter product waring (if exist)",
      onChangeFunction: setWaring,
    },
    {
      title: "ingredient",
      type: "",
      as: "textarea",
      placeholder: "Enter product ingredient (if exist)",
      onChangeFunction: setIngredient,
    },
    {
      title: "features",
      type: "",
      as: "textarea",
      placeholder: "Enter product features (spare each features with ';')",
      onChangeFunction: setFeaturesText,
    },
    {
      title: "extraInfo",
      type: "",
      as: "textarea",
      placeholder: "Enter product extra Info html",
      onChangeFunction: setExtraInfo,
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
        waring,
        ingredient,
        features,
        extraInfo,
        image: image.url,
      })
    );
  };
  return (
    <ProductsWrapper isSidebarOpen={isSidebarOpen}>
      <ProductInputW id="ProductInputW">
        <Form>
          <FormWrapper>
            {formGroups.map((item, index) => (
              <Form.Group controlId="formBasicProductName" key={index}>
                <Form.Label>{item.title}:</Form.Label>
                <Form.Control
                  type={item.type}
                  placeholder={item.placeholder}
                  as={item.as}
                  onChange={(e) => handleInput(e, item.onChangeFunction)}
                />
              </Form.Group>
            ))}
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
