import React from "react";
import styled from "styled-components";
import { MainText } from "./MainText";

const MainWrapper = styled.div`
  background-color: #e6e7e8;
  padding: 1em 0;
  color: #059;
  overflow: hidden;
  z-index: 0;
  position: relative;
  display: none;
  border-top: 0;

  @media (min-width: 700px) {
    background-color: #fff;
  }

  @media (min-width: 800px) {
    display: block;
  }
`;

const MaxWrap = styled.div`
  margin: 0 2%;
  max-width: 96%;
  width: 1300px;

  :after {
    content: " ";
    display: block;
    clear: both;
  }
`;

export const PerksFooter = () => {
  return (
    <MainWrapper id="MainWrapper">
      <MaxWrap id="MaxWrap">
        <MainText />
      </MaxWrap>
    </MainWrapper>
  );
};
