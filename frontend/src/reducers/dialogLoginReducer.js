import {
  DIALOG_LOGIN_CLOSE,
  DIALOG_LOGIN_OPEN,
} from "../constants/dialogLoginConstants";

export const dialogLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case DIALOG_LOGIN_OPEN:
      return { ...state, isDialogOpen: true };
    case DIALOG_LOGIN_CLOSE:
      return { ...state, isDialogOpen: false };
    default:
      return state;
  }
};
