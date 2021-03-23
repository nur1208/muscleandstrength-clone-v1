import axios from "../../node_modules/axios/index";
import {
  PRODUCT_TOP_DEALS_REQUEST,
  PRODUCT_TOP_DEALS_SUCCESS,
  PRODUCT_TOP_DEALS_FAIL,
  PRODUCT_GET_ONE_REQUEST,
  PRODUCT_GET_ONE_SUCCESS,
  PRODUCT_GET_ONE_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAIL,
} from "../constants/productsCntanst";

export const getProductsTopDeals = () => async (dispatch) => {
  dispatch({ type: PRODUCT_TOP_DEALS_REQUEST });
  try {
    const { data } = await axios.get("/api/products/getTopDeals");
    dispatch({ type: PRODUCT_TOP_DEALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_DEALS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOneProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_GET_ONE_REQUEST });
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_GET_ONE_SUCCESS, payload: data });
    localStorage.setItem("product", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PRODUCT_GET_ONE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addProduct = (product) => async (dispatch) => {
  dispatch({ type: PRODUCT_ADD_REQUEST });
  try {
    const { data } = await axios.post(`/api/products/add`, { product });
    dispatch({ type: PRODUCT_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
