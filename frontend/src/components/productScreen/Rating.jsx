import React from "react";

export const Rating = ({ rating, mainStyle, label, ratingPercent }) => {
  return (
    <div className={mainStyle || "product-rating-wrap"}>
      {" "}
      <div className="rating-box">
        <div className="star-overlay"></div>{" "}
        <div
          className="rating"
          style={{ width: rating || ratingPercent + "%" }}
        ></div>
      </div>
      {label && <span className="overall-rating-label">{label}</span>}
    </div>
  );
};
