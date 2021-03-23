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
} from "../constants/userConstants";

export const registerUser = (
  firstName,
  lastName,
  email,
  gender,
  goal,
  trainingExperience,
  password,
  referralCode,
  isNewsLitter
) => async (dispatch, getState) => {
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
    localStorage.setItem(
      "userInfo",
      JSON.stringify(getState().userRegister.userInfo)
    );
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

export const SingInUser = (email, password) => async (dispatch, getState) => {
  dispatch({ type: USER_SIGN_IN_REQUEST });
  try {
    const { data } = await axios.post("/api/users/signIn", {
      email,
      password,
    });
    dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
    localStorage.setItem(
      "userInfo",
      JSON.stringify(getState().userSingIn.userInfo)
    );
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

export const findEmail = (email) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/api/users/findEmail", { email });
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

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const forgetPasswordUser = (userEmail) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/api/users/forgetPassword", {
      userEmail,
    });
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

export const resetPasswordUser = (password) => async (dispatch, getState) => {
  try {
    const { data } = await axios.put("/api/users/resetPassword", {
      password,
      email: getState().userForgetPassword.email,
    });
    dispatch({ type: USER_FORGOT_PASSWORD_RESET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_FORGOT_PASSWORD_RESET_FAIL, payload: error });
  }
};

export const isFPTokenValid = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/users/isFPTokenValid", {
      headers: {
        Authorization: `Bearer ${getState().userForgetPassword.token}`,
      },
    });
    dispatch({ type: USER_FORGOT_PASSWORD_TOKEN_VALID, payload: data });
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
