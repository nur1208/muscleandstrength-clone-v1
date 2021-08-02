import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getNumOfProducts, searchProducts } from "../../actions/productsAction";
// import { push } from "react-router-dom";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch(null);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProducts(searchInput));
    dispatch(getNumOfProducts(searchInput));
    setSearchInput("");
    history.push("/store/search");
  };

  return (
    <div className="search">
      <form
        id="search_mini_form--desktop"
        className="search_mini_form"
        onSubmit={handleSubmit}
      >
        <input
          id="search--desktop"
          // type="search"
          type="text"
          placeholder="Search products, brands, workouts..."
          autoComplete="off"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
