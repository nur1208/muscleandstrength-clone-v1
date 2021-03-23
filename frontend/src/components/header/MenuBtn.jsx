import React from "react";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../actions/sidebarAction";

export const MenuBtn = () => {
  const dispatch = useDispatch();
  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };
  return (
    <div className="menu-btn">
      <div className="hamburger" onClick={handleOpenSidebar}>
        <span className="ingrediant"></span>
        <span className="ingrediant"></span>
        <span className="ingrediant"></span>
        <div className="text">Menu</div>
      </div>
    </div>
  );
};
