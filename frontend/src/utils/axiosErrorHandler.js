import { getOneProduct } from "../actions/productsAction";

export const axiosErrorHandler = (error, type, dispatch) => {
  // error that not cause by the user.(something working the backend)
  if (error.response.status === 500) {
    dispatch({
      type: type.PRODUCT_GET_PRODUCT_V2_FAIL,
      payload: "something went wrong, sorry.",
    });
  } else if (error.response.status === 499) {
    dispatch(getOneProduct(type.productId));
    dispatch({
      type: type.PRODUCT_GET_PRODUCT_V2_OLD,
    });
  } else {
    dispatch({
      type: type.PRODUCT_GET_PRODUCT_V2_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
