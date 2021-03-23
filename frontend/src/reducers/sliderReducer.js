import { SLIDER_MOVE } from "../constants/sliderConstants";

export const sliderReducer = (state = { dx: 0 }, action) => {
  switch (action.type) {
    case SLIDER_MOVE:
      return { ...state, dx: action.payload };
    default:
      return state;
  }
};
