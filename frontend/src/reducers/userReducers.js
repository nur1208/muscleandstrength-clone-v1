import {
  USER_ADMIN_RESET_PRODUCT_ADD_INFO,
  USER_ADMIN_RESET_SUP_PRODUCT_ADD_INFO,
  USER_ADMIN_SAVE_PRODUCT_ADD_INFO,
  USER_ADMIN_SAVE_SUP_PRODUCT_ADD_INFO,
  USER_ADMIN_UPLOADING_IMAGE_FAIL,
  USER_ADMIN_UPLOADING_IMAGE_REQUEST,
  USER_ADMIN_UPLOADING_IMAGE_SUCCESS,
  USER_AUTO_LOGIN_FAIL,
  USER_AUTO_LOGIN_REQUEST,
  USER_AUTO_LOGIN_SUCCESS,
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
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        success: true,
      };
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_IN_REQUEST:
    case USER_AUTO_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_SIGN_IN_SUCCESS:
    case USER_AUTO_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        success: true,
      };
    case USER_SIGN_IN_FAIL:
    case USER_AUTO_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_UPDATE_REQUEST:
      return { ...state, loadingUpdate: true };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loadingUpdate: false,
        userInfo: action.payload,
        successUpdate: true,
      };
    case USER_UPDATE_FAIL:
      return {
        ...state,
        loadingUpdate: false,
        errorUpdate: action.payload,
      };
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

export const userForgetPasswordReducer = (
  state = {},
  action
) => {
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
        error:
          "your reset password link expired, sorry you gotta try again",
      };
    case USER_FORGOT_PASSWORD_RESET_SUCCESS:
      return { ...state, success: true };
    case USER_FORGOT_PASSWORD_RESET_FAIL:
      return { ...state, error: action.payload };
    case USER_FORGOT_PASSWORD_TOKEN_VALID:
      return {
        ...state,
        data: action.payload,
        isFPTokenInvalid: false,
      };
    case USER_FORGOT_PASSWORD_TOKEN_INVALID:
      return {
        ...state,
        error: action.payload,
        isFPTokenInvalid: true,
      };
    default:
      return state;
  }
};

export const AdminUploadingImageReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case USER_ADMIN_UPLOADING_IMAGE_REQUEST:
      return { ...state, loading: true };

    case USER_ADMIN_UPLOADING_IMAGE_SUCCESS:
      return { ...state, loading: false, image: action.payload };

    case USER_ADMIN_UPLOADING_IMAGE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const adminSaveUserInputProductsR = (
  state = {},
  action
) => {
  switch (action.type) {
    case USER_ADMIN_RESET_PRODUCT_ADD_INFO:
      return { ...state, userInput: {} };

    case USER_ADMIN_SAVE_SUP_PRODUCT_ADD_INFO:
      return { ...state, userInputSupProduct: action.payload };
    case USER_ADMIN_RESET_SUP_PRODUCT_ADD_INFO:
      return { ...state, userInputSupProduct: {} };

    default:
      return state;
  }
};
