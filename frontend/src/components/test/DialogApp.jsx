import React, { useRef, useState } from "react";
import { Modal } from "../Modal";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";
import Draggable from "react-draggable";
export const DialogApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(325);
  const [topLimit, setTopLimit] = useState(50);
  const [leftLimit, setLeftLimit] = useState(500);

  const bgcModal = useRef(null);

  const resizeHandles = ["s", "w", "e", "n", "sw", "nw", "se", "ne"];

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const defaultStyle = {
    position: "fixed",
    top: 43,
    height: "auto",
    width: 400,
    left: 488.5,
    display: "block",
    zIndex: 101,
  };

  const handleResizable = (e) => {
    console.log(e.clientX);
  };

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

  return (
    <div
    // onClick={() => {
    //   if (isOpen) {
    //     toggleModal();
    //   }
    // }}
    >
      <button onClick={toggleModal}>Open modal dialog</button>

      <Resizable
        onResize={handleResize}
        width={width}
        height={height}
        minConstraints={[400, 325]}
        resizeHandles={resizeHandles}
      >
        <Modal
          isOpen={isOpen}
          onClose={toggleModal}
          bgcModal={bgcModal}
          setTopLimit={setTopLimit}
          setLeftLimit={setLeftLimit}
        >
          <div className="user-login">
            <h3>Login</h3>
            <form
              className="pre-validate invalid"
              action="https://www.muscleandstrength.com/store/customer/account/loginPost/"
              method="post"
              id="modal-user-login"
            >
              <div className="invalid-message message red">
                Please include a valid email
              </div>
              <div className="form-item form-type-textfield form-item-name">
                <input
                  type="email"
                  placeholder="email"
                  name="login[username]"
                  className="input-text"
                  required
                />
              </div>
              <div className="form-item form-type-password form-item-pass">
                <input
                  type="password"
                  placeholder="password"
                  name="login[password]"
                  className="input-text"
                />
              </div>
              <div className="form-actions form-wrapper">
                <button
                  type="submit"
                  className="btn btn-flat-submit form-submit aloading basic-load load-blue has-recaptcha form-button"
                  name="send"
                  id="login-modal-submit"
                >
                  <span class="init">Login?</span>
                  {/* <span class="loading">
                <span class="svg-wrap">
                  <img
                    style={{ width: ".8em", height: ".8em" }}
                    src="https://cdn.muscleandstrength.com/images/fallback/update-white.png"
                    alt=""
                  />
                </span>{" "}
                Loading...
              </span> */}
                </button>
                <a
                  rel="nofollow"
                  className="btn btn-flat-gray btn-lg form-button"
                  href="https://www.muscleandstrength.com/store/customer/account/create/"
                >
                  Create Account
                </a>
              </div>
            </form>
            <a
              rel="nofollow"
              className="forgot-text"
              href="https://www.muscleandstrength.com/store/customer/account/forgotpassword/"
            >
              Forgot Password?
            </a>
          </div>
          {/* <div
            className="ui-resizable-handle ui-resizable-n"
            style={{ zIndex: 90 }}
            onMouseDown={handleResizable}
          ></div>
          <div
            className="ui-resizable-handle ui-resizable-e"
            style={{ zIndex: 90 }}
          ></div>
          <div
            className="ui-resizable-handle ui-resizable-s"
            style={{ zIndex: 90 }}
          ></div>
          <div
            className="ui-resizable-handle ui-resizable-w"
            style={{ zIndex: 90 }}
          ></div>
          <div
            className="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"
            style={{ zIndex: 90 }}
          ></div>
          <div
            className="ui-resizable-handle ui-resizable-sw"
            style={{ zIndex: 90 }}
          ></div>
          <div
            className="ui-resizable-handle ui-resizable-ne"
            style={{ zIndex: 90 }}
          ></div>
          <div
            className="ui-resizable-handle ui-resizable-nw"
            style={{ zIndex: 90 }}
          ></div> */}
        </Modal>
      </Resizable>
    </div>
  );
};
