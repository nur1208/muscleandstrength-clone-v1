import {
  SUBMENU_CLOSE,
  SUBMENU_CLOSE_ALL,
  SUBMENU_OPEN,
  SUBMENU_SUB_CLOSE,
  SUBMENU_SUB_CLOSE_ALL,
  SUBMENU_SUB_OPEN,
} from "../constants/submenuConstants";
import { isActivesValues, subIsActivesValues } from "../data/submenu";

export const submenuReducer = (
  state = { isActives: isActivesValues },
  action
) => {
  switch (action.type) {
    case SUBMENU_OPEN:
      const newIsActives = state.isActives.map((active, index) => {
        if (index === action.payload.index) return true;
        return active;
      });
      return { ...state, isActives: newIsActives };
    case SUBMENU_CLOSE:
      return {
        ...state,
        isActives: state.isActives.map((active, index) => {
          if (index === action.payload.index) return false;
          return active;
        }),
      };
    case SUBMENU_CLOSE_ALL:
      return { ...state, isActives: state.isActives.map(() => false) };
    default:
      return state;
  }
};

export const subSubmenuReducer = (
  state = { isActives: subIsActivesValues },
  action
) => {
  switch (action.type) {
    case SUBMENU_SUB_OPEN:
      const newIsActives = state.isActives.map((active, index) => {
        if (index === action.payload.index) return true;
        return active;
      });
      return { ...state, isActives: newIsActives };
    case SUBMENU_SUB_CLOSE:
      return {
        ...state,
        isActives: state.isActives.map((active, index) => {
          if (index === action.payload.index) return false;
          return active;
        }),
      };
    case SUBMENU_SUB_CLOSE_ALL:
      return { ...state, isActives: state.isActives.map(() => false) };
    default:
      return state;
  }
};
