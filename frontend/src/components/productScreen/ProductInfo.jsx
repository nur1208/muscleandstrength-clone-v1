import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const STDContainer = styled.div`
  div.std {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

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
          <STDContainer
            id="STDContainer"
            dangerouslySetInnerHTML={{ __html: extraInfo }}
          ></STDContainer>
        )}
      </div>
    </div>
  );
};
