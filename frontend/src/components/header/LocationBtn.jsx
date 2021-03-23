import React from "react";

export const LocationBtn = ({ styleName }) => {
  return (
    <div className={styleName || "mobile-location-btn"}>
      <div className="flag-container">
        <div className="flag flag-nl"></div>
      </div>
      {/* flag-nl and the text in span.text are dynamic */}
      <span className="text">EUR</span>
    </div>
  );
};
