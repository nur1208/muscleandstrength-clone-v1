import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LoadingTwo } from "./LoadingTwo";
import { RangeSlider } from "./reviewScreen/RangeSlider";

export const Filter = () => {
  const [sortGroup, setSortGroup] = useState(["", "checked"]);
  const [filter, setFilter] = useState(["checked", ""]);
  const reviewAdd = useSelector((state) => state.reviewAdd);
  const { loading } = reviewAdd;

  const handleSortGroup = (index) => {
    const newSortGroup = sortGroup.map((_, i) => {
      if (index === i) return "checked";
      return "";
    });

    setSortGroup(newSortGroup);
  };

  const handleFilterGroup = (index) => {
    const newSortGroup = sortGroup.map((_, i) => {
      if (index === i) return "checked";
      return "";
    });

    setFilter(newSortGroup);
  };

  const handleInput = () => {
    console.log("here");
  };
  return (
    <div className="refine-search-wrap" id="toolbar-target">
      <div className="mobile-header">
        <button className="button btn btn-blue">Sort &amp; Filter</button>
        <label className="heading"></label>
      </div>
      <div className="review-sorting-filtering" data-product-id="14821">
        <div className="inner-wrap">
          <div className="sort-by section">
            <div className="wrap">
              <ul className="simple-radio list-style review-sorting">
                <li className={sortGroup[0]} onClick={() => handleSortGroup(0)}>
                  <input type="radio" name="sort-group" value="recent" />
                  <div className="radio-check">
                    <span className="yes">
                      <span className="icon-check"></span>
                    </span>
                  </div>
                  Most Recent
                </li>
                <li className={sortGroup[1]} onClick={() => handleSortGroup(1)}>
                  <input
                    type="radio"
                    name="sort-group"
                    value="helpful"
                    defaultChecked="checked"
                  />
                  <div className="radio-check">
                    <span className="yes">
                      <span className="icon-check"></span>
                    </span>
                  </div>
                  Most Helpful
                </li>
              </ul>
            </div>
          </div>
          <div className="filter-by section">
            <div className="wrap">
              <ul className="simple-radio list-style review-filtering-1">
                <li className={filter[0]} onClick={() => handleFilterGroup(0)}>
                  <input
                    type="radio"
                    name="filter-group"
                    value="all"
                    defaultChecked="checked"
                  />
                  <div className="radio-check">
                    <span className="yes">
                      <span className="icon-check"></span>
                    </span>
                  </div>
                  All Reviews (748)
                </li>
                <li className={filter[1]} onClick={() => handleFilterGroup(1)}>
                  <input type="radio" name="filter-group" value="verified" />
                  <div className="radio-check">
                    <span className="yes">
                      <span className="icon-check"></span>
                    </span>
                  </div>
                  Verified Buyers (738)
                </li>
              </ul>
            </div>
          </div>
          <div className="star-filter section">
            <div className="wrap">
              <RangeSlider />
              {/* <span className="irs js-irs-0  irs-with-grid">
                <span className="irs">
                  <span className="irs-line" tabindex="0">
                    <span className="irs-line-left"></span>
                    <span className="irs-line-mid"></span>
                    <span className="irs-line-right"></span>
                  </span>
                  <span className="irs-min" style={{ visibility: "hidden" }}>
                    all Stars
                  </span>
                  <span className="irs-max" style={{ visibility: "visible" }}>
                    5 Stars
                  </span>
                  <span className="irs-from" style={{ visibility: "hidden" }}>
                    0
                  </span>
                  <span className="irs-to" style={{ visibility: "hidden" }}>
                    0
                  </span>
                  <span className="irs-single" style={{ left: "0%" }}>
                    all Stars
                  </span>
                </span>
                <span
                  className="irs-grid"
                  style={{ width: "87.7301%", left: "6.03497%" }}
                >
                  <span className="irs-grid-pol" style={{ left: "0%" }}></span>
                  <span
                    className="irs-grid-text js-grid-text-0"
                    style={{ left: "0%", marginLeft: "-2.30061%" }}
                  >
                    all
                  </span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "15%" }}
                  ></span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "10%" }}
                  ></span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "5%" }}
                  ></span>
                  <span
                    className="irs-grid-pol"
                    style={{ left: "20%" }}
                    onMouseOver={(e) => {
                      mDownOnSlider && handleBar(e);
                    }}
                  ></span>
                  <span
                    className="irs-grid-text js-grid-text-1"
                    style={{
                      left: "20%",
                      visibility: "visible",
                      marginLeft: "-1.68712%",
                    }}
                  >
                    1
                  </span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "35%" }}
                  ></span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "30%" }}
                  ></span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "25%" }}
                  ></span>
                  <span className="irs-grid-pol" style={{ left: "40%" }}></span>
                  <span
                    className="irs-grid-text js-grid-text-2"
                    style={{
                      left: "40%",
                      visibility: "visible",
                      marginLeft: "-1.68712%",
                    }}
                  >
                    2
                  </span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "55%" }}
                  ></span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "50%" }}
                  ></span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "45%" }}
                  ></span>
                  <span className="irs-grid-pol" style={{ left: "60%" }}></span>
                  <span
                    className="irs-grid-text js-grid-text-3"
                    style={{
                      left: "60%",
                      visibility: "visible",
                      marginLeft: "-1.68712%",
                    }}
                  >
                    3
                  </span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "75%" }}
                  ></span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "70%" }}
                  ></span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "65%" }}
                  ></span>
                  <span className="irs-grid-pol" style={{ left: "80%" }}></span>
                  <span
                    className="irs-grid-text js-grid-text-4"
                    style={{ left: "80%", marginLeft: "-1.68712%" }}
                  >
                    4
                  </span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "95%" }}
                  ></span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "90%" }}
                  ></span>
                  <span
                    className="irs-grid-pol small"
                    style={{ left: "85%" }}
                  ></span>
                  <span className="irs-grid-pol" style={{ left: "100%" }}></span>
                  <span
                    className="irs-grid-text js-grid-text-5"
                    style={{
                      left: "100%",
                      visibility: "visible",
                      marginLeft: "-1.68712%",
                    }}
                  >
                    5
                  </span>
                </span>
                <span
                  className="irs-bar"
                  style={{ left: "6.13497%", width: "0%" }}
                ></span>
                <span className="irs-bar-edge"></span>
                <span
                  className="irs-shadow shadow-single"
                  style={{ display: "none" }}
                ></span>
                <span
                  className="irs-slider single"
                  style={{ left: "0%" }}
                  onMouseDown={(e) => {
                    setMDownOnSlider(true);
                  }}
                  onMouseUp={(e) => {
                    setMDownOnSlider(false);
                  }}
                ></span>
              </span> */}
              <input
                type="text"
                id="star-slider"
                name="star-slider"
                value=""
                className="irs-hidden-input"
                tabIndex="-1"
                readOnly=""
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        {loading && <LoadingTwo isDisplay={true} />}
      </div>
    </div>
  );
};
