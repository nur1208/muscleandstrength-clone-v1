import React from "react";
import styled from "styled-components";

const FeatureWrapper = styled.div`
  line-height: 30px;

  svg {
    display: inline-block;
    vertical-align: middle;
  }

  span {
    margin-left: 4px;
  }
`;

export const CartFeature = ({ svg, title }) => {
  return (
    <FeatureWrapper id="FeatureWrapper">
      {svg}
      <span>{title}</span>
    </FeatureWrapper>
  );
};
