import React from "react";
import { MySlider } from "./MySlider";

export const MyAppSwipe = () => {
  return (
    <div className="app-container">
      <h2>my app Swipe</h2>

      <MySlider>
        {/* <div
          className="item"
          style={{
            backgroundImage: "url(/images/getshreddedforthenewyear.jpg)",
          }}
        ></div> */}
        <img
          className="item"
          alt=""
          src="/images/getshreddedforthenewyear.jpg"
          onDragStart={false}
          //   style={{
          //     backgroundImage:
          //       "url(/images/howtobesuccessfulwithyournewyearsdiet.jpg)",
          //   }}
        ></img>
        <img
          onDragStart={false}
          className="item"
          alt=""
          src="/images/howtobesuccessfulwithyournewyearsdiet.jpg"
          //   style={{
          //     backgroundImage:
          //       "url(/images/howtobesuccessfulwithyournewyearsdiet.jpg)",
          //   }}
        ></img>
        <img
          onDragStart={false}
          className="item"
          alt=""
          src="/images/pantry_home_slider.jpg"
          //   style={{
          //     backgroundImage:
          //       "url(/images/howtobesuccessfulwithyournewyearsdiet.jpg)",
          //   }}
        ></img>
        {/* <div
          className="item"
          style={{ backgroundImage: "url(/images/pantry_home_slider.jpg)" }}
        ></div> */}
      </MySlider>
    </div>
  );
};
