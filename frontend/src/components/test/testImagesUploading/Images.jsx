import React from "react";
import { FaTimesCircle } from "react-icons/fa";

export const Images = (props) => {
  return (
    <div>
      {props.images.map((image, i) => (
        <div key={i} className="fadein">
          <div
            onClick={() => props.removeImage(image.public_id)}
            className="delete"
          >
            <FaTimesCircle size="2x" />
          </div>
          <img src={image.secure_url} alt="" />
        </div>
      ))}
    </div>
  );
};
