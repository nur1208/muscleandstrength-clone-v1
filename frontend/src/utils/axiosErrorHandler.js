import { getOneProduct } from "../actions/productsAction";

export const axiosErrorHandler = (
  error,
  type = {},
  dispatch
) => {
  // if status not exist set 0 as default value for it
  const status =
    error.response && error.response.status
      ? error.response.status
      : 0;
  // error that not cause by the user.(something working the backend)
  if (status === 500) {
    dispatch({
      type: type.PRODUCT_GET_PRODUCT_V2_FAIL || type,
      payload: "something went wrong, sorry.",
    });
  } else if (status === 499) {
    dispatch(getOneProduct(type.productId));
    dispatch({
      type: type.PRODUCT_GET_PRODUCT_V2_OLD,
    });
  } else {
    dispatch({
      type: type.PRODUCT_GET_PRODUCT_V2_FAIL || type,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
