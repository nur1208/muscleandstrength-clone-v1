import React from "react";
import { footSignUp } from "../../data/footdata";
import { FootImage } from "./FootImage";
import { FootSignUp } from "./FootSignUp";

export const FootJoin = ({ title, headline }) => {
  return (
    <div className="foot-join">
      <div className="foot-join-container">
        <h3>{title}</h3>
        <p>{headline}</p>
        <FootSignUp {...footSignUp} />
      </div>
      <FootImage image="/images/brettandmeganfooter.png" />
      {/* <img
        src="/images/brettandmeganfooter.png"
        alt="Brett and Megan"
        className="foot-join-img lazyloaded"
      /> */}
    </div>
  );
};
