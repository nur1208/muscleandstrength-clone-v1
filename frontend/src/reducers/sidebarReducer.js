import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../constants/sidebarConstants";

const sidebarReducer = (state = {}, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      document.body.classList.add("menu-open");
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      document.body.classList.remove("menu-open");
      return { ...state, isSidebarOpen: false };
    default:
      return state;
  }
};

export default sidebarReducer;
