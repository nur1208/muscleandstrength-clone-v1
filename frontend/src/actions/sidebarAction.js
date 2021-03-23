import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../constants/sidebarConstants";
import {
  SUBMENU_CLOSE_ALL,
  SUBMENU_SUB_CLOSE_ALL,
} from "../constants/submenuConstants";

export const openSidebar = () => (dispatch) => {
  dispatch({ type: SIDEBAR_OPEN });
};

export const closeSidebar = () => (dispatch) => {
  dispatch({ type: SIDEBAR_CLOSE });
  dispatch({ type: SUBMENU_CLOSE_ALL });
  dispatch({ type: SUBMENU_SUB_CLOSE_ALL });
};
