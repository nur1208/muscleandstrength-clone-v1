import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  // const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [isLoadings, setIsLoadings] = useState([]);

  useEffect(() => {
    if (cartItems) {
      setIsLoadings(Array(cartItems.length).fill(false));
    }
  }, [cartItems]);

  return (
    <div>
      <CartForm id="CartForm">
        <CartWrap id="CartWrap">
          <CartLabels />
          {cartItems &&
            cartItems.map((item, index) => {
              if (item.product) {
                const {
                  quantity,
                  _id: cartItemId,
                  product: { name, price, _id: productId },
                  productType,
                } = item;
                return (
                  <CartItem
                    productId={productId}
                    key={cartItemId}
                    cartItemId={cartItemId}
                    // {...item}
                    productType={productType}
                    price={price}
                    name={name}
                    isLoadings={isLoadings}
                    setIsLoadings={setIsLoadings}
                    qty={quantity}
                    subtotal={quantity * price}
                    hasButton={true}
                    hasBottomBorder={index + 1 !== cartItems.length}
                    index={index}
                  />
                );
              }
              return null;
            })}
        </CartWrap>
      </CartForm>
      <BlueBordered id="BlueBordered">Limited Time Price Cuts</BlueBordered>
      <CartUpSell />
      <CartToolsContainer />
    </div>
  );
};
