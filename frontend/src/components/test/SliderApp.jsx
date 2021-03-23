import React, { useEffect, useState } from "react";
import data from "./Sliderdata";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { sliderData } from "../../data/SliderData";

export const SliderApp = () => {
  const [sliderItems, setsliderItems] = useState(sliderData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = sliderItems.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, sliderItems]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {sliderItems.map((sliderItem, sliderIndex) => {
          const { hrefValue, image } = sliderItem;

          let position = "nextSlide";
          if (sliderIndex === index) {
            position = "activeSlide";
          }
          if (
            sliderIndex === index - 1 ||
            (index === 0 && sliderIndex === sliderItems.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={sliderIndex}>
              <div class="nodeListWrapper">
                <a href={hrefValue} class="nodeImg ">
                  <img
                    src={image}
                    alt={image.substring(
                      image.lastIndexOf("/") + 1,
                      image.lastIndexOf(".")
                    )}
                  />
                </a>
              </div>
            </article>
            // <article className={position} key={id}>
            //   <img src={image} alt={name} className="person-img" />
            //   <h4>{name}</h4>
            //   <p className="title">{title}</p>
            //   <p className="text">{quote}</p>
            //   <FaQuoteRight className="icon" />
            // </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};
