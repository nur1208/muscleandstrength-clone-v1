import axios from "axios";
import {
  CART_ADD_FAIL,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_GET_FAIL,
  CART_GET_REQUEST,
  CART_GET_SUCCESS,
  CART_ITEM_DELETE_FAIL,
  CART_ITEM_DELETE_REQUEST,
  CART_ITEM_DELETE_SUCCESS,
  CART_ITEM_UPDATE_QTY_FAIL,
  CART_ITEM_UPDATE_QTY_REQUEST,
  CART_ITEM_UPDATE_QTY_SUCCESS,
} from "../constants/cartConstants";

export const addToCart =
  (userId, productId, quantity, productType) => async (dispatch) => {
    dispatch({ type: CART_ADD_REQUEST });
    try {
      const { data } = await axios.post(`/api/store/cart`, {
        userId,
        productId,
        quantity,
        productType,
      });
      dispatch({ type: CART_ADD_SUCCESS, payload: data.cartItems });
      dispatch(getCart(userId));
    } catch (error) {
      dispatch({
        type: CART_ADD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getCart = (userId) => async (dispatch) => {
  dispatch({ type: CART_GET_REQUEST });
  try {
    const { data } = await axios.get(`/api/store/cart/${userId}`);
    dispatch({ type: CART_GET_SUCCESS, payload: data.cartItems });
  } catch (error) {
    dispatch({
      type: CART_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateQtyCartItem = (cartItemId, qty) => async (dispatch) => {
  dispatch({ type: CART_ITEM_UPDATE_QTY_REQUEST, payload: cartItemId });
  try {
    const { data: cartItem } = await axios.put(`/api/store/cart/quantity`, {
      qty,
      cartItemId,
    });

    dispatch({ type: CART_ITEM_UPDATE_QTY_SUCCESS, payload: cartItem });
  } catch (error) {
    dispatch({
      type: CART_ITEM_UPDATE_QTY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteCartItem = (cartItemId) => async (dispatch) => {
  dispatch({ type: CART_ITEM_DELETE_REQUEST, payload: cartItemId });
  try {
    const { data } = await axios.delete(`/api/store/cart`, {
      data: { cartItemId },
    });

    dispatch({ type: CART_ITEM_DELETE_SUCCESS, payload: data.cartItemId });
  } catch (error) {
    dispatch({
      type: CART_ITEM_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
