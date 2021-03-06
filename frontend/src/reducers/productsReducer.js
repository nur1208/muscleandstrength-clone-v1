import {
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_GET_HAS_BEEN_RATED_FAIL,
  PRODUCT_GET_HAS_BEEN_RATED_REQUEST,
  PRODUCT_GET_HAS_BEEN_RATED_SUCCESS,
  PRODUCT_GET_ONE_FAIL,
  PRODUCT_GET_ONE_REQUEST,
  PRODUCT_GET_ONE_SUCCESS,
  PRODUCT_GET_PRODUCT_V2_FAIL,
  PRODUCT_GET_PRODUCT_V2_OLD,
  PRODUCT_GET_PRODUCT_V2_REQUEST,
  PRODUCT_GET_PRODUCT_V2_SUCCESS,
  PRODUCT_GET_THIS_WEEK_DEAL_FAIL,
  PRODUCT_GET_THIS_WEEK_DEAL_REQUEST,
  PRODUCT_GET_THIS_WEEK_DEAL_SUCCESS,
  PRODUCT_GET_WITH_DEAL_FAIL,
  PRODUCT_GET_WITH_DEAL_REQUEST,
  PRODUCT_GET_WITH_DEAL_SUCCESS,
  PRODUCT_SEARCH_FAIL,
  PRODUCT_SEARCH_GET_NUM_SUCCESS,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_TOP_DEALS_FAIL,
  PRODUCT_TOP_DEALS_REQUEST,
  PRODUCT_TOP_DEALS_SUCCESS,
} from "../constants/productsCntanst";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_TOP_DEALS_REQUEST:
    case PRODUCT_GET_WITH_DEAL_REQUEST:
    case PRODUCT_GET_THIS_WEEK_DEAL_REQUEST:
    case PRODUCT_GET_HAS_BEEN_RATED_REQUEST:
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
    case PRODUCT_GET_WITH_DEAL_FAIL:
    case PRODUCT_GET_THIS_WEEK_DEAL_FAIL:
    case PRODUCT_GET_HAS_BEEN_RATED_FAIL:
      return { ...state, loading: false, error: action.payload };

    case PRODUCT_GET_WITH_DEAL_SUCCESS:
      return {
        ...state,
        loading: false,
        productsWithDeal: action.payload,
      };

    case PRODUCT_GET_THIS_WEEK_DEAL_SUCCESS:
      return {
        ...state,
        loading: false,
        productsThisWeekDeal: action.payload,
      };

    case PRODUCT_GET_HAS_BEEN_RATED_SUCCESS:
      return {
        ...state,
        loading: false,
        productsHasBeenRated: action.payload,
      };

    default:
      return state;
  }
};

export const productGetOneReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_GET_ONE_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_GET_ONE_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case PRODUCT_GET_PRODUCT_V2_SUCCESS:
      return { ...state, loading: false };
    case PRODUCT_GET_ONE_FAIL:
    case PRODUCT_GET_PRODUCT_V2_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productV2Reducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_GET_PRODUCT_V2_REQUEST:
      return { ...state, loading: true, isOldVersion: false };
    case PRODUCT_GET_PRODUCT_V2_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case PRODUCT_GET_PRODUCT_V2_OLD:
      return {
        ...state,
        loading: false,
        isOldVersion: true,
      };
    case PRODUCT_GET_PRODUCT_V2_FAIL:
      // console.log({
      //   productOneLoading: state.productOne.loading,
      // });
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
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

export const productSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_SEARCH_REQUEST:
      return { ...state, loading: true, error: false };
    case PRODUCT_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        products: action.payload.data.products,
        query: action.payload.quey,
        error: false,
      };
    case PRODUCT_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case PRODUCT_SEARCH_GET_NUM_SUCCESS:
      return {
        ...state,
        numOfProducts: action.payload,
      };
    default:
      return state;
  }
};
