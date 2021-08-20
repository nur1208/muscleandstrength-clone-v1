export const axiosErrorHandler = (error, type, dispatch) => {
  // error that not cause by the user.(something working the backend)
  if (error.response.status === 500) {
    dispatch({
      type,
      payload: "something went wrong, sorry.",
    });
  } else {
    dispatch({
      type,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
