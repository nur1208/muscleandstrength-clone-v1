import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../actions/cartActions";
import { CartContainer } from "../components/cartScreen/CartContainer";
import { CartEmpty } from "../components/cartScreen/CartEmpty";
import { CartFeatures } from "../components/cartScreen/CartFeatures";
import {
  MainContent,
  MainWrap,
} from "../styledComponents/screens/cartScreenSC";

export const CartScreen = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    setIsCartEmpty(cartItems && cartItems.length <= 0);
  }, [cartItems]);

  return (
    <MainWrap id="MainWrap">
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <MainContent id="MainContent">
        {isCartEmpty ? <CartEmpty /> : <CartContainer />}
      </MainContent>
    </MainWrap>
  );
};
