import React from "react";
import { useSelector } from "react-redux";

export const ProductInfo = () => {
  const productOne = useSelector((state) => state.productOne);
  const { product, loading } = productOne;
  const { extraInfo } = product;

  return (
    <div className="product-information-section">
      <div className="section-title">Product Information</div>
      <div className="section-inner-wrap">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div
            className="std"
            dangerouslySetInnerHTML={{ __html: extraInfo }}
          ></div>
        )}
      </div>
    </div>
  );
};
