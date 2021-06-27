import {
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_GET_ONE_FAIL,
  PRODUCT_GET_ONE_REQUEST,
  PRODUCT_GET_ONE_SUCCESS,
  PRODUCT_TOP_DEALS_FAIL,
  PRODUCT_TOP_DEALS_REQUEST,
  PRODUCT_TOP_DEALS_SUCCESS,
} from "../constants/productsCntanst";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_TOP_DEALS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_TOP_DEALS_SUCCESS:
      return {
        ...state,
        loading: false,
        topDeals: action.payload.topDeal,
        topRated: action.payload.topRated,
        trending: action.payload.trending,
        brands: action.payload.brands,
        storeContents: action.payload.storeContents,
      };
    case PRODUCT_TOP_DEALS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productGetOneReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_GET_ONE_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_GET_ONE_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_GET_ONE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productAddReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ADD_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };
    case PRODUCT_ADD_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
