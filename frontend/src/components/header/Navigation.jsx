import React from "react";
import { submenuValue } from "../../data/submenu";
import { Submenu } from "./Submenu";

export const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="menu-sys">
        {submenuValue.map((value, index) => {
          return <Submenu key={index} {...value} index={index} />;
        })}
      </ul>
    </div>
  );
};
