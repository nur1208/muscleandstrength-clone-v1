import {
  USER_FIND_EMAIL_FAIL,
  USER_FIND_EMAIL_SUCCESS,
  USER_FORGOT_PASSWORD,
  USER_FORGOT_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_RESET_FAIL,
  USER_FORGOT_PASSWORD_RESET_SUCCESS,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_TIME_OUT,
  USER_FORGOT_PASSWORD_TOKEN_INVALID,
  USER_FORGOT_PASSWORD_TOKEN_VALID,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGN_IN_FAIL,
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case USER_SIGN_IN_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case USER_SIGN_IN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const emailFindReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FIND_EMAIL_SUCCESS:
      return { ...state, isEmailExist: true };

    case USER_FIND_EMAIL_FAIL:
      return { ...state, isEmailExist: false };

    default:
      return state;
  }
};

export const userForgetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_PASSWORD:
      return {};
    case USER_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        success: true,
        email: action.payload.userEmail,
        error: "",
      };
    case USER_FORGOT_PASSWORD_FAIL:
      return { ...state, error: action.payload };
    case USER_FORGOT_PASSWORD_TIME_OUT:
      return {
        error: "your reset password link expired, sorry you gotta try again",
      };
    case USER_FORGOT_PASSWORD_RESET_SUCCESS:
      return { ...state, success: true };
    case USER_FORGOT_PASSWORD_RESET_FAIL:
      return { ...state, error: action.payload };
    case USER_FORGOT_PASSWORD_TOKEN_VALID:
      return { ...state, data: action.payload, isFPTokenInvalid: false };
    case USER_FORGOT_PASSWORD_TOKEN_INVALID:
      return { ...state, error: action.payload, isFPTokenInvalid: true };
    default:
      return state;
  }
};
