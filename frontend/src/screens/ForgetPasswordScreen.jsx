import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordUser } from "../actions/userActions";
import { useAddBodyClass } from "../hooks/customAddBodyClass";
import { useGetPathName } from "../hooks/customGetPathName";

export const ForgetPasswordScreen = (props) => {
  const [email, setEmail] = useState("");
  require("../styles/Login.css");

  const dispatch = useDispatch();

  useAddBodyClass("col1-wide");

  const userForgetPassword = useSelector((state) => state.userForgetPassword);
  const { email: emailEntered, error } = userForgetPassword;

  const userSingIn = useSelector((state) => state.userSingIn);
  const { userInfo } = userSingIn;

  useEffect(() => {
    if (emailEntered || error) {
      props.history.push("/store/customer/account/login/");
    }
    if (userInfo) {
      props.history.push("/");
    }
  }, [emailEntered, error, props, userInfo]);

  useGetPathName(props.location.pathname);

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-useless-escape
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      dispatch(forgetPasswordUser(email));

      console.log(email);
    }
  };

  return (
    <main id="main-wrapper">
      <Helmet>
        <title>Forget password</title>
      </Helmet>
      <article className="before-content"></article>
      <article className="content">
        <section className="forgot-password-wrapper text-center">
          <h1 className="page-title">Forgot Your Password?</h1>
          <p>
            No problem. Enter your email below and we'll send you a temporary
            one. Need help? <a href="/contact.html">Contact us</a>.
          </p>
          <form onSubmit={handleSubmit} id="form-validate">
            <input
              placeholder="Email Address"
              type="email"
              name="email"
              alt="email"
              id="email_address"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="input-text required-entry validate-email"
              value={email}
            />
            <button type="submit" className="btn btn-blue">
              Reset Password
            </button>
          </form>
        </section>
      </article>
    </main>
  );
};
