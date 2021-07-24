import React from "react";
import styled from "styled-components";
import { CartUpSellItem } from "./CartUpSellItem";

const UpSellWrap = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 840px) {
    margin-bottom: 15px;
  }
`;
const cartUpSellItems = [
  {
    image: "/images/now_cla_1.webp",
    productName: "CLA",
    dealType: "Price cut!",
    beforePrice: 13.07,
    price: 8.71,
    link: "/store/now-cla-800mg.html",
  },
  {
    image: "/images/omega_3_100_softgels_4.webp",
    productName: "Omega-3",
    dealType: "Price cut!",
    beforePrice: 7.23,
    price: 6.1,
    link: "/store/omega-3.html",
  },
  {
    image: "/images/ccb_1_5.webp",
    productName: "Combat Crunch Bar",
    dealType: "Buy 1 get 1 free!",
    beforePrice: 6.96,
    price: 3.48,
    link: "/store/mp-combat-crunch-bars.html",
  },
  {
    image: "/images/somnapuregummies120ct_bottlerender.webp",
    productName: "Somnapure Gummies",
    dealType: "Price cut!",
    beforePrice: 17.44,
    price: 13.07,
    link: "/store/force-factor-somnapure-gummies.html",
  },
];
export const CartUpSell = () => {
  return (
    <UpSellWrap id="UpSellWrap">
      {cartUpSellItems.map((item, index) => (
        <CartUpSellItem key={index} {...item} />
      ))}
    </UpSellWrap>
  );
};
