import React from "react";

export const FootImage = ({ image }) => {
  return (
    <img
      src={image}
      alt="Brett and Megan"
      className="foot-join-img lazyloaded"
    />
  );
};
