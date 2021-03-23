import React, { useState } from "react";
import { DraggableCore } from "react-draggable";
import { useDispatch } from "react-redux";
import { closeDialogLogin } from "../actions/dialogLoginActions";

export const Modal = (props) => {
  const [top, setTop] = useState(43);
  const [left, setLeft] = useState(488.5);
  const dispatch = useDispatch();
  const nodeRef = React.useRef(null);

  const ModalStyle = {
    height: 325,
    width: 400,
    top: 43,
    backgroundColor: "#fff",
    position: "fixed",

    display: "block",
    zIndex: 101,

    left: 488.5,
    // backgroundColor: "#fff",
    // margin: "auto",
    padding: "1% 2% 1%",
  };
  const HeaderStyle = {
    height: 20,
    width: "100%",
  };
  const CloseBtnStyle = {
    float: "right",
    textAlign: "right",
    cursor: "pointer",
    display: "inline-block",
    fontSize: 24,
    width: 30,
    height: 30,
    lineHeight: "16px",
  };

  const handleDrag = (e, data) => {
    if (props.bgcModal) {
      props.bgcModal.current.style.top = top + data.deltaY + "px";
      props.bgcModal.current.style.left = left + data.deltaX + "px";
      // props.bgcModal.current.style.left = e.clientX - data.lastX + "px";
      setTop(Number(props.bgcModal.current.style.top.replace("px", "")));
      setLeft(Number(props.bgcModal.current.style.left.replace("px", "")));
      props.setTopLimit(top + 5);
      props.setLeftLimit(left + 5);
    }
  };

  const handleCloseDialog = () => {
    dispatch(closeDialogLogin());
  };
  return (
    // <div style={BackgroundStyle}>
    <DraggableCore
      handle=".ui-draggable-handle"
      // defaultPosition={{ x: -8, y: 50 }}
      onDrag={handleDrag}
      // className="ui-draggable"
      nodeRef={nodeRef}
    >
      <div
        style={ModalStyle}
        ref={props.bgcModal}
        className="login-popup ui-dialog ui-draggable"
        // eslint-disable-next-line react/jsx-no-duplicate-props
        ref={nodeRef}
      >
        <div style={HeaderStyle}>
          <div className="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle">
            <span id="ui-id-1" className="ui-dialog-title">
              &nbsp;
            </span>
            <span style={CloseBtnStyle} onClick={handleCloseDialog}>
              X
            </span>
          </div>
          {props.children}
        </div>{" "}
      </div>
    </DraggableCore>
  );
};
