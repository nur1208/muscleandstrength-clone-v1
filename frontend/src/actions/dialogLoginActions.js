import {
  DIALOG_LOGIN_CLOSE,
  DIALOG_LOGIN_OPEN,
} from "../constants/dialogLoginConstants";

export const openDialogLogin = () => (dispatch) => {
  dispatch({ type: DIALOG_LOGIN_OPEN });
};

export const closeDialogLogin = () => (dispatch) => {
  dispatch({ type: DIALOG_LOGIN_CLOSE });
};
