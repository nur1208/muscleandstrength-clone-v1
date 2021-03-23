import React from "react";
import { CartBtn } from "./CartBtn";
import { LocationBtn } from "./LocationBtn";
import { LoginBtn } from "./LoginBtn";

export const Actions = () => {
  return (
    <div className="store-action-container">
      <LocationBtn styleName="store-action country" />
      <CartBtn />
      <LoginBtn />
    </div>
  );
};
