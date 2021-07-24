import React from "react";
import styled from "styled-components";
import { CartTool } from "./CartTool";
import { EstimateShipping } from "./EstimateShipping";
import { OrderTotals } from "./OrderTotals";
import { RewardsBox } from "./RewardsBox";

const Container2 = styled.div`
  margin-bottom: 10px;
  font-family: nimbusnovus, sans-serif;

  * {
    font-family: nimbusnovus, sans-serif;
  }

  @media (min-width: 840px) {
    margin-bottom: 15px;
  } ;
`;

export const CartToolsContainer = () => {
  const cartTools = [
    { title: "Coupons & Rewards", hasDropdown: true, children: <RewardsBox /> },
    {
      title: "Estimate Shipping",
      hasDropdown: true,
      children: <EstimateShipping />,
    },
    {
      isOrderTotal: true,
      children: <OrderTotals />,
    },
  ];
  return (
    <Container2 id="Container2">
      {cartTools.map(
        ({ title, hasDropdown, children, isOrderTotal }, index) => (
          <CartTool
            hasDropdown={hasDropdown}
            title={title}
            isOrderTotal={isOrderTotal}
          >
            {children}
          </CartTool>
        )
      )}
    </Container2>
  );
};
