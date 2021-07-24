import styled from "styled-components";

export const CartTitle = styled.div`
  font-weight: 700;
  font-family: nimbusnovus-bold, sans-serif;
  margin: 0 0 10px;
  padding: 0;
  font-variant-ligatures: none;

  @media (min-width: 480px) {
    font-size: 2em;
    overflow: hidden;
    margin-bottom: 16px;
    line-height: 1.3;
  }

  @media (min-width: 840px) {
    text-align: left;
  } ;
`;

export const CartHeaderText = styled.div`
  @media (min-width: 840px) {
    float: left;
  } ;
`;

export const ShopperBadge = styled.div`
  margin-top: 0;
  display: block;
  float: right;

  img {
    max-width: 100%;
    height: auto;
    margin: 0;
    border: 0;
  }
`;

export const BbbBadge = styled.div`
  float: right;
  display: block;
  margin: 0 0.3em 0 0;
  overflow: hidden;
  line-height: 0;
`;
