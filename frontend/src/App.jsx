// import { useState } from "react";
// import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { closeDialogLogin } from "./actions/dialogLoginActions";
import { closeSidebar } from "./actions/sidebarAction";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginDialog } from "./components/LoginDialog";
import { NavBlock } from "./components/NavBlock";
import { Region } from "./components/Region";
import { StoreScreen } from "./screens/StoreScreen";
import { CreateAccountScreen } from "./screens/CreateAccountScreen";
import { LogoutSuccessScreen } from "./screens/LogoutSuccessScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { ForgetPasswordScreen } from "./screens/ForgetPasswordScreen";
import { ResetPasswordScreen } from "./screens/ResetPasswordScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { ReviewScreen } from "./screens/ReviewScreen";
import { StoreSectionSwiper } from "./components/reactSwipeableTest/Swiper-StoreSection/StoreSectionSwiper";
import { SliderV2 } from "./components/SliderV2";
import { AppPop } from "./components/test/testPopUp/AppPop";
import { AppPop2 } from "./components/test/testPopUp/AppPop2";
import { MessageModal } from "./components/MessageModal";
import { FlexBox1 } from "./components/learning/FlexBox1";
import { AdminScreen } from "./screens/AdminScreen";
import { AppIU } from "./components/test/testImagesUploading/AppIU";
import { SearchScreen } from "./screens/SearchScreen";
import { AppDome } from "./components/dome/AppDome";
import { CartScreen } from "./screens/CartScreen";
// import "./styles/home.css";

function App(props) {
  const dispatch = useDispatch();
  const dialogLogin = useSelector((state) => state.dialogLogin);
  const { isDialogOpen } = dialogLogin;

  const userSingIn = useSelector((state) => state.userSingIn);
  const { success } = userSingIn;

  const [showModal, setShowModal] = useState(false);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const handleCloseDialog = () => {
    dispatch(closeDialogLogin());
  };

  useEffect(() => {
    setShowModal(isDialogOpen !== undefined && success);
  }, [isDialogOpen, success]);

  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <>
        <MessageModal
          showModal={showModal}
          setShowModal={setShowModal}
          titleColor="green"
          timeOut={10000}
          title="Logged in Successfully?"
          message="Thanks for logging with muscleAndStrength"
        />
        <div id="mns-page" className="mm-page">
          <div id="page">
            <Region />
            <Header />
            {location.pathname !== "/store/search" && <NavBlock />}
            <Switch>
              <Route path="/dome" component={AppDome} />
              <Route path="/admin" component={AdminScreen} />
              <Route path="/learn" component={FlexBox1} />
              <Route path="/test" component={AppPop2} />
              <Route path="/store/cart" component={CartScreen} />
              <Route path="/store/review" component={ReviewScreen} />
              <Route path="/store/search" component={SearchScreen} />
              <Route
                path="/store/customer/account/changeforgotten/"
                component={ResetPasswordScreen}
              />
              <Route
                path="/store/customer/account/forgotpassword/"
                component={ForgetPasswordScreen}
              />
              <Route
                path="/store/customer/account/login/"
                component={LoginScreen}
              />
              <Route
                path="/store/customer/account/logoutSuccess/"
                component={LogoutSuccessScreen}
              />
              <Route
                path="/store/customer/account/create"
                component={CreateAccountScreen}
              />
              <Route path="/store/:id" component={ProductScreen} />

              <Route path="/store" component={StoreScreen} />
              <Route path="/" component={HomeScreen} exact />
            </Switch>
          </div>
        </div>
        {/* <Footer />
         */}
      </>

      <div className="menu-mask" onClick={handleCloseSidebar}></div>
      {isDialogOpen && (
        <>
          <LoginDialog />
          <div
            className="ui-widget-overlay ui-front"
            style={{ zIndex: 100 }}
            onClick={handleCloseDialog}
          ></div>
        </>
      )}
    </>
  );
}

export default App;
