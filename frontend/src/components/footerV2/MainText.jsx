import React from "react";
import styled from "styled-components";
import { LogoV2 } from "./LogoV2";

const MainWrapper = styled.div`
  font-family: nimbusnovus-light, sans-serif;
  font-size: 2.6em;
  line-height: 1em;
  margin-top: 0;
  text-transform: uppercase;
  text-align: center;
  padding: 0 5%;

  @media (min-width: 1082px) {
    padding: 0 0.5%;
    background-color: #fff;
    box-sizing: border-box;
    width: 25%;
    float: left;
    margin-top: 2.1%;
    text-align: left;
  }

  @media (min-width: 1263px) {
    padding: 0 0.5%;
    margin-top: 4.1%;
    box-sizing: border-box;
    width: 33.3333333333%;
    float: left;
    text-align: left;
  }
`;

export const MainText = () => {
  return (
    <MainWrapper id="MainWrapper">
      The <LogoV2></LogoV2> Difference
    </MainWrapper>
  );
};
