import React from "react";
import { CartHeaderMW } from "../../styledComponents/cartScreen/cartHeaderSC";
import { ButtonRow } from "./ButtonRow";
import { CartFeatures } from "./CartFeatures";
import { CartTitleCompo } from "./CartTitleCompo";

export const CartHeader = () => {
  return (
    <CartHeaderMW id="CartHeaderMW">
      <CartTitleCompo />
      <CartFeatures />
      <ButtonRow />
    </CartHeaderMW>
  );
};
