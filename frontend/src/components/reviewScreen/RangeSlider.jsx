import React, { useRef, useState } from "react";

export const RangeSlider = () => {
  require("../../styles/rangeSlider.css");
  const [sliderValue, setSliderValue] = useState(0);
  const slider = useRef(null);
  const [leftValue, setLeftValue] = useState(-3.5);

  const handleInput = (e) => {
    // all = -3.5% , 1 = 14.5%, 2 = 30.5%, 3 = 48.5, 4 = 62.5%, 5 = 79.5%
    setSliderValue(Number(e.target.value));
    if (Number(e.target.value) === 0) setLeftValue(-3.5);
    else if (Number(e.target.value) === 1) setLeftValue(14.5);
    else if (Number(e.target.value) === 2) setLeftValue(30.5);
    else if (Number(e.target.value) === 3) setLeftValue(48.5);
    else if (Number(e.target.value) === 4) setLeftValue(62.5);
    else if (Number(e.target.value) === 5) setLeftValue(79.5);

    // slider.current.style.left = value + "%";
    slider.current.classList.add("show");
  };
  return (
    <div className="range">
      <div className="sliderValue show">
        <span ref={slider} style={{ left: leftValue + "%" }}>
          {sliderValue === 0 ? "All" : sliderValue}{" "}
          {sliderValue === 1 ? " start" : " starts"}
        </span>
      </div>
      <div className="field">
        <div className="value left">All</div>
        <input
          type="range"
          min="0"
          max="5"
          value={sliderValue}
          steps="1"
          onChange={handleInput}
          // onInput={handleInput}
          onBlur={() => slider.current.classList.remove("show")}
        />
        <div className="value right">5</div>
      </div>
    </div>
  );
};
