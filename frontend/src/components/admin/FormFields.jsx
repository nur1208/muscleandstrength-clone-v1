import React from "react";
import { Form, Button } from "react-bootstrap";
import {
  Select,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import {
  ButtonF,
  ChooseFileBtn,
  CustomSelect,
  FeatureWrapper,
  FormWrapper,
  ImageWrapper,
  InputFile,
  ProductInputW,
  UploadedImage,
} from "./styledComp";

import { FaImage } from "react-icons/fa";
import { DealInput } from "./DealInput";
import { DateField } from "./DateField";

export const FormFields = ({
  handleDeleteFeature,
  formGroups,
  handleInput,
  addOtherFeature,
  addItems,
  image,
  handleInputFile,
  hasImage,
}) => {
  return (
    <ProductInputW id="ProductInputW" hasImage={hasImage}>
      <Form>
        <FormWrapper>
          {formGroups.map((item, index) =>
            item.type === "select" ? (
              <FormControl id="first-name">
                <FormLabel>{item.title}</FormLabel>
                <CustomSelect>
                  <Select
                    placeholder="Select Brand"
                    onChange={(e) =>
                      item.onChangeFunction(e.target.value)
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
            ) : item.type === "date" ? (
              <DateField {...item} />
            ) : (
              <Form.Group
                controlId="formBasicProductName"
                key={index}
              >
                <Form.Label>{item.title}:</Form.Label>
                <Form.Control
                  type={item.type}
                  placeholder={item.placeholder}
                  as={item.as}
                  // onChange={(e) =>
                  //   handleInput(e, item.onChangeFunction)
                  // }

                  onChange={(e) =>
                    item.onChangeFunction(e.target.value)
                  }
                  value={item.value === 0 ? "" : item.value}
                />
                {item.hasButton && (
                  <>
                    <ul>
                      {item.values.map(
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
                      {/* <Button onClick={() => addOther()}> */}
                      add{" "}
                      {/* the following code for just delete the 's' from flavors and features words */}
                      {item.title.slice(
                        0,
                        item.title.length - 1
                      )}
                    </Button>
                  </>
                )}
              </Form.Group>
            )
          )}
        </FormWrapper>
      </Form>
      {hasImage && (
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
      )}
    </ProductInputW>
  );
};
