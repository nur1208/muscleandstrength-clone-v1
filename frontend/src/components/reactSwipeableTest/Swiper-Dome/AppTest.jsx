import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Thumbs]);

export const AppTest = () => {
  require("../Swiper-Dome/style.css");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [];

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`http://picsum.photos/id/${i + 1}/500/400`}
          style={{ listStyle: "none" }}
          alt={`slide ${i + 1}`}
        ></img>
      </SwiperSlide>
    );
  }

  const thumbs = [];

  for (let i = 0; i < 5; i++) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: "none" }}>
        <img
          src={`http://picsum.photos/id/${i + 1}/163/100`}
          alt={`thumb ${i + 1}`}
        ></img>
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        // onInit={(swiper) => console.log("swiper initialized", swiper)}
        // onSlideChange={(swiper) =>
        //   console.log("Slide Index changed to:", swiper.activeIndex)
        // }
        // onReachEnd={() => {
        //   console.log("Swiper reach end");
        // }}
      >
        {slides}
      </Swiper>

      <Swiper
        id="thumbs"
        onSwiper={(swiper) => setThumbsSwiper(swiper.clickedIndex)}
        spaceBetween={5}
        slidesPerView={3}
      >
        {thumbs}
      </Swiper>
    </>
  );
};
