import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteCartItem, updateQtyCartItem } from "../../actions/cartActions";
import {
  Loader,
  LoaderBlock,
} from "../../styledComponents/searchScreen/catalogListingSC";

const CartItemWrap = styled.div`
  grid-template-columns: 25% auto 72px;
  display: grid;
  grid-gap: 3px 8px;
  grid-template-rows: auto auto 50px;
  border-bottom: ${(props) =>
    props.hasBottomBorder ? "1px solid #ddd" : null};
  padding-bottom: 0.7em;
  margin-bottom: 1em;
  grid-template-areas:
    "imageC infoC subtotalC"
    "imageC messagesC messagesC"
    "imageC quantityC quantityC";

  @media (min-width: 840px) {
    grid-template-columns: 12% auto 80px 130px 80px;
    padding: 0 12px 10px;
    -ms-grid-rows: 1fr 3px 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 3px 12px;
    grid-template-areas:
      "imageC infoC priceC quantityC subtotalC"
      "imageC messagesC priceC quantityC subtotalC";
  }
`;

const BoxImage = styled.div`
  grid-area: imageC;

  a img {
    max-width: 100%;
    height: auto;
    @media (min-width: 840px) {
      width: 90%;
      max-width: 115px;
    }
    :hover {
      opacity: 0.9;
      transition: opacity 0.3s ease-in-out;
    }
  }
`;

const BoxInfo = styled.div`
  grid-area: infoC;
  font-weight: 500;
`;

const ProductName = styled.span`
  color: #059;
  display: block;

  a:hover {
    color: #0687e6;
  }
`;

const Price = styled.span`
  display: none;
`;

const BoxMessages = styled.div`
  grid-area: messagesC;
`;

const BoxPrice = styled.div`
  display: none;
  grid-area: priceC;
  font-weight: 500;
  text-align: right;

  @media (min-width: 840px) {
    display: block;
  } ;
`;

const BoxQuantity = styled.div`
  grid-area: quantityC;
  margin: 10px 0 0;

  @media (min-width: 840px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  input {
    margin: 0;
    overflow: visible;
    border: 1px solid #ddd;
    font-size: 16px;
    box-sizing: border-box;
    color: #303030;
    border-radius: 2px;
    background: #fff;
    vertical-align: bottom;
    text-align: center;
    padding: 0;
    width: 37px;
    display: inline-block;
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
    @media (min-width: 600px) {
      /* padding: 0 10px; */
      line-height: 30px;
    }

    @media (min-width: 840px) {
      padding: 0;
      width: 32px;
      height: 32px;
      margin-top: -16px;
      margin-bottom: 10px;
    }
  }
`;

const UpdateBtn = styled.a`
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

  font-size: 11px;
  line-height: 35px;
  padding: 0 16px;

  @media (min-width: 600px) {
    padding: 0 12px;
    line-height: 30px;
  }

  @media (min-width: 840px) {
    margin-bottom: 10px;
  }
`;

const DeleteBtn = styled.a`
  background-color: #fff;
  background-image: linear-gradient(white, #f2f2f2);
  color: #3c3c3c;
  text-shadow: 1px 1px 0 #f2f2f2;
  border: 1px solid #f5f5f5;
  padding: 0 20px;
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

  font-size: 11px;
  line-height: 35px;
  padding: 0 16px;
  float: right;
  @media (min-width: 600px) {
    padding: 0 12px;
    line-height: 30px;
  }
`;

const BoxSubtotal = styled.div`
  grid-area: subtotalC;
  text-align: right;
`;

const ItemSubtotal = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #059;
`;

const LabelDeal = styled.span`
  padding: 0 8px;
  background-color: #079c3a;
  border-radius: 2px;
  font-size: 11px;
  font-family: nimbusnovus, sans-serif;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
  text-shadow: 1px 1px 0 #077f32;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  margin-bottom: 5px;

  :before {
    content: "";
    width: 12px;
    height: 12px;
    margin-right: 6px;
    margin-bottom: -2px;
    display: inline-block;
    background: url(${(props) => props.img}) 0 0 / auto 100%;
  }
`;

const ItemOptions = styled.dl`
  font-size: 13px;
  font-weight: 500;
  margin: 0;

  dt {
    margin-bottom: 5px;
  }
`;

export const CartItem = ({
  name,
  price,
  message,
  qty,
  hasButton,
  subtotal,
  freeProductName,
  hasBottomBorder,
  cartItemId,
  isLoadings,
  setIsLoadings,
  index,
  productId,
  productType,
}) => {
  const [qtyState, setQtyState] = useState(qty ? qty : 0);
  const priceFormatter = (price) => {
    return price === "FREE" ? price : `€${price}`;
  };

  const cart = useSelector((state) => state.cart);
  const { idLoading, deletedIdLoading } = cart;

  const dispatch = useDispatch(null);

  const handleUpdateQty = () => {
    if (qtyState !== qty) {
      if (Number(qtyState) !== 0) {
        dispatch(updateQtyCartItem(cartItemId, qtyState));
      } else {
        dispatch(deleteCartItem(cartItemId));
      }
    } else console.log("sorry qty haven't change yet");

    // console.log(`update QTY to ${qtyState}`);
  };

  const handleDeleteCartItem = () => {
    dispatch(deleteCartItem(cartItemId));
  };

  return (
    <CartItemWrap id="CartItemWrap" hasBottomBorder={hasBottomBorder}>
      <BoxImage id="BoxImage">
        <Link to={`/store/${productId}`}>
          <img
            src="/images/the-ripper-blood-orange-30-serve.jpg"
            alt="the-ripper-blood-orange-30-serve.jpg"
          />
        </Link>
      </BoxImage>

      <BoxInfo id="BoxInfo">
        <ProductName id="ProductName">
          <Link to={`/store/${productId}`}>{`${name} ${
            productType ? "- " + productType : ""
          }`}</Link>
        </ProductName>
        <Price id="Price">{priceFormatter(price)}</Price>
      </BoxInfo>

      <BoxMessages id="BoxMessages">
        {message && (
          <LabelDeal id="LabelDeal" img="/images/deal-white.svg">
            {message}
          </LabelDeal>
        )}

        <div>
          {freeProductName && (
            <ItemOptions>
              <dt>{freeProductName} </dt>
              <a href="#somewhere">Change your selected free items</a>
            </ItemOptions>
          )}
        </div>
      </BoxMessages>

      <BoxPrice id="BoxPrice">
        <div>
          <div>{priceFormatter(price)}</div>
        </div>
      </BoxPrice>
      <BoxQuantity id="BoxQuantity">
        <input
          type="number"
          size="2"
          maxlength="3"
          value={qtyState}
          onChange={(e) => setQtyState(e.target.value < 0 ? 0 : e.target.value)}
        />

        {hasButton && (
          <>
            <UpdateBtn id="UpdateBtn" onClick={handleUpdateQty}>
              Update Qty{" "}
              <LoaderBlock
                id="LoaderBlock"
                isLoading={idLoading === cartItemId}
              >
                <Loader id="Loader" isBlue={true} />
              </LoaderBlock>
            </UpdateBtn>

            <DeleteBtn id="DeleteBtn" onClick={handleDeleteCartItem}>
              Delete{" "}
              <LoaderBlock
                id="LoaderBlock"
                isLoading={deletedIdLoading === cartItemId}
              >
                <Loader id="Loader" isBlue={true} />
              </LoaderBlock>
            </DeleteBtn>
          </>
        )}
      </BoxQuantity>

      <BoxSubtotal id="BoxSubtotal">
        <ItemSubtotal id="ItemSubtotal">
          <div>{priceFormatter(subtotal)}</div>
        </ItemSubtotal>
      </BoxSubtotal>
    </CartItemWrap>
  );
};
