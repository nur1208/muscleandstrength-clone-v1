// import { useState } from "react";
// import { useSelector } from "react-redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
// import "./styles/home.css";

function App(props) {
  const dispatch = useDispatch();
  const dialogLogin = useSelector((state) => state.dialogLogin);
  const { isDialogOpen } = dialogLogin;

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const handleCloseDialog = () => {
    dispatch(closeDialogLogin());
  };

  return (
    <BrowserRouter>
      <div id="mns-page" className="mm-page">
        <div id="page">
          <Region />
          <Header />
          <NavBlock />
          <Switch>
            <Route path="/store/review" component={ReviewScreen} />
            <Route path="/test" component={StoreSectionSwiper} />
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
      <Footer />

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
    </BrowserRouter>
  );
}

export default App;
