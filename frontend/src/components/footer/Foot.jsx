import React from "react";

export const Foot = ({ mainStyle, title, uStyle, footItems, subFoot }) => {
  return (
    <div className={`${mainStyle || "foot-support"}`}>
      <h3>{title}</h3>
      <ul className={`${uStyle || ""}`}>
        {footItems.map((item, index) => {
          return (
            <li key={index}>
              <a rel={item.relValue} href={item.hrefValue}>
                {item.text || ""}
                {item.icon || ""}
              </a>
            </li>
          );
        })}
        {subFoot && (
          <div className={`${subFoot.mainStyle || "foot-connect"}`}>
            <h3>{subFoot.title}</h3>
            <ul className={`${subFoot.uStyle || "follow"}`}>
              {subFoot.footItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a rel={item.relValue} href={item.hrefValue}>
                      {item.text}
                      {item.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </ul>
    </div>
  );
};
