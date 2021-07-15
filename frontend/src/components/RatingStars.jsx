import React from "react";
import {
  StarOverlay,
  RatingBox,
  Rating,
} from "../styledComponents/RatingStartSC";

export const RatingStars = ({ ratingPercentage }) => {
  return (
    <RatingBox id="RatingBox">
      <StarOverlay id="StarOverlay" svg="/images/stars-svg-overlay.svg" />
      <Rating ratingPercentage={ratingPercentage} />
    </RatingBox>
  );
};
