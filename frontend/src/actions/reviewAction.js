import axios from "../../node_modules/axios/index";

import {
  REVIEW_ADD_REPORT_FAIL,
  REVIEW_ADD_REPORT_REQUEST,
  REVIEW_ADD_REPORT_SUCCESS,
  REVIEW_ADD_REVIEWS_FAIL,
  REVIEW_ADD_REVIEWS_REQUEST,
  REVIEW_ADD_REVIEWS_SUCCESS,
  REVIEW_ADD_REVIEW_FAIL,
  REVIEW_ADD_REVIEW_REQUEST,
  REVIEW_ADD_REVIEW_SUCCESS,
  REVIEW_DELETE_REVIEW_FAIL,
  REVIEW_DELETE_REVIEW_REQUEST,
  REVIEW_DELETE_REVIEW_SUCCESS,
  REVIEW_GET_ALL_FAIL,
  REVIEW_GET_ALL_REQUEST,
  REVIEW_GET_ALL_SUCCESS,
  REVIEW_UPDATE_REVIEW_FAIL,
  REVIEW_UPDATE_REVIEW_REQUEST,
  REVIEW_UPDATE_REVIEW_SUCCESS,
} from "../constants/reveiwConstants";

export const addReviews = (reviews) => async (dispatch) => {
  dispatch({ type: REVIEW_ADD_REVIEWS_REQUEST });
  try {
    const { data } = await axios.post("/api/review/seed", { reviews });

    dispatch({ type: REVIEW_ADD_REVIEWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REVIEW_ADD_REVIEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllReviews = (productId, limit) => async (dispatch) => {
  dispatch({ type: REVIEW_GET_ALL_REQUEST });
  try {
    const { data } = await axios.get(
      `/api/review/getAll/${productId}/${limit}`
    );
    localStorage.setItem("reviews", JSON.stringify(data.reviews));
    dispatch({ type: REVIEW_GET_ALL_SUCCESS, payload: { data, limit } });
  } catch (error) {
    dispatch({
      type: REVIEW_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addReview = (review) => async (dispatch) => {
  dispatch({ type: REVIEW_ADD_REVIEW_REQUEST });
  try {
    const { data } = await axios.post("/api/review/add", { review });

    dispatch({ type: REVIEW_ADD_REVIEW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REVIEW_ADD_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateReview = (review) => async (dispatch) => {
  dispatch({ type: REVIEW_UPDATE_REVIEW_REQUEST });
  try {
    const { data } = await axios.put("/api/review/update", { review });

    dispatch({ type: REVIEW_UPDATE_REVIEW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REVIEW_UPDATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteReview = (_id, userId) => async (dispatch) => {
  dispatch({ type: REVIEW_DELETE_REVIEW_REQUEST });
  try {
    const { data } = await axios.delete("/api/review/delete", {
      data: { _id, userId },
    });

    dispatch({ type: REVIEW_DELETE_REVIEW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REVIEW_DELETE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addReport = (report) => async (dispatch) => {
  dispatch({ type: REVIEW_ADD_REPORT_REQUEST });
  try {
    const { data } = await axios.post("/api/review/report", { report });

    dispatch({ type: REVIEW_ADD_REPORT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REVIEW_ADD_REPORT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
