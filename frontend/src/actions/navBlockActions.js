import { NAV_BLOCK_GET_PATH_NAME } from "../constants/navBlockConstants";

export const getPathName = (pathName) => (dispatch) => {
  dispatch({ type: NAV_BLOCK_GET_PATH_NAME, payload: pathName });
};
