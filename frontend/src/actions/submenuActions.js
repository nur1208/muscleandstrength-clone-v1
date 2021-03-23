import {
  SUBMENU_CLOSE,
  SUBMENU_CLOSE_ALL,
  SUBMENU_OPEN,
  SUBMENU_SUB_CLOSE,
  SUBMENU_SUB_CLOSE_ALL,
  SUBMENU_SUB_OPEN,
} from "../constants/submenuConstants";

export const openSubmenu = (index) => (dispatch) => {
  dispatch({ type: SUBMENU_OPEN, payload: { index } });
};

export const closeSubmenu = (index) => (dispatch) => {
  dispatch({ type: SUBMENU_CLOSE, payload: { index } });
};

export const closeAllSubmenu = () => (dispatch) => {
  dispatch({ type: SUBMENU_CLOSE_ALL });
};

export const openSubSubmenu = (index) => (dispatch) => {
  dispatch({ type: SUBMENU_SUB_OPEN, payload: { index } });
};
export const closeSubSubmenu = (index) => (dispatch) => {
  dispatch({ type: SUBMENU_SUB_CLOSE, payload: { index } });
};
export const closeAllSubSubmenu = () => (dispatch) => {
  dispatch({ type: SUBMENU_SUB_CLOSE_ALL });
};
