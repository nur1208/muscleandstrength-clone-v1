import styled from "styled-components";

export const ProductWrapper = styled.div`
  flex: 0 0 auto;
  min-height: 0;
  min-width: 0;
  /* width: 100%; */
  width: calc(100% - 0.625rem);
  margin-left: 0.3125rem;
  margin-right: 0.3125rem;
  margin-bottom: 10px;
  background-color: #fff;
  flex-basis: auto;

  @media (min-width: 840px) {
    margin-bottom: 15px;
  }

  @media print, screen and (min-width: 37.5em) {
    width: calc(50% - 0.625rem);
  }

  @media print, screen and (min-width: 52.5em) {
    width: calc(50% - 0.9375rem);
    margin-left: 0.46875rem;
    margin-right: 0.46875rem;
  }

  @media print, screen and (min-width: 64em) {
    width: calc(25% - 0.9375rem);
  } ;
`;

export const InnerWrap = styled.div`
  /* height: 100%; */
  border: 12px solid #fff;
  position: relative;

  @media (min-width: 840px) {
    border-width: 15px;
  }

  @media (max-width: 839px) {
    display: -ms-grid;
    display: grid;
    grid-gap: 0 14px;
    -ms-grid-columns: 30% 14px auto;
    grid-template-columns: 30% auto;
    align-items: start;
    -ms-grid-rows: auto 0 auto;
    grid-template-areas:
      "pictureG dynamicG"
      "pictureG infoG";
    height: 100%;
    background-color: #fff;
    position: relative;
  }
`;

export const ImageWrap = styled.a`
  max-width: 120px;
  padding-top: 8px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 840px) {
    padding: 0;
    text-align: center;
    display: block;
  }

  @media (max-width: 839px) {
    grid-area: pictureG;
  }

  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;

    :hover {
      opacity: 0.9;
      transition: opacity 0.3s ease-in-out;
    }
    @media (min-width: 840px) {
      max-width: 120px;
    }
  }
`;

export const ProductInfo = styled.div`
  @media (min-width: 840px) {
    padding-bottom: 7px;
  }

  @media (max-width: 839px) {
    grid-area: dynamicG;
  }
`;

export const ProductName = styled.a`
  :hover {
    color: #303030;
  }
  color: #303030;

  font-size: 16px;
  display: block;
  line-height: 1.3;
  margin-bottom: 4px;
`;

export const ProductDeal = styled.a`
  background-color: transparent;
`;

export const Deal = styled.span`
  padding: 5px 8px;
  background-color: #888;
  font-size: 11px;
  font-weight: 500;
  line-height: 100%;
  color: #fff;
  border-radius: 2px;
  text-shadow: 1px 1px 0 #6f6f6f;
  text-transform: uppercase;

  background-color: #079c3a;
  font-family: nimbusnovus-medium, sans-serif;

  margin: 5px 0 8px;
  text-shadow: none;
  display: inline-block;
  position: relative;
`;

export const Icon = styled.img`
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  position: absolute;
  top: 50%;
  left: 0.5em;
`;

export const ProductRating = styled.div`
  margin: 0 0 4px;
  display: flex;
  gap: 5px;
`;

export const ReviewCount = styled.span`
  font-size: 13px;
  display: inline-block;
  vertical-align: top;
  margin-left: 5px;
`;

export const ProductPrice = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: #059;
  padding-bottom: 0;
`;

export const BeforeDiscount = styled.div`
  margin-bottom: -3px;
`;

export const Price = styled.span`
  /* text-decoration: line-through;
  font-size: 16px;
  color: #d41313; */

  text-decoration: ${(props) =>
    props.isDiscount ? "line-through" : null};
  font-size: ${(props) => (props.isDiscount ? "16px" : "18px")};
  font-family: nimbusnovus-bold, sans-serif;
  color: ${(props) => (props.isDiscount ? "#d41313" : "#059 ")};

  display: block;
`;

export const RegularPrice = styled.div``;

export const Stock = styled.div`
  font-size: 9px;
  margin-top: 0.2em;
  margin-bottom: 0.6em;
  font-weight: 400;
  color: #079c3a;
`;

export const ViewBtn = styled.div`
  /* display: flex;
  justify-content: center; */
  font-size: 18px;
  font-weight: 700;
  color: #059;
  padding-bottom: 0;
  @media (max-width: 839px) {
    grid-area: infoG;
  }

  a {
    cursor: pointer;
    border-radius: 2px;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    line-height: 43px;
    font-family: nimbusnovus, sans-serif;
    font-weight: 500;
    width: auto;
    white-space: nowrap;
    transition: 0.25s ease-out, color 0.25s ease-out;
    text-decoration: none;
    font-size: 13px;
    padding: 0 16px;
    height: 39px;
    line-height: 39px;
    background-color: #059;
    background-image: linear-gradient(#0063b3, #004780);
    color: #fff;
    text-shadow: 1px 1px 0 #004780;
    border: 1px solid #004a85;
    flex: 0 0 48%;

    :hover {
      background-color: #004780;
      background-image: linear-gradient(#004175, #004780);
      color: #e6e6e6;
    }
    @media (min-width: 600px) {
      padding: 0 15px;
      height: 35px;
      line-height: 35px;
    }
  }
`;
