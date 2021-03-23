import React from "react";

export const MobileSearch = () => {
  return (
    <div className="mobile-search">
      <form id="search_mini_form--mobile" className="search_mini_form">
        <div className="search-form-wrapper">
          <input
            id="search--mobile"
            type="search"
            placeholder="Search products, brands, workouts..."
            autoComplete="off"
          />
          <span className="search-input-cleaner">
            <img src="images/close-x.png" alt="close-x.png" className="icon" />
          </span>
          <button className="search-button" type="submit">
            <img
              src="images/search-right_bold.png"
              alt="search-right_bold.png"
              className="icon"
            />
          </button>
          <div
            id="search_autocomplete--mobile"
            className="search-autoComplete"
            style={{ display: "none" }}
          ></div>
        </div>
      </form>
    </div>
  );
};
