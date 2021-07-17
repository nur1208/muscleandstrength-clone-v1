import React from "react";
import {
  BeforeDiscount,
  Deal,
  Icon,
  ImageWrap,
  InnerWrap,
  Price,
  ProductDeal,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductRating,
  ProductWrapper,
  RegularPrice,
  ReviewCount,
  Stock,
  ViewBtn,
} from "../../styledComponents/searchScreen/productSC";
import { RatingStars } from "../RatingStars";

export const Product = ({ image, name, rating, numReviews, price }) => {
  return (
    <ProductWrapper id="ProductWrapper">
      <InnerWrap id="InnerWrap">
        <ImageWrap id="ImageWrap">
          <img src={image} alt="the-ripper-blue-raspberry-30-serve" />
        </ImageWrap>
        <ProductInfo id="ProductInfo" href="/store/ripper.html">
          <ProductName id="ProductName">{name} </ProductName>
          <ProductDeal
            id="ProductDeal"
            href="/store/ripper.html"
            title="LIMITED TIME PRICE CUT"
          >
            <Deal id="Deal">
              <Icon id="Icon" src="/images/icon-deal-white" />
              LIMITED TIME PRICE CUT
            </Deal>
          </ProductDeal>
          <ProductRating id="ProductRating">
            <RatingStars ratingPercentage={rating} />
            <ReviewCount id="ReviewCount">({numReviews})</ReviewCount>
          </ProductRating>
          <ProductPrice id="ProductPrice">
            {/* <BeforeDiscount id="BeforeDiscount">
              <Price id="Price" isDiscount={true}>
                €27.76
              </Price>
            </BeforeDiscount> */}
            <RegularPrice id="RegularPrice">
              <Price id="Price">€{price}</Price>
            </RegularPrice>
            <Stock id="Stock">IN STOCK</Stock>
          </ProductPrice>
        </ProductInfo>
        <ViewBtn id="ViewBtn">
          <a href="/store/ripper.html">View Product</a>
        </ViewBtn>
      </InnerWrap>
    </ProductWrapper>
  );
};
