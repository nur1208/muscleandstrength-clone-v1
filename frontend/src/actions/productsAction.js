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
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_FAIL,
  PRODUCT_SEARCH_GET_NUM_SUCCESS,
  PRODUCT_SEARCH_GET_NUM_FAIL,
  PRODUCT_GET_WITH_DEAL_REQUEST,
  PRODUCT_GET_WITH_DEAL_SUCCESS,
  PRODUCT_GET_WITH_DEAL_FAIL,
  PRODUCT_GET_THIS_WEEK_DEAL_REQUEST,
  PRODUCT_GET_THIS_WEEK_DEAL_SUCCESS,
  PRODUCT_GET_THIS_WEEK_DEAL_FAIL,
  PRODUCT_GET_HAS_BEEN_RATED_REQUEST,
  PRODUCT_GET_HAS_BEEN_RATED_SUCCESS,
  PRODUCT_GET_HAS_BEEN_RATED_FAIL,
  PRODUCT_GET_PRODUCT_V2_REQUEST,
  PRODUCT_GET_PRODUCT_V2_SUCCESS,
  PRODUCT_GET_PRODUCT_V2_FAIL,
  PRODUCT_GET_PRODUCT_V2_OLD,
} from "../constants/productsCntanst";
import { axiosErrorHandler } from "../utils/axiosErrorHandler";
import { STORE_MAIN_DATA } from "../utils/localStorageConstenses";

export const getProductsTopDeals = () => async (dispatch) => {
  dispatch({ type: PRODUCT_TOP_DEALS_REQUEST });
  try {
    const { data } = await axios.get(
      "/api/products/getTopDeals"
    );
    dispatch({ type: PRODUCT_TOP_DEALS_SUCCESS, payload: data });
    localStorage.setItem(STORE_MAIN_DATA, JSON.stringify(data));
    console.log({ data });
  } catch (error) {
    axiosErrorHandler(error, PRODUCT_TOP_DEALS_FAIL, dispatch);
  }
};

export const getProductsWithDeal = () => async (dispatch) => {
  dispatch({ type: PRODUCT_GET_WITH_DEAL_REQUEST });
  try {
    const { data } = await axios.get(
      "/api/products/productsWithDeal"
    );
    dispatch({
      type: PRODUCT_GET_WITH_DEAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_GET_WITH_DEAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductsThisWeekDeal =
  () => async (dispatch) => {
    dispatch({ type: PRODUCT_GET_THIS_WEEK_DEAL_REQUEST });
    try {
      const { data } = await axios.get(
        "/api/products/thisWeekDeal"
      );
      dispatch({
        type: PRODUCT_GET_THIS_WEEK_DEAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_GET_THIS_WEEK_DEAL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getProductsHasBeenRated =
  () => async (dispatch) => {
    dispatch({ type: PRODUCT_GET_HAS_BEEN_RATED_REQUEST });
    try {
      const { data } = await axios.get(
        "/api/products/topRatedProducts"
      );
      dispatch({
        type: PRODUCT_GET_HAS_BEEN_RATED_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_GET_HAS_BEEN_RATED_FAIL,
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
    const { data } = await axios.post(`/api/products/add`, {
      product,
    });
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

export const searchProducts =
  (quey, limit = 12) =>
  async (dispatch) => {
    dispatch({ type: PRODUCT_SEARCH_REQUEST });
    try {
      const { data } = await axios.get(
        `/api/products/search/${quey}/${limit}`
      );
      dispatch({
        type: PRODUCT_SEARCH_SUCCESS,
        payload: { data, quey },
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_SEARCH_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getNumOfProducts = (quey) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/products/search/numOfProducts/${quey}`
    );
    dispatch({
      type: PRODUCT_SEARCH_GET_NUM_SUCCESS,
      payload: data.numOfProducts,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SEARCH_GET_NUM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductV2 = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_GET_PRODUCT_V2_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `/api/products/version2/${productId}`
    );

    dispatch({
      type: PRODUCT_GET_PRODUCT_V2_SUCCESS,
      payload: data,
    });
  } catch (error) {
    axiosErrorHandler(
      error,
      {
        productId,
        PRODUCT_GET_PRODUCT_V2_OLD,
        PRODUCT_GET_PRODUCT_V2_FAIL,
      },
      dispatch
    );
    // console.log({ error });
    // dispatch({
    //   type: PRODUCT_GET_PRODUCT_V2_FAIL,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // });
  }
};
