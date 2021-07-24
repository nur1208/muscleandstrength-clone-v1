import React from "react";
import {
  BbbBadge,
  CartHeaderText,
  CartTitle,
  ShopperBadge,
} from "../../styledComponents/cartScreen/cartTitleSC";

export const CartTitleCompo = () => {
  return (
    <CartTitle id="CartTitle">
      <CartHeaderText id="CartHeaderText">Shopping Cart</CartHeaderText>
      <ShopperBadge id="ShopperBadge">
        <a href="#somewhere">
          <img src="/images/8633-m.gif" alt="8633-m" />
        </a>
      </ShopperBadge>
      <BbbBadge id="BbbBadge">
        <a href="#somewhere">
          <img src="/images/bbb.webp" alt="bbb.webp" />
        </a>
      </BbbBadge>
    </CartTitle>
  );
};
