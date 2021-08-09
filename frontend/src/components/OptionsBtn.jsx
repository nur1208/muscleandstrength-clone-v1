import React from "react";
import {
  Inner,
  InnerWrap,
  Option,
  OptionToggle,
  OptionWrap,
} from "../styledComponents/searchScreen/contentFiltersSC";

export const OptionsBtn = () => {
  const options = [
    {
      link: "https://www.muscleandstrength.com/store/search?___store=eu&amp;dir=asc&amp;order=sales_ranking&amp;q=The+Ripper",
      title: "Top Sellers",
      isActive: true,
    },
    {
      link: "https://www.muscleandstrength.com/store/search?___store=eu&amp;dir=asc&amp;order=price&amp;q=The+Ripper",
      title: "Price",
    },
    {
      link: "https://www.muscleandstrength.com/store/search?___store=eu&amp;dir=asc&amp;order=name&amp;q=The+Ripper",
      title: "Name",
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      <OptionWrap id="OptionWrap">
        {options.map((option, index) => (
          <Option id="Option" key={index} isActive={option.isActive}>
            <a href={option.link}>{option.title}</a>
          </Option>
        ))}
      </OptionWrap>
      <OptionToggle id="OptionToggle">
        <Inner>
          <a href="https://www.muscleandstrength.com/store/search?___store=eu&amp;dir=desc&amp;order=position&amp;q=The+Ripper">
            {" "}
            ASC{" "}
            <svg
              id="icon-asc"
              viewBox="0 0 100 100"
              style={{
                width: 18,
                height: 18,
                marginLeft: 5,
                marginBottom: -5,
              }}
            >
              <path
                fill="none"
                stroke="#059"
                stroke-width="11"
                stroke-miterlimit="10"
                d="M7.9 83.4h84.2M7.9 36.1H51M7.9 12.4h21M7.9 59.8h63.2"
              ></path>
            </svg>
          </a>
        </Inner>
      </OptionToggle>
    </div>
  );
};
