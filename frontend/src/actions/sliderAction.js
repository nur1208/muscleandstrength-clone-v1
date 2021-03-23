import { SLIDER_MOVE } from "../constants/sliderConstants";

export const moveSlider = (DX) => (dispatch) => {
  dispatch({ type: SLIDER_MOVE, payload: DX });
};
