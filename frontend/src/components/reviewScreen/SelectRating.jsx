import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CustomSelect } from "../productScreen/CustomSelect";
import { RatingBox } from "./RatingBox";

export const SelectRating = ({ selectedFavors, setSelectedFavors }) => {
  require("../../styles/selectRating.css");
  // eslint-disable-next-line no-unused-vars
  const [favotIndex, setFavotIndex] = useState(0);
  const productOne = useSelector((state) => state.productOne);
  const {
    product: { buyingOption },
  } = productOne;

  const getSelectIndex = (index) => {
    setFavotIndex(index);
    if (index !== 0) {
      const newFavor = buyingOption[1].items[index];
      let isExit = false;
      selectedFavors.forEach((element) => {
        if (element.value === newFavor.value) isExit = true;
      });

      if (!isExit) {
        newFavor.rating = buyingOption[1].items[index].rating;
        setSelectedFavors([...selectedFavors, newFavor]);
      }

      // setSelectedFavors([...selectedFavors, newFavor]);
    }
  };

  const handleCloseRatingFavor = (index) => {
    const newSelectedFavors = selectedFavors.filter(
      (favor, favorIndex) => index !== favorIndex
    );

    setSelectedFavors(newSelectedFavors);
  };

  return (
    <div class="flavor-form-wrap">
      {selectedFavors.map((item, index) => (
        <div
          class="flavor-form"
          id="flavor_rating_1"
          data-flavor="Blue Raspberry"
          // style={{ display: favotIndex === 0 ? "none" : "block" }}
          key={index}
        >
          <div class="form-rating">
            <div class="rating-label">{item.title}</div>
            <button
              class="remove-rating"
              onClick={() => handleCloseRatingFavor(index)}
            >
              x
            </button>
            <RatingBox
              item={item}
              setSelectedFavors={setSelectedFavors}
              selectedFavors={selectedFavors}
            />
          </div>
        </div>
      ))}

      <CustomSelect
        items={buyingOption[1].items}
        getSelectIndex={getSelectIndex}
        stopSelected={true}
      />
    </div>
  );
};
