import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { CartContainer } from "../components/cartScreen/CartContainer";
import { CartEmpty } from "../components/cartScreen/CartEmpty";
import {
  MainContent,
  MainWrap,
} from "../styledComponents/screens/cartScreenSC";

export const CartScreen = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  return (
    <MainWrap>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <MainContent>
        {isCartEmpty ? <CartEmpty /> : <CartContainer />}
      </MainContent>
    </MainWrap>
  );
};
