import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  return (
    <div className="search">
      <form id="search_mini_form--desktop" className="search_mini_form">
        <input
          id="search--desktop"
          type="search"
          placeholder="Search products, brands, workouts..."
          autoComplete="off"
        />
        <button className="search-btn" type="submit">
          <AiOutlineSearch className="icon" />
        </button>
        <div
          id="search_autocomplete--desktop"
          className="search-autocomplete"
          style={{ display: "none" }}
        ></div>
      </form>
    </div>
  );
};
