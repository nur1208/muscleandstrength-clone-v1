import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 1em;

  h2 {
    text-align: left;
    font-size: 13px;
    font-weight: 600;
    color: #888;
    float: left;
    margin-bottom: 0.3em;
    margin-right: 8px;
    padding-bottom: 5px;
    text-rendering: unset;
  }
`;

const DiscountCoupon = styled.form`
  padding-top: 1em;
`;

const DiscountLabel = styled.label`
  text-align: left;
  font-size: 13px;
  float: left;
  margin-bottom: 10px;
  line-height: 1.1;
  padding-bottom: 5px;
  :before {
    content: "";
    display: table;
  }
  :after {
    clear: both;
    content: "";
    display: table;
  }
`;

const DiscountInput = styled.input`
  width: 100%;
  padding: 12px 8px 11px 10px;
  line-height: 1.1;
  margin-bottom: 10px;
  border-radius: 2px;
  background: #fff;
  display: block;
  border: 1px solid #ddd;
  font-size: 16px;
  box-sizing: border-box;
  color: #303030;
`;

const Button = styled.button`
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

  height: 39px;
  font-size: 13px;
  padding: 0 15px;
  height: 35px;
  line-height: 35px;
`;

const DontHaveCoupon = styled.div`
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 13px;
`;
export const RewardsBox = () => {
  return (
    <>
      <Wrapper id="Wrapper">
        <h2>Spend your points</h2>
        <div>
          <span>You don't currently have any points to spend.</span>
        </div>
      </Wrapper>
      <DiscountCoupon id="DiscountCoupon">
        <DiscountLabel id="DiscountLabel">
          Enter coupon code here:
        </DiscountLabel>
        <div>
          <DiscountInput id="DiscountInput" placeHolder="Enter code..." />
        </div>
        <div style={{ paddingTop: 0, paddingLeft: 0 }}>
          <Button>Apply Coupon</Button>
        </div>
      </DiscountCoupon>
      <DontHaveCoupon id="DontHaveCoupon">
        Don't have a coupon?{" "}
        <a target="_blank" href="/store/promos.html">
          Find one here
        </a>
      </DontHaveCoupon>
    </>
  );
};
