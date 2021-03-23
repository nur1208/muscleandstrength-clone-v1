import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SingInUser } from "../actions/userActions";
import { USER_FORGOT_PASSWORD } from "../constants/userConstants";
import { useAddBodyClass } from "../hooks/customAddBodyClass";
import { useGetPathName } from "../hooks/customGetPathName";

export const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useGetPathName(props.location.pathname);

  const userSingIn = useSelector((state) => state.userSingIn);
  const { error, loading, success } = userSingIn;

  const userForgetPassword = useSelector((state) => state.userForgetPassword);
  const { email: emailEntered, error: errorTimeOut } = userForgetPassword;

  useAddBodyClass("col1-wide");

  require("../styles/Login.css");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-useless-escape
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) dispatch(SingInUser(email, password));
    else {
      console.log("invalid Email");
    }
  };

  if (success) {
    props.history.push("/");
  }
  return (
    <main id="main-wrapper">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <article className="before-content"></article>
      <article className="content">
        <div className="login-wrapper">
          <div className="grid-x">
            <div className="cell bp740-8 customer-login">
              <h1 className="page-title text-center">Login to Your Account</h1>
              <form
                className="pre-validate"
                // action="https://www.muscleandstrength.com/store/customer/account/loginPost/"
                // method="post"
                id="login-form"
                onSubmit={handleSubmit}
              >
                {(error || emailEntered || errorTimeOut) && (
                  <div
                    className={`invalid-message message ${
                      error || (errorTimeOut && !emailEntered) ? "red" : "green"
                    }`}
                  >
                    {errorTimeOut ||
                      (emailEntered &&
                        `you will receive an email with a link to reset your password.`) ||
                      error}
                  </div>
                )}
                <div className="row">
                  <input
                    placeholder="Email Address"
                    name="login[username]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    className="input-text required-entry"
                    title="Email Address"
                    required
                  />
                  <input
                    placeholder="Password"
                    name="login[password]"
                    type="password"
                    className="input-text required-entry validate-password"
                    id="pass"
                    title="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="button-wrap">
                  <button
                    type="submit"
                    // onclick="$j(this).addClass('animating');mnsAuthSubmitLoginBefore(this.form);"
                    className="btn btn-blue btn-submit has-recaptcha btn-expanded"
                    name="send"
                    id="send2"
                  >
                    {/* Login{" "}
                    <span className="css-loader-block">
                      <span className="css-loader"></span>
                    </span> */}
                    {loading ? (
                      <span className="loading">
                        <span className="svg-wrap">
                          <img
                            style={{ width: ".8em", height: ".8em" }}
                            src="https://cdn.muscleandstrength.com/images/fallback/update-white.png"
                            alt=""
                          />
                        </span>{" "}
                        Loading...
                      </span>
                    ) : (
                      <span className="init">Login?</span>
                    )}
                  </button>
                </div>
                <div className="font-s-small forgot-pass">
                  <Link
                    to="/store/customer/account/forgotpassword/"
                    onClick={() => {
                      dispatch({ type: USER_FORGOT_PASSWORD });
                    }}
                  >
                    Forgot your password?
                  </Link>
                </div>
              </form>
            </div>
            <div className="cell bp740-4 new-customer-create-account">
              <h3>Don't Have an Account?</h3>
              <p className="font-s-regular">
                Create a <b>FREE</b> account and join over 500k Members who get:
              </p>
              <ul className="font-s-regular">
                <li>Free samples with all orders</li>
                <li>Early access to deals</li>
                <li>Member-only discounts</li>
                <li>
                  <a href="/store/rewards">M&amp;S Rewards</a> program
                </li>
                <li>Super-fast checkout</li>
              </ul>
              <div>
                <button
                  type="button"
                  className="btn btn-green btn-submit btn-expanded"
                  // onclick="$j(this).addClass('animating'); window.location='https://www.muscleandstrength.com/store/customer/account/create/';"
                >
                  Create an Account{" "}
                  <span className="css-loader-block">
                    <span className="css-loader"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
