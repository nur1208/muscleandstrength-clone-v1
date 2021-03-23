import React, { useRef, useState } from "react";
import { Resizable } from "react-resizable";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogLogin } from "../actions/dialogLoginActions";

import { SingInUser } from "../actions/userActions";

export const LoginDialog = () => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(325);
  const [topLimit, setTopLimit] = useState(50);
  const [leftLimit, setLeftLimit] = useState(500);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const bgcModal = useRef(null);

  const resizeHandles = ["s", "w", "e", "n", "sw", "nw", "se", "ne"];

  const userSingIn = useSelector((state) => state.userSingIn);
  const { error, loading, success } = userSingIn;

  const handleResize = (e, data) => {
    // minHeight =295, minWidth=245
    // console.log("data.size.height =", data.size.height);
    if (data.handle === "w" || data.handle === "sw") {
      if (e.clientX < leftLimit) bgcModal.current.style.left = e.clientX + "px";
    } else if (data.handle === "n" || data.handle === "ne") {
      if (e.clientY < topLimit) bgcModal.current.style.top = e.clientY + "px";
    } else if (data.handle === "nw") {
      if (e.clientX < leftLimit) bgcModal.current.style.left = e.clientX + "px";
      if (e.clientY < topLimit) bgcModal.current.style.top = e.clientY + "px";
    }
    bgcModal.current.style.width = data.size.width + "px";
    bgcModal.current.style.height = data.size.height + "px";
    setWidth(data.size.width);
    setHeight(data.size.height);
  };

  const handleCloseDialog = () => {
    dispatch(closeDialogLogin());
  };

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
    handleCloseDialog();
  }
  return (
    <div>
      <Resizable
        onResize={handleResize}
        width={width}
        height={height}
        minConstraints={[400, 325]}
        resizeHandles={resizeHandles}
      >
        <Modal
          bgcModal={bgcModal}
          setTopLimit={setTopLimit}
          setLeftLimit={setLeftLimit}
        >
          <div className="user-login">
            <h3>Login</h3>
            <form
              className="pre-validate invalid"
              // action="https://www.muscleandstrength.com/store/customer/account/loginPost/"
              onSubmit={handleSubmit}
              // id="modal-user-login"
            >
              {error && (
                <div className="invalid-message message red">{error}</div>
              )}

              <div className="form-item form-type-textfield form-item-name">
                <input
                  type="email"
                  placeholder="email"
                  name="login[username]"
                  className="input-text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-item form-type-password form-item-pass">
                <input
                  type="password"
                  placeholder="password"
                  name="login[password]"
                  className="input-text"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-actions form-wrapper">
                <button
                  type="submit"
                  className="btn btn-flat-submit form-submit aloading basic-load load-blue has-recaptcha form-button"
                  // name="send"
                  id="login-modal-submit"
                >
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
                <Link
                  rel="nofollow"
                  className="btn btn-flat-gray btn-lg form-button"
                  to="/store/customer/account/create/"
                  onClick={handleCloseDialog}
                >
                  Create Account
                </Link>
              </div>
            </form>
            <Link
              rel="nofollow"
              className="forgot-text"
              to="/store/customer/account/forgotpassword/"
              onClick={handleCloseDialog}
            >
              Forgot Password?
            </Link>
          </div>
        </Modal>
      </Resizable>
    </div>
  );
};
