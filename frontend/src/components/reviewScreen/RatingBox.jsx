import React, { useEffect, useState } from "react";

export const RatingBox = ({
  setIsWriteMoreMode,
  resetRating,
  setResetRating,
  setMainRating,
  item,
  selectedFavors,
  setSelectedFavors,
}) => {
  const [ratingWidth, setRatingWidth] = useState(0);
  const [selectedRatingWidth, setSelectedRatingWidth] = useState(0);
  const [isOverOnSelect, setIsOverOnSelect] = useState(false);

  useEffect(() => {
    if (resetRating) {
      setRatingWidth(0);
      setSelectedRatingWidth(0);
      setResetRating(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetRating]);

  useEffect(() => {
    if (setMainRating) setMainRating(selectedRatingWidth);
    if (item) {
      item.rating = selectedRatingWidth;
      setSelectedFavors([...selectedFavors]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRatingWidth]);

  return (
    <div
      class="form-rating-box star-action"
      id="overall_rating_14821"
      data-product-id="14821"
    >
      <div
        class="select-wrap"
        onMouseOut={() => {
          setRatingWidth(selectedRatingWidth);
          setIsOverOnSelect(false);
        }}
        onMouseOver={() => setIsOverOnSelect(true)}
        onClick={() => setIsWriteMoreMode && setIsWriteMoreMode(true)}
      >
        <div
          class="selector"
          onMouseOver={() => setRatingWidth(20)}
          onClick={() => setSelectedRatingWidth(20)}
        ></div>
        <div
          class="selector"
          onMouseOver={() => setRatingWidth(40)}
          onClick={() => setSelectedRatingWidth(40)}
        ></div>
        <div
          class="selector"
          onMouseOver={() => setRatingWidth(60)}
          onClick={() => setSelectedRatingWidth(60)}
        ></div>
        <div
          class="selector"
          onMouseOver={() => setRatingWidth(80)}
          onClick={() => setSelectedRatingWidth(80)}
        ></div>
        <div
          class="selector"
          onMouseOver={() => setRatingWidth(100)}
          onClick={() => setSelectedRatingWidth(100)}
        ></div>
      </div>
      <div
        class="rating"
        style={{
          width: `${isOverOnSelect ? ratingWidth : selectedRatingWidth}%`,
        }}
      ></div>
      <div class="star-overlay"></div>
      <input class="rating-amount" type="hidden" value="0" />
    </div>
  );
};
