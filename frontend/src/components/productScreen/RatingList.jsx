import React, { useState } from "react";
import { Rating } from "./Rating";

export const RatingList = ({ rated }) => {
  const [slist, setSlist] = useState("slist-on");

  return (
    <ul className={`rating-item-wrap ${slist} slist-3count `}>
      {rated &&
        rated.map((item, index) => (
          <li className="item " key={index}>
            <Rating
              ratingPercent={item.rating || item.percentage}
              mainStyle={"rate-stars"}
            />
            <span className="option-label">{item.name}</span>
          </li>
        ))}
      {rated && rated.length > 3 && (
        <>
          <div className="slist-more" onClick={() => setSlist("slist-off")}>
            Show More +
          </div>
          <div className="slist-less" onClick={() => setSlist("slist-on")}>
            Show Less -
          </div>
        </>
      )}
    </ul>
  );
};
