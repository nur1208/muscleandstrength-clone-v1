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
  REVIEW_DELETE_HELPFULNESS_SUCCESS,
  REVIEW_DELETE_REVIEW_FAIL,
  REVIEW_DELETE_REVIEW_REQUEST,
  REVIEW_DELETE_REVIEW_SUCCESS,
  REVIEW_GET_ALL_FAIL,
  REVIEW_GET_ALL_REQUEST,
  REVIEW_GET_ALL_SUCCESS,
  REVIEW_GET_HELPFULNESS_FAIL,
  REVIEW_GET_HELPFULNESS_SUCCESS,
  REVIEW_GET_TOTAL_REVIEWS,
  REVIEW_HELPFUL_SUCCESS,
  REVIEW_UPDATE_REVIEW_FAIL,
  REVIEW_UPDATE_REVIEW_REQUEST,
  REVIEW_UPDATE_REVIEW_SUCCESS,
} from "../constants/reveiwConstants";

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_ADD_REVIEWS_REQUEST:
      return { ...state, loading: true };
    case REVIEW_ADD_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        reviews: action.payload,
      };
    case REVIEW_ADD_REVIEWS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getAllReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_GET_ALL_REQUEST:
      return { ...state, loading: true };
    case REVIEW_GET_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        reviews: action.payload.data.reviews,
        limit: action.payload.limit,
      };
    case REVIEW_GET_ALL_FAIL:
      return { ...state, loading: false, error: action.payload };

    case REVIEW_GET_TOTAL_REVIEWS:
      return {
        ...state,
        totalReviews: action.payload.reviewsNum,
        totalVerifiedReviews: action.payload.reviewsVerifiedNum,
      };

    case REVIEW_ADD_REVIEW_SUCCESS:
      return {
        ...state,
        totalReviews: state.totalReviews + 1,
      };

    case REVIEW_DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        totalReviews: state.totalReviews - 1,
      };

    // case REVIEW_HELPFUL_SUCCESS:
    //   const updatedId = action.payload.updatedReview._id;

    //   return {
    //     ...state,
    //     reviews: state.reviews.map((review) => {
    //       if (review._id === updatedId) return action.payload.updatedReview;
    //       return review;
    //     }),
    //   };

    case REVIEW_GET_HELPFULNESS_SUCCESS:
      return {
        ...state,
        helpfulness: action.payload.data.getHelpfulness,
      };

    case REVIEW_GET_HELPFULNESS_FAIL:
      return { ...state, helpfulnessError: action.payload };

    case REVIEW_HELPFUL_SUCCESS:
      const updatedId = action.payload.updatedReview._id;

      return {
        ...state,
        helpfulness: [...state.helpfulness, action.payload.created],
        reviews: state.reviews.map((review) => {
          if (review._id === updatedId) return action.payload.updatedReview;
          return review;
        }),
      };

    case REVIEW_DELETE_HELPFULNESS_SUCCESS:
      const updateId = action.payload.data.updatedReview._id;

      return {
        ...state,
        helpfulness: state.helpfulness.filter(
          (helpful) => helpful._id !== action.payload._id
        ),
        reviews: state.reviews.map((review) => {
          if (review._id === updateId) return action.payload.data.updatedReview;
          return review;
        }),
      };

    default:
      return state;
  }
};

export const addReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_ADD_REVIEW_REQUEST:
      return { ...state, loading: true };
    case REVIEW_ADD_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        review: action.payload.createdReview,
        // totalReviews: state.totalReviews + 1,
      };
    case REVIEW_ADD_REVIEW_FAIL:
      return { ...state, loading: false, error: action.payload };
    case REVIEW_UPDATE_REVIEW_REQUEST:
      return { ...state, loading: true, success: false };
    case REVIEW_UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        review: action.payload.updatedReview,
      };
    case REVIEW_UPDATE_REVIEW_FAIL:
      return { ...state, loading: false, error: action.payload };

    case REVIEW_DELETE_REVIEW_REQUEST:
      return { ...state, loading: true, success: false };
    case REVIEW_DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        success: false,
        review: undefined,
      };
    case REVIEW_DELETE_REVIEW_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const reportAddReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_ADD_REPORT_REQUEST:
      return { ...state, loading: true };
    case REVIEW_ADD_REPORT_SUCCESS:
      return { ...state, loading: false, report: action.payload };
    case REVIEW_ADD_REPORT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
