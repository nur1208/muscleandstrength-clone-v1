import React from "react";
import { Link } from "react-router-dom";
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

export const Product = ({
  image,
  name,
  rating,
  numReviews,
  price,
  _id: productId,
}) => {
  return (
    <ProductWrapper id="ProductWrapper">
      <InnerWrap id="InnerWrap">
        <Link to={`/store/${productId}`}>
          <ImageWrap id="ImageWrap">
            <img
              src={image}
              alt="the-ripper-blue-raspberry-30-serve"
            />
          </ImageWrap>
        </Link>
        <ProductInfo id="ProductInfo" href="/store/ripper.html">
          <ProductName id="ProductName">{name} </ProductName>
          <Link to={`/store/${productId}`}>
            <ProductDeal
              id="ProductDeal"
              // href="/store/ripper.html"
              title="LIMITED TIME PRICE CUT"
            >
              <Deal id="Deal">
                <Icon id="Icon" src="/images/icon-deal-white" />
                LIMITED TIME PRICE CUT
              </Deal>
            </ProductDeal>
          </Link>
          <ProductRating id="ProductRating">
            <RatingStars ratingPercentage={rating} />
            <ReviewCount id="ReviewCount">
              ({numReviews})
            </ReviewCount>
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
          <Link to={`/store/${productId}`}>View Product</Link>
        </ViewBtn>
      </InnerWrap>
    </ProductWrapper>
  );
};
