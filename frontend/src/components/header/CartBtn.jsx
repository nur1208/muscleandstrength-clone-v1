import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "../../actions/cartActions";

export const CartBtn = () => {
  const cart = useSelector((state) => state.cart);
  // const [cartItems, setCartItems] = useState([]);

  const { cartItems, loading } = cart;

  const userSingIn = useSelector((state) => state.userSingIn);
  const dispatch = useDispatch(null);
  useEffect(() => {
    const userId =
      userSingIn.userInfo && userSingIn.userInfo._id;
    if (userId) {
      dispatch(getCart(userId));
    }
  }, [dispatch, userSingIn]);

  return (
    <div className="store-action cart">
      <Link to="/store/cart/">
        <div className="counter">
          {cartItems && !loading
            ? cartItems.reduce(
                (totalItems, item) => item.quantity + totalItems,
                0
              )
            : 0}
          {/* {cartItems.forEach((item) =>)} */}
        </div>
        <FaShoppingCart className="icon" />
        <span className="text">Cart</span>
      </Link>
    </div>
  );
};
