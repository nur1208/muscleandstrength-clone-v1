import React from "react";
import styled from "styled-components";

const ProductBox = styled.div`
  flex: 0 0 50%;
  margin-bottom: 15px;

  @media (min-width: 840px) {
    flex: 0 0 25%;
    margin-bottom: 0;
  }
`;

const Cell = styled.div`
  padding: 12px;
  display: flex;
  justify-content: stretch;
  @media (min-width: 840px) {
    padding: 15px;
  } ;
`;

const Image = styled.a`
  flex: 0 0 33%;
  margin-right: 15px;
  color: #303030;
  display: inline-block;
  transition: opacity 0.4s ease-in-out;
  background-color: transparent;
  text-decoration: none;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ProductData = styled.div`
  flex-grow: 1;
`;

const ProductName = styled.div`
  font-weight: 700;
`;

const SmallestFont = styled.div`
  font-size: 13px;
`;

const Price = styled.span`
  color: #059;
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
  margin-left: 4px;
`;

const Button = styled.a`
  background-color: #fff;
  background-image: linear-gradient(white, #f2f2f2);
  color: #3c3c3c;
  text-shadow: 1px 1px 0 #f2f2f2;
  border: 1px solid #f5f5f5;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  font-family: nimbusnovus, sans-serif;
  font-weight: 500;
  width: auto;
  white-space: nowrap;
  transition: 0.25s ease-out, color 0.25s ease-out;
  text-decoration: none;
  font-size: 11px;
  padding: 0 12px;
  line-height: 29px;
`;
export const CartUpSellItem = ({
  image,
  productName,
  dealType,
  beforePrice,
  price,
  link,
}) => {
  return (
    <ProductBox id="ProductBox">
      <Cell id="Cell">
        <Image id="Image" href={link}>
          <img src={image} alt="now_cla_1.webp" />
        </Image>
        <ProductData id="ProductData">
          <ProductName id="ProductName">
            <a href={link}>{productName}</a>
          </ProductName>
          <SmallestFont id="SmallestFont">{dealType}</SmallestFont>
          <SmallestFont id="SmallestFont">
            <del style={{ color: "#202020" }}>€{beforePrice}</del>
            <Price id="Price">€{price}</Price>
          </SmallestFont>
          <Button id="Button" href={link}>
            Add to Cart
          </Button>
        </ProductData>
      </Cell>
    </ProductBox>
  );
};
