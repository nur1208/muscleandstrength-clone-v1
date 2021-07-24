import React from "react";
import styled from "styled-components";
import { CartFeature } from "./CartFeature";

const CartFeatureCS = styled.div`
  overflow: hidden;
  background-color: #eee;
  font-family: nimbusnovus-bold, sans-serif;
  font-size: 13px;
  padding: 10px 0;
  margin-bottom: 2em;
  text-align: center;
  display: none;
  color: #aaa;

  @media (min-width: 840px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
  } ;
`;

export const CartFeatures = () => {
  const features = [
    {
      svg: (
        <svg id="icon-low-price" viewBox="0 0 100 100" height={17} width={17}>
          <path
            fill="#AAA"
            d="M83 29.6L64.7 48 28 11.3 9.7 29.6l36.7 36.7L28 84.7h55V29.6z"
          ></path>
        </svg>
      ),
      title: "Lowest Prices",
    },

    {
      svg: (
        <svg id="icon-deal-gray" viewBox="0 0 100 100" height={17} width={17}>
          <path
            fill="#AAA"
            d="M87.5 3.8h-26C56.7 3.8 50 6.6 46.7 10L6.4 50.3C3 53.6 3 59.2 6.4 62.5l31.1 31.1c3.4 3.4 8.9 3.4 12.3 0L90 53.3c3.4-3.4 6.1-10 6.1-14.8v-26c.1-4.8-3.8-8.7-8.6-8.7zM76 32.7c-4.8 0-8.7-3.9-8.7-8.7s3.9-8.7 8.7-8.7 8.7 3.9 8.7 8.7-4 8.7-8.7 8.7z"
          ></path>
        </svg>
      ),
      title: "Best Deals",
    },

    {
      svg: (
        <svg id="icon-sale" viewBox="0 0 100 100" height={22} width={22}>
          <path
            fill="#AAA"
            d="M49.5 9.6c-21.7 0-39.3 17.6-39.3 39.3s17.6 39.3 39.3 39.3c21.7 0 39.3-17.6 39.3-39.3S71.2 9.6 49.5 9.6zm0 70.7c-17.3 0-31.4-14.1-31.4-31.4s14.1-31.4 31.4-31.4 31.4 14.1 31.4 31.4-14.1 31.4-31.4 31.4zm2.6-34.1V35.8h10.5v-5.2H52.1v-5.2h-5.2v5.2H36.4v20.9h10.5V62H36.4v5.2h10.5v5.2h5.2v-5.2h10.5V46.3H52.1zm-5.2 0h-5.2V35.8h5.2v10.4zm10.4 15.7h-5.2V51.5h5.2v10.4z"
          ></path>
        </svg>
      ),
      title: "Money Back Guarantee",
    },
    {
      svg: (
        <svg id="icon-truck-gray" viewBox="0 0 100 100" height={27} width={27}>
          <g fill="#AAA">
            <circle cx="75.6" cy="71.1" r="7"></circle>
            <circle cx="25.6" cy="71.1" r="7"></circle>
            <path d="M78.8 30.3H64.2v28.3H10.9c-1.9 0-3.4 1.5-3.4 3.4v2c0 1.9 1.5 3.4 3.4 3.4H17c1.4-3.4 4.8-5.8 8.7-5.8 3.9 0 7.3 2.4 8.7 5.8H67c1.4-3.4 4.8-5.8 8.7-5.8 3.9 0 7.3 2.4 8.7 5.8h8.4V44.2l-14-13.9zm6 19.8L69 47.7V35.6h8.1l7.8 7.8v6.7z"></path>
            <path d="M10.9 55.2h46.4c1.9 0 3.4-1.5 3.4-3.4V22.7c0-1.9-1.5-3.4-3.4-3.4H10.9c-1.9 0-3.4 1.5-3.4 3.4v29.1c0 1.9 1.5 3.4 3.4 3.4z"></path>
          </g>
        </svg>
      ),
      title: "Super Fast Shipping",
    },
    {
      svg: (
        <svg id="icon-support" viewBox="0 0 100 100" height={22} width={22}>
          <path
            fill="#AAA"
            d="M77.1 12.9l-.3-.3c-.8-.9-2-1.4-3.3-1.3-1.2.1-2.3.8-3 1.7L57.9 31.2c-.6.8-.9 1.8-.9 2.8.1 1.1.6 2 1.4 2.7l3 2.5c1.9 1.6 2.1 4.3.5 6.2L46.6 63.5c-1.6 1.9-4.3 2.1-6.2.5 0 0-2.7-2.3-3-2.6-.8-.6-1.8-.9-2.8-.9-1 .1-1.8.5-2.4 1.1l-.1.1-12.3 12.1-2.8 2.8c-.8.8-1.2 1.9-1.1 3.1.1 1.2.8 2.3 1.7 3 .2.1 1.1.6 1.2.8 0 0 7.1 5.6 16.8 5.1 16.8-1 51.4-42.4 49.9-59.3-.5-6.3-5-12.5-8.4-16.4z"
          ></path>
        </svg>
      ),
      title: "7 Day Support",
    },
  ];
  return (
    <CartFeatureCS id="CartFeatureCS">
      {features.map((feature, index) => (
        <CartFeature svg={feature.svg} title={feature.title} key={index} />
      ))}
    </CartFeatureCS>
  );
};
