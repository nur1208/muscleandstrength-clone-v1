import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "react-responsive";

SwiperCore.use([Pagination, Autoplay]);

export const SliderV2 = ({ slidersData, hasPhoneImage }) => {
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

  const isPhone = useMediaQuery({ maxWidth: 749 });

  return (
    <Swiper
      id="main"
      tag="section"
      className="home-carousel"
      wrapperTag="ul"
      pagination={{ clickable: true }}
      loop={true}
      speed={800}
      autoplay={{
        delay: 8000,
      }}
    >
      {slidersData.map((slider, index) => {
        const { hrefValue, image, imagePhone } = slider;

        return (
          <SwiperSlide key={`slide-${index}`} tag="li">
            {/* <img
          src={`https://cdn.muscleandstrength.com/sites/default/files/field/slide-image/losingfatandcuttingwithoutlosingmuscle.jpeg`}
          style={{ listStyle: "none" }}
          alt={`slide ${i + 1}`}
        ></img> */}
            <div class="nodeListWrapper">
              <a href={hrefValue} class="nodeImg ">
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
          </SwiperSlide>
        );
      })}

      {/* {slides} */}
    </Swiper>
  );
};
