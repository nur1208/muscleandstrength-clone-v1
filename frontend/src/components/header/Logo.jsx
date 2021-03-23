import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({ styleName }) => {
  return (
    <div className={styleName || "logo"}>
      <Link to="/" alt="Muscle &amp; Strength">
        <img src="/images/logo.png" alt="" />
      </Link>
    </div>
  );
};
