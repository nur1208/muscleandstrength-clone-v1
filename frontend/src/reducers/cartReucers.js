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

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_ADD_REQUEST:
    case CART_GET_REQUEST:
      return { ...state, loading: true, success: false };
    case CART_ADD_SUCCESS:
    case CART_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        cartItems: action.payload,
      };
    case CART_ADD_FAIL:
    case CART_GET_FAIL:
    case CART_ITEM_UPDATE_QTY_FAIL:
    case CART_ITEM_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
        idLoading: false,
        deletedIdLoading: false,
      };
    case CART_ITEM_UPDATE_QTY_REQUEST:
      return {
        ...state,
        idLoading: action.payload,
        success: false,
      };
    case CART_ITEM_UPDATE_QTY_SUCCESS:
      const newCartItems = state.cartItems.map((item, index) => {
        if (item._id === action.payload._id) return action.payload;
        return item;
      });

      return {
        ...state,
        idLoading: false,
        success: true,
        cartItems: newCartItems,
      };

    case CART_ITEM_DELETE_REQUEST:
      return { ...state, deletedIdLoading: action.payload, success: false };

    case CART_ITEM_DELETE_SUCCESS:
      const cartItemId = action.payload;
      console.log(cartItemId);
      return {
        ...state,
        deletedIdLoading: false,
        success: true,
        cartItems: state.cartItems.filter((item) => item._id !== cartItemId),
      };
    default:
      return state;
  }
};
