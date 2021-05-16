import React from "react";
import { FaImage } from "react-icons/fa";

export const Buttons = (props) => {
  return (
    <div className="buttons fadein">
      <div className="button">
        <label htmlFor="single">
          <FaImage color="#3B5998" size="10x" />
        </label>
        <input type="file" id="single" onChange={props.onChange} />
      </div>

      <div className="button">
        <label htmlFor="multi">
          <FaImage color="#6d84b4" size="10x" />
        </label>
        <input type="file" id="multi" onChange={props.onChange} multiple />
      </div>
    </div>
  );
};
