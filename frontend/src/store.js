import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import sidebarReducer from "./reducers/sidebarReducer";
import { submenuReducer, subSubmenuReducer } from "./reducers/submenuReducer";
import { navBlockReducer } from "./reducers/navBlockReducer";
import { dialogLoginReducer } from "./reducers/dialogLoginReducer";
import {
  emailFindReducer,
  userForgetPasswordReducer,
  userRegisterReducer,
  userSignInReducer,
} from "./reducers/userReducers";
import {
  productAddReducer,
  productGetOneReducer,
  productsReducer,
} from "./reducers/productsReducer";
import {
  addReviewReducer,
  getAllReviewsReducer,
  reportAddReducer,
  reviewReducer,
} from "./reducers/reviewRdeucer";

import { sliderReducer } from "./reducers/sliderReducer";

const initialState = {
  userSingIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  userForgetPassword: {
    token: localStorage.getItem("fPToken")
      ? JSON.parse(localStorage.getItem("fPToken"))
      : "",
    email: localStorage.getItem("fPEmail")
      ? JSON.parse(localStorage.getItem("fPEmail"))
      : "",
  },
  products: { loading: true },
  productOne: {
    product: localStorage.getItem("product")
      ? JSON.parse(localStorage.getItem("product"))
      : {},
    loading: true,
  },
  getAllReviews: {
    reviews: localStorage.getItem("reviews")
      ? JSON.parse(localStorage.getItem("reviews"))
      : [],
  },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  sidebar: sidebarReducer,
  submenu: submenuReducer,
  subSubmenu: subSubmenuReducer,
  navBlock: navBlockReducer,
  dialogLogin: dialogLoginReducer,
  userRegister: userRegisterReducer,
  emailFind: emailFindReducer,
  userSingIn: userSignInReducer,
  userForgetPassword: userForgetPasswordReducer,
  products: productsReducer,
  productOne: productGetOneReducer,
  productAdd: productAddReducer,
  review: reviewReducer,
  getAllReviews: getAllReviewsReducer,
  reviewAdd: addReviewReducer,
  slider: sliderReducer,
  reportAdd: reportAddReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
