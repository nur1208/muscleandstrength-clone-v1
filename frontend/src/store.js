import thunk from "redux-thunk";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import sidebarReducer from "./reducers/sidebarReducer";
import {
  submenuReducer,
  subSubmenuReducer,
} from "./reducers/submenuReducer";
import { navBlockReducer } from "./reducers/navBlockReducer";
import { dialogLoginReducer } from "./reducers/dialogLoginReducer";
import {
  adminSaveUserInputProductsR,
  AdminUploadingImageReducer,
  emailFindReducer,
  userForgetPasswordReducer,
  userRegisterReducer,
  userSignInReducer,
} from "./reducers/userReducers";
import {
  productAddReducer,
  productGetOneReducer,
  productSearchReducer,
  productsReducer,
} from "./reducers/productsReducer";
import {
  addReviewReducer,
  getAllReviewsReducer,
  reportAddReducer,
  reviewReducer,
} from "./reducers/reviewRdeucer";

import { sliderReducer } from "./reducers/sliderReducer";
import { cartReducer } from "./reducers/cartReucers";

const initialState = {
  // userSingIn: {
  //   userInfo: localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo"))
  //     : null,
  // },
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
    totalReviews: localStorage.getItem("totalReviews")
      ? JSON.parse(localStorage.getItem("totalReviews"))
      : null,

    totalVerifiedReviews: localStorage.getItem(
      "totalVerifiedReviews"
    )
      ? JSON.parse(localStorage.getItem("totalVerifiedReviews"))
      : null,
  },
  adminSaveUserInputProducts: {
    userInput: localStorage.getItem("userInputProducts")
      ? JSON.parse(localStorage.getItem("userInputProducts"))
      : {},
  },
  productSearch: {
    products: [],
  },
};

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
  AdminUploadingImage: AdminUploadingImageReducer,
  adminSaveUserInputProducts: adminSaveUserInputProductsR,
  productSearch: productSearchReducer,
  cart: cartReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
