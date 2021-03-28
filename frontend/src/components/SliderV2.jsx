import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination]);

export const SliderV2 = () => {
  require("../styles/sliderV2.css");

  const slides = [];

  for (let i = 0; i < 3; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        {/* <img
          src={`https://cdn.muscleandstrength.com/sites/default/files/field/slide-image/losingfatandcuttingwithoutlosingmuscle.jpeg`}
          style={{ listStyle: "none" }}
          alt={`slide ${i + 1}`}
        ></img> */}
        <div class="nodeListWrapper">
          <a
            href="/workouts/dumbbell-only-home-or-gym-fullbody-workout.html "
            class="nodeImg "
          >
            <img
              data-src="https://cdn.muscleandstrength.com/sites/default/files/field/slide-image/massattack_fullbodymassbuilder.jpeg"
              class=" ls-is-cached lazyloaded"
              width="800"
              height="500"
              alt=""
              src="https://cdn.muscleandstrength.com/sites/default/files/field/slide-image/massattack_fullbodymassbuilder.jpeg"
            />{" "}
          </a>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      id="main"
      tag="section"
      className="home-carousel"
      wrapperTag="ul"
      pagination
      //   spaceBetween={0}
      //   slidesPerView={1}
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
  );
};
