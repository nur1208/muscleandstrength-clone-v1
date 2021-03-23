import React from "react";

export const FooterLine = ({ links, message }) => {
  return (
    <div className="foot-line">
      <div className="link-line">
        {links.map((link, index) => {
          return (
            <a
              key={index}
              rel={link.relValue}
              href={link.hrefValue}
              target={`${link.targetValue || "_self"}`}
              className={`${link.classValue || ""}`}
              title={`${link.hasTitle ? link.text : ""}`}
            >
              {link.text}
            </a>
          );
        })}
      </div>
      {message}
      {/* © Copyright 2005-2020, Muscle &amp; Strength LLC. Images copyright of
      their respective owners. */}
      <div className="foot-line-background"></div>
    </div>
  );
};
