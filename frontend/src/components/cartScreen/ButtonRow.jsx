import React from "react";
import styled from "styled-components";
import { Button } from "../Button";

const ButtonRowW = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
`;

// export const Button = styled.button`
//   ${(props) =>
//     props.isGreen
//       ? `background-color: #079c3a;
//   background-image: linear-gradient(#08b443, #068431);
//   color: #fff;
//   text-shadow: 1px 1px 0 #068431;
//   border: 1px solid #068833;`
//       : `background-color: #fff;
//   background-image: linear-gradient(white, #f2f2f2);
//   color: #3c3c3c;
//   text-shadow: 1px 1px 0 #f2f2f2;
//   border: 1px solid #f5f5f5;`}

//   cursor: pointer;
//   border-radius: 2px;
//   text-align: center;
//   box-sizing: border-box;
//   display: inline-block;
//   position: relative;
//   font-family: nimbusnovus, sans-serif;
//   font-weight: 500;
//   width: auto;
//   white-space: nowrap;
//   transition: 0.25s ease-out, color 0.25s ease-out;

//   ${(props) =>
//     props.isLong
//       ? `font-size: 18px;
//     padding: 0 20px;
//     height: 54px;
//     line-height: 54px;`
//       : `height: 39px;
//     font-size: 13px;
//     padding: 0 3%;
//     line-height: 35px;`}

//   ${(props) =>
//     props.isLong
//       ? `@media (min-width: 840px) {
//     padding: 0 30px;
//     height: 60px;
//     line-height: 60px;
//   } ;`
//       : `@media (min-width: 600px) {
//     height: 35px;
//   }`}
// `;

export const ButtonRow = () => {
  return (
    <ButtonRowW id="ButtonRowW">
      <Button id="Button">Continue Shopping</Button>
      <Button id="Button" isGreen={true} isLong={true}>
        Proceed to Checkout
      </Button>
    </ButtonRowW>
  );
};
