import { NAV_BLOCK_GET_PATH_NAME } from "../constants/navBlockConstants";

export const navBlockReducer = (state = { pathName: "/" }, action) => {
  switch (action.type) {
    case NAV_BLOCK_GET_PATH_NAME:
      return { ...state, pathName: action.payload };
    default:
      return state;
  }
};
