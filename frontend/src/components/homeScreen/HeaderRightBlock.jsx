import React from "react";
import { followData } from "../../data/headerRightBlockData";

export const HeaderRightBlock = () => {
  return (
    <div className="header-right-block">
      <p>
        <a href="/workout-routines">
          <img
            alt="Free Workouts"
            src="https://cdn.muscleandstrength.com/sites/default/files/images/findafreeworkout.jpg"
          />
        </a>
      </p>
      <div className="social">
        <ul className="follow">
          {followData.map((item, index) => {
            return (
              <li key={index}>
                <a rel={item.relV} href={item.hrefV}>
                  <img
                    src={item.image}
                    alt={item.image.substring(
                      item.image.lastIndexOf("/") + 1,
                      item.image.lastIndexOf(".")
                    )}
                    className="icon"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <span>Join over 1.4 Million M&amp;S fans!</span>
    </div>
  );
};
