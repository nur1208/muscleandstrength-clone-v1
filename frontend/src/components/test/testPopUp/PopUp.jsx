import React from "react";

export const PopUp = ({ toggle }) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={handleClick}>
          &times;{" "}
        </span>
        <p>I'm A Pop Up!!!</p>
      </div>
    </div>
  );
};
