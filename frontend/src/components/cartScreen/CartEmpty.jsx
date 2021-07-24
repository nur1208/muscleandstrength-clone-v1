import React from "react";
import { Link } from "react-router-dom";
import {
  CartEmptyH1,
  CartEmptyP,
} from "../../styledComponents/cartScreen/cartEmptySC";

export const CartEmpty = () => {
  return (
    <>
      <CartEmptyH1 id="CartEmptyH1">Your Shopping Cart is Empty</CartEmptyH1>
      <CartEmptyP id="CartEmptyP">
        You have no items in your shopping cart.
      </CartEmptyP>
      <CartEmptyP id="CartEmptyP">
        Please <Link to="/store/">continue shopping</Link>.
      </CartEmptyP>
    </>
  );
};
