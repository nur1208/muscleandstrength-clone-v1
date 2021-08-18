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
import { Dialog } from "../cartScreen/ShippingInfoModal";
import { ShippingInfo } from "../cartScreen/ShippingInfo";
import { FormFields } from "./FormFields";
import { SupProducts } from "./SupProducts";
import { AddBtnContainer } from "./AddBtnContainer";
import { useProductsFields } from "../../utils/adminProductsFields";
import { useSupProductsFields } from "../../utils/adiminAddProductFields";

export const Products = ({ isSidebarOpen }) => {
  const [uploading, setUploading] = useState(false);
  // const [userInput, setUserInput] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [supProducts, setSupProducts] = useState([]);
  const {
    resetAllState,
    productFieldsValues,
    handleDeleteFeature,
    addOtherFeature,
    formGroups,
  } = useProductsFields();

  // const supProductProps = {
  //   price,
  //   setPrice,
  //   image: supProductImage,
  //   setImage: setSupProductImage,
  // };

  // useEffect(() => {
  //   console.log({ productFieldsValues });
  // }, [productFieldsValues]);

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

  // const { supProductFieldsValues } = useSupProductsFields();
  // useEffect(() => {
  //   console.log({ supProductFieldsValues });
  //   console.log({
  //     ...productFieldsValues,
  //     supProduct: supProductFieldsValues,
  //   });
  //   dispatch(saveUserInputProducts(productFieldsValues));
  // }, [dispatch, productFieldsValues, supProductFieldsValues]);

  useEffect(() => {
    dispatch(saveUserInputProducts(productFieldsValues));
  }, [dispatch, productFieldsValues]);

  useEffect(() => {
    if (success) {
      dispatch(resetUserInputProducts());
      resetAllState();
    }
  }, [dispatch, resetAllState, success]);

  const handleAddBuyingOptions = () => {
    setIsDialogOpen(true);
  };

  const handleAddProduct = () => {
    // dispatch(addProduct());
    console.log({ ...productFieldsValues, supProducts });
  };

  useEffect(() => {
    console.log({ supProducts });
  }, [supProducts]);

  const handleResetInput = () => {
    resetAllState();
    dispatch(resetUserInputProducts());
  };

  const props = {
    handleDeleteFeature,
    formGroups,
    addOtherFeature,
    image,
  };

  const addBtnContainerProps = {
    handleAddProduct,
    handleAddBuyingOptions,
    handleResetInput,
  };

  const supProductProps = {
    setSupProducts,
    supProducts,
  };

  return (
    <>
      <ProductsWrapper isSidebarOpen={isSidebarOpen}>
        <FormFields {...props} hasImage={true} />
        <AddBtnContainer {...addBtnContainerProps} />
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
      {isDialogOpen && (
        <Dialog setIsModalOpen={setIsDialogOpen}>
          <SupProducts {...supProductProps} />
        </Dialog>
      )}
    </>
  );
};
