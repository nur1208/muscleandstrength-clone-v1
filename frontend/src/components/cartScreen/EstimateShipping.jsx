import React, { useState } from "react";
import styled from "styled-components";
import { CountrySelector } from "./CountrySelector";
import { ShippingInfo } from "./ShippingInfo";
import { Dialog } from "./ShippingInfoModal";
import { ShippingInfoModal } from "./ShippingInfoModal";

const Form = styled.form`
  position: relative;
  z-index: 2;
`;

const InnerWrap = styled.div`
  padding: 1em 0.8em 0.8em;
  border: 1px solid #ddd;
  position: relative;
  margin-top: 0.5em;
  border-radius: 2px;
`;

const Title = styled.div`
  padding: 0.2em 0.7em;
  display: inline-block;
  position: absolute;
  top: -1em;
  left: 50%;
  transform: translate(-50%);
  background: #fff;
  font-size: 13px;
`;

const ZipCode = styled.div`
  padding: 1em 0 0;
  border-top: 1px solid #ddd;
  margin-top: 1em;
  overflow: hidden;
`;

const InputText = styled.input`
  border-radius: 2px;
  background: #fff;
  display: block;
  border: 1px solid #ddd;
  font-size: 16px;
  box-sizing: border-box;
  color: #303030;
  width: 47%;
  float: left;
  margin: 0;
  /* vertical-align: bottom; */
  @media (min-width: 600px) {
    height: 35px;
    line-height: 33px;
    padding: 0 15px;
  } ;
`;

const Button = styled.button`
  background-color: #fff;
  background-image: linear-gradient(white, #f2f2f2);
  color: #3c3c3c;
  text-shadow: 1px 1px 0 #f2f2f2;
  border: 1px solid #f5f5f5;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  font-family: nimbusnovus, sans-serif;
  font-weight: 500;
  white-space: nowrap;
  transition: 0.25s ease-out, color 0.25s ease-out;
  text-decoration: none;
  font-size: 11px;
  padding: 0 12px;
  line-height: 29px;
  width: 47%;
  float: right;
  margin: 0;

  @media (min-width: 600px) {
    padding: 0 15px;
    height: 35px;
    line-height: 35px;
  }
`;

const BottomText = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 13px;
  text-align: center;
`;

const SippingTo = styled.button`
  background-color: transparent;
  color: #059;
  text-decoration: none;
  border: none;
  :hover {
    color: #0687e6;
  }
`;

export const EstimateShipping = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const countryOptions = [
    { name: "Spain", icon: "es" },
    { name: "United States", icon: "us" },
    { name: "Saudi Arabia", icon: "sa" },

    { name: "Spain", icon: "es" },
    { name: "United States", icon: "us" },
    { name: "Saudi Arabia", icon: "sa" },
    { name: "Spain", icon: "es" },
    { name: "United States", icon: "us" },
    { name: "Saudi Arabia", icon: "sa" },
    { name: "Spain", icon: "es" },
    { name: "United States", icon: "us" },
    { name: "Saudi Arabia", icon: "sa" },
  ];
  return (
    <>
      <Form id="Form">
        <InnerWrap id="InnerWrap">
          <Title id="Title">Destination</Title>
          <CountrySelector
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            countryOptions={countryOptions}
          />
          <ZipCode id="ZipCode">
            <InputText
              id="InputText"
              placeholder="Postcode"
              type="text"
            />
            <Button id="Button">Calculate</Button>
          </ZipCode>
        </InnerWrap>
      </Form>
      <BottomText id="BottomText">
        Learn more about{" "}
        <SippingTo
          id="SippingTo"
          onClick={() => setIsModalOpen(true)}
        >
          shipping to {countryOptions[selectedIndex].name}
        </SippingTo>
      </BottomText>

      {isModalOpen && (
        <Dialog setIsModalOpen={setIsModalOpen}>
          <ShippingInfo />
        </Dialog>
      )}
    </>
  );
};
