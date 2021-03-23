import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export const CartBtn = () => {
  return (
    <div className="store-action cart">
      <a href="/store/checkout/cart/">
        <div className="counter">0</div>
        <FaShoppingCart className="icon" />
        <span className="text">Cart</span>
      </a>
    </div>
  );
};
