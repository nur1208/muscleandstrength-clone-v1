import React from "react";
import styled from "styled-components";
import { CartItem } from "./CartItem";
import { CartLabels } from "./CartLabels";
import { CartToolsContainer } from "./CartToolsContainer";
import { CartUpSell } from "./CartUpSell";

const CartForm = styled.form``;

const CartWrap = styled.div`
  margin-bottom: 10px;
  padding: 1em 0;

  @media (min-width: 840px) {
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 15px;
  } ;
`;

const BlueBordered = styled.h1`
  font-weight: 700;
  margin: 0 0 10px;
  color: #059;
  border-bottom: 4px solid #eee;
  padding-bottom: 2px;
  font-size: 18px;
  line-height: 1.3em;
  font-variant-ligatures: none;
`;

export const Cart = () => {
  const cartItems = [
    {
      name: "JNX Sports The Ripper - 30 Servings Blood Orange",
      price: 27.86,
      hasButton: true,
      subtotal: 27.86,
      qty: 1,
    },
    {
      name: "JNX Sports The Ripper - 30 Servings Blood Orange",
      price: "FREE",
      subtotal: "FREE",
      qty: 1,
      message: "Buy 1 Get 1 FREE ",
      freeProductName: "1 x JNX Sports The Ripper - 30 Servings Blood Orange",
    },
  ];

  return (
    <div>
      <CartForm id="CartForm">
        <CartWrap id="CartWrap">
          <CartLabels />
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              {...item}
              hasBottomBorder={index + 1 !== cartItems.length}
            />
          ))}
        </CartWrap>
      </CartForm>
      <BlueBordered id="BlueBordered">Limited Time Price Cuts</BlueBordered>
      <CartUpSell />
      <CartToolsContainer />
    </div>
  );
};
