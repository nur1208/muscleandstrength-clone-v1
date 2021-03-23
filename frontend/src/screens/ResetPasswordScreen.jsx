import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import {
  forgetPasswordTimeOut,
  isFPTokenValid,
  resetPasswordUser,
} from "../actions/userActions";
import { Aside } from "../components/Aside";
import { useAddBodyClass } from "../hooks/customAddBodyClass";
import { useGetPathName } from "../hooks/customGetPathName";

export const ResetPasswordScreen = (props) => {
  const dispatch = useDispatch();
  const userForgetPassword = useSelector((state) => state.userForgetPassword);
  const { token, isFPTokenInvalid } = userForgetPassword;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useGetPathName(props.location.pathname);

  useEffect(() => {
    dispatch(isFPTokenValid());
  }, [dispatch]);

  useAddBodyClass("two-col-left");

  useEffect(() => {
    if (isFPTokenInvalid) {
      console.log("here");

      dispatch(forgetPasswordTimeOut());
      props.history.push("/store/customer/account/login/");
    }
  }, [dispatch, isFPTokenInvalid, props.history]);

  useEffect(() => {
    if (token) {
      let timer = setInterval(() => {
        dispatch(forgetPasswordTimeOut());
        props.history.push("/store/customer/account/login/");
      }, 660000); // 660000ms = 11m
      return () => {
        clearInterval(timer);
      };
    } else {
      dispatch(forgetPasswordTimeOut());
      props.history.push("/store/customer/account/login/");
    }
  }, [dispatch, props, token]);

  require("../styles/ResetPasswordScreen.css");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) dispatch(resetPasswordUser(password));
  };

  return (
    <div id="main-wrap">
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <Aside />
      <div className="main-content">
        <div className="basic-wrap">
          <h1 className="hstyle-two">Reset Password</h1>
          <p>Please enter a new password in the form below.</p>
        </div>
        <form
          className="margBot10 margTop10"
          // action="https://www.muscleandstrength.com/store/customer/account/resetpasswordpost/"
          // method="post"
          id="form-validate"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="input-box" style={{ maxWidth: 300 }}>
              <label htmlFor="password">
                <em>*</em>New Password
              </label>
              <div className="input-box">
                <input
                  type="password"
                  className="input-text required-entry validate-password min-pass-length-7"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-box" style={{ maxWidth: 300 }}>
              <label htmlFor="confirmation">
                <em>*</em>Confirm New Password
              </label>
              <div className="input-box">
                <input
                  type="password"
                  className="input-text required-entry validate-cpassword"
                  name="confirmation"
                  id="confirmation"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="buttons-set row">
              <p className="required">* Required Fields</p>
              <button
                type="submit"
                title="Reset Password"
                className="btn-reset-password"
              >
                <span>
                  <span>Reset Password</span>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
