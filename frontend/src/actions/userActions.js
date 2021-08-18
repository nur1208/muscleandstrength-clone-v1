import axios from "../../node_modules/axios/index";
import {
  USER_FIND_EMAIL_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_FIND_EMAIL_FAIL,
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAIL,
  USER_LOGOUT,
  USER_FORGOT_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_TIME_OUT,
  USER_FORGOT_PASSWORD_RESET_SUCCESS,
  USER_FORGOT_PASSWORD_RESET_FAIL,
  USER_FORGOT_PASSWORD_TOKEN_VALID,
  USER_FORGOT_PASSWORD_TOKEN_INVALID,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_ADMIN_UPLOADING_IMAGE_REQUEST,
  USER_ADMIN_UPLOADING_IMAGE_SUCCESS,
  USER_ADMIN_UPLOADING_IMAGE_FAIL,
  USER_ADMIN_SAVE_PRODUCT_ADD_INFO,
  USER_ADMIN_RESET_PRODUCT_ADD_INFO,
  USER_AUTO_LOGIN_REQUEST,
  USER_AUTO_LOGIN_SUCCESS,
  USER_AUTO_LOGIN_FAIL,
  USER_ADMIN_RESET_SUP_PRODUCT_ADD_INFO,
  USER_ADMIN_SAVE_SUP_PRODUCT_ADD_INFO,
} from "../constants/userConstants";
import {
  USER_INPUT_DEAL,
  USER_INPUT_SUP_PRODUCTS,
} from "../utils/localStorageConstenses";

export const registerUser =
  (
    firstName,
    lastName,
    email,
    gender,
    goal,
    trainingExperience,
    password,
    referralCode,
    isNewsLitter
  ) =>
  async (dispatch, getState) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    try {
      const { data } = await axios.post("/api/users/register", {
        firstName,
        lastName,
        email,
        gender,
        goal,
        trainingExperience,
        password,
        referralCode,
        isNewsLitter,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
      // localStorage.setItem(
      //   "userInfo",
      //   JSON.stringify(getState().userRegister.userInfo)
      // );
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const SingInUser =
  (email, password) => async (dispatch, getState) => {
    dispatch({ type: USER_SIGN_IN_REQUEST });
    try {
      const { data } = await axios.post(
        "/api/users/signIn",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });

      // localStorage.setItem(
      //   "userInfo",
      //   JSON.stringify(getState().userSingIn.userInfo)
      // );
    } catch (error) {
      dispatch({
        type: USER_SIGN_IN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const findEmail =
  (email) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/api/users/findEmail", {
        email,
      });
      dispatch({ type: USER_FIND_EMAIL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_FIND_EMAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logoutUser = () => async (dispatch) => {
  await axios.post("/api/users/logout");
  // localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const forgetPasswordUser =
  (userEmail) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/api/users/forgetPassword",
        {
          userEmail,
        }
      );
      dispatch({
        type: USER_FORGOT_PASSWORD_SUCCESS,
        payload: { data, userEmail },
      });
      localStorage.setItem(
        "fPToken",
        JSON.stringify(getState().userForgetPassword.token)
      );
      localStorage.setItem(
        "fPEmail",
        JSON.stringify(getState().userForgetPassword.email)
      );
    } catch (error) {
      dispatch({
        type: USER_FORGOT_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const forgetPasswordTimeOut = () => (dispatch) => {
  localStorage.removeItem("fPToken");
  localStorage.removeItem("fPEmail");
  dispatch({ type: USER_FORGOT_PASSWORD_TIME_OUT });
};

export const resetPasswordUser =
  (password) => async (dispatch, getState) => {
    try {
      const { data } = await axios.put(
        "/api/users/resetPassword",
        {
          password,
          email: getState().userForgetPassword.email,
        }
      );
      dispatch({
        type: USER_FORGOT_PASSWORD_RESET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_FORGOT_PASSWORD_RESET_FAIL,
        payload: error,
      });
    }
  };

export const isFPTokenValid =
  () => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        "/api/users/isFPTokenValid",
        {
          headers: {
            Authorization: `Bearer ${
              getState().userForgetPassword.token
            }`,
          },
        }
      );
      dispatch({
        type: USER_FORGOT_PASSWORD_TOKEN_VALID,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_FORGOT_PASSWORD_TOKEN_INVALID,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateUser =
  (_id, update) => async (dispatch, getState) => {
    dispatch({ type: USER_UPDATE_REQUEST });
    try {
      const { data } = await axios.put(
        "/api/users/update",
        {
          _id,
          update,
        },
        {
          headers: {
            Authorization: `Bearer ${
              getState().userSingIn.userInfo.token
            }`,
          },
        }
      );
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
      // localStorage.setItem(
      //   "userInfo",
      //   JSON.stringify(getState().userSingIn.userInfo)
      // );
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const uploadingProductImage =
  (formData) => async (dispatch) => {
    dispatch({ type: USER_ADMIN_UPLOADING_IMAGE_REQUEST });
    try {
      // const { data } = await axios.post("/api/image/image-upload", {
      //   formData,
      // });

      const data = await fetch(`/api/image/image-upload`, {
        method: "POST",
        body: formData,
      });

      const j = await data.json();

      console.log("j = ", j);
      dispatch({
        type: USER_ADMIN_UPLOADING_IMAGE_SUCCESS,
        payload: j,
      });
    } catch (error) {
      dispatch({
        type: USER_ADMIN_UPLOADING_IMAGE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const saveUserInputProducts =
  (data) => async (dispatch) => {
    localStorage.setItem(
      "userInputProducts",
      JSON.stringify(data)
    );
    dispatch({ type: USER_ADMIN_SAVE_PRODUCT_ADD_INFO });
  };

export const resetUserInputProducts =
  (data) => async (dispatch) => {
    localStorage.clear("userInputProducts");
    dispatch({ type: USER_ADMIN_RESET_PRODUCT_ADD_INFO });
  };

export const saveUserInputSupProducts =
  (data) => async (dispatch) => {
    localStorage.setItem(
      USER_INPUT_SUP_PRODUCTS,
      JSON.stringify(data)
    );
    // dispatch({
    //   type: USER_ADMIN_SAVE_SUP_PRODUCT_ADD_INFO,
    //   payload: data,
    // });
  };

export const resetUserInputSupProducts =
  (data) => async (dispatch) => {
    localStorage.clear(USER_INPUT_SUP_PRODUCTS);
    dispatch({ type: USER_ADMIN_RESET_SUP_PRODUCT_ADD_INFO });
  };

export const saveUserInputDeal = (data) => {
  localStorage.setItem(USER_INPUT_DEAL, JSON.stringify(data));
};

export const getSavedUserInputDeal = () => {
  const saveInput = JSON.parse(
    localStorage.getItem(USER_INPUT_DEAL)
  );

  return saveInput;
};

export const resetSavedUserInputDeal = () => {
  localStorage.clear(USER_INPUT_DEAL);
};

export const autoLoggingLoggedUser = () => async (dispatch) => {
  dispatch({
    type: USER_AUTO_LOGIN_REQUEST,
  });
  try {
    const { data } = await axios.get(
      "/api/users/autoLoggingLoggedUser"
    );

    // console.log({ data });
    dispatch({
      type: USER_AUTO_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_AUTO_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
