import React from "react";
// import Swiper JS

// import Swiper styles
import "swiper/swiper-bundle.css";

// const swiper = new Swiper(".swiper-container", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   //   // If we need pagination
//   //   pagination: {
//   //     el: ".swiper-pagination",
//   //   },

//   //   // Navigation arrows
//   //   navigation: {
//   //     nextEl: ".swiper-button-next",
//   //     prevEl: ".swiper-button-prev",
//   //   },

//   //   // And if we need scrollbar
//   //   scrollbar: {
//   //     el: ".swiper-scrollbar",
//   //   },
// });
export const AppSwiper = () => {
  return (
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>

        {/* <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <div class="swiper-scrollbar"></div> */}
      </div>
    </div>
  );
};
