import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Slider = ({
  sliderData,
  sliderStyle,
  dotsStyle,
  sectionCenterStyle,
  hasPhoneImage,
}) => {
  const [sliderItems] = useState(sliderData);
  const [index, setIndex] = useState(0);
  const [isSelectedSlider, setIsSelectedSlider] =
    useState(false);

  const handleSelectedSlider = (index) => {
    setIndex(index);
    setIsSelectedSlider(true);
  };

  useEffect(() => {
    const lastIndex = sliderItems.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, sliderItems]);

  useEffect(() => {
    if (!isSelectedSlider) {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 7000);
      return () => {
        clearInterval(slider);
      };
    } else {
      let slider = setInterval(() => {
        setIsSelectedSlider(false);
      }, 50000);
      return () => {
        clearInterval(slider);
      };
    }
  }, [index, isSelectedSlider]);

  const isPhone = useMediaQuery({ maxWidth: 749 });

  return (
    <div className={sliderStyle}>
      <div className="slick-slider">
        <div
          className={sectionCenterStyle || "section-center"}
        >
          {sliderItems.map((sliderItem, sliderIndex) => {
            const { hrefValue, image, imagePhone } =
              sliderItem;

            let position = "nextSlide";
            if (sliderIndex === index) {
              position = "activeSlide";
            }
            if (
              sliderIndex === index - 1 ||
              (index === 0 &&
                sliderIndex === sliderItems.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article
                className={position}
                key={sliderIndex}
              >
                <div className="nodeListWrapper">
                  <a href={hrefValue} className="nodeImg ">
                    {isPhone && hasPhoneImage ? (
                      <img
                        src={imagePhone}
                        alt={imagePhone.substring(
                          imagePhone.lastIndexOf("/") + 1,
                          imagePhone.lastIndexOf(".")
                        )}
                      />
                    ) : (
                      <img
                        src={image}
                        alt={image.substring(
                          image.lastIndexOf("/") + 1,
                          image.lastIndexOf(".")
                        )}
                      />
                    )}
                  </a>
                </div>
              </article>
            );
          })}
          {/* <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
        className="slick-active"
    </button> */}
        </div>
        <ul className={`${dotsStyle || "slick-dots"}`}>
          {sliderItems.map((_, activeIndex) => {
            let isSlickActive = "";
            if (activeIndex === index) {
              isSlickActive = "slick-active";
            }
            return (
              <li
                className={isSlickActive}
                key={activeIndex}
              >
                <button
                  onClick={() =>
                    handleSelectedSlider(activeIndex)
                  }
                ></button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
