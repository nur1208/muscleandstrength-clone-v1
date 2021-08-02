import React from "react";
import styled from "styled-components";
import { TextBlock } from "./TextBlock";

const MainWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  float: left;
  padding-left: 2.5%;
  padding-right: 2.5%;

  @media (min-width: 370px) {
    font-size: 1.3em;
  }

  @media (min-width: 500px) {
    box-sizing: border-box;
    width: 100%;
    float: left;
    padding-left: 2.5%;
    padding-right: 2.5%;
  }

  @media (min-width: 700px) {
    font-size: 13px;
  }

  @media (min-width: 1082px) {
    font-size: 13px;
    box-sizing: border-box;
    box-sizing: border-box;
    width: 75%;
    float: left;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 1263px) {
    box-sizing: border-box;
    width: 66.6666666667%;
    float: left;
    padding-left: 0;
    padding-right: 0;
  }
`;
export const TextBlocks = () => {
  const textBlocks = [1, 2, 34, 4];
  return (
    <MainWrapper id="MainWrapper">
      {textBlocks.map(() => (
        <TextBlock />
      ))}
    </MainWrapper>
  );
};
