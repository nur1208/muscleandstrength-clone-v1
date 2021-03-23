import React from "react";

export const LoadingTwo = ({ isDisplay }) => {
  return (
    <div
      className="form-loading-message"
      style={{ display: isDisplay && "block" }}
    >
      <img src="/images/ajax-loader.gif" alt="ajax-loader.gif" />
    </div>
  );
};
