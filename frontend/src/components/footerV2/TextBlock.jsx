import React from "react";
import styled from "styled-components";

const MainWrapper = styled.a`
  text-align: center;
  line-height: 1.1em;
  border: 0;
  padding-top: 0.5em;
  box-sizing: border-box;
  width: 50%;
  float: left;
  padding-left: 2.0833333333%;
  padding-right: 2.0833333333%;
  margin-top: 0.5em;
  margin-left: -1px;

  border-left: 0; //b1

  @media (min-width: 500px) {
    border: 0;
    box-sizing: border-box;
    width: 25%;
    float: left;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 640px) {
    border: 0;
    box-sizing: border-box;
    width: 25%;
    float: left;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 700px) {
    border: 0;
    box-sizing: border-box;
    width: 25%;
    float: left;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 960px) {
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    margin-top: 0;
    padding-top: 1em;
    min-height: 11em;
    box-sizing: border-box;
    width: 23.3333333333%;
    float: left;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 960px) {
    /* box-sizing: border-box; */
    width: 30%; //b1
    /* float: left; */
    /* padding-left: 0; */
    /* padding-right: 0; */
  }
`;

const Icon = styled.div`
  font-size: 4em;
  @media (min-width: 800px) {
    margin-bottom: 0.2em;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-family: nimbusnovus-bold, sans-serif;
  margin: 0 2% 8% 4%;
  text-transform: uppercase;

  @media (min-width: 800px) {
    margin: 0 2%;
  }
`;

const TitleNextLine = styled.span`
  display: block;

  @media (min-width: 960px) {
    display: inline;
  }
`;

const Text = styled.div`
  font-size: 13px;
  font-family: nimbusnovus-medium, sans-serif;
  color: #aaa;
  margin: 0 auto;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 85%;
  display: none;

  @media (min-width: 960px) {
    display: block;
  }
`;

export const TextBlock = () => {
  return (
    <MainWrapper id="MainWrapper">
      <Icon id="Icon">
        <svg
          id="icon-deal"
          viewBox="0 0 100 100"
          style={{
            width: ".8em",
            height: ".8em",
            marginTop: ".2em",
            marginBottom: ".1em",
          }}
        >
          <path
            fill="#059"
            d="M87.5 3.8h-26C56.7 3.8 50 6.6 46.7 10L6.4 50.3C3 53.6 3 59.2 6.4 62.5l31.1 31.1c3.4 3.4 8.9 3.4 12.3 0L90 53.3c3.4-3.4 6.1-10 6.1-14.8v-26c.1-4.8-3.8-8.7-8.6-8.7zM76 32.7c-4.8 0-8.7-3.9-8.7-8.7s3.9-8.7 8.7-8.7 8.7 3.9 8.7 8.7-4 8.7-8.7 8.7z"
          ></path>
        </svg>
      </Icon>
      <Title id="Title">
        Lowest Prices,{" "}
        <TitleNextLine id="TitleNextLine">Best Deals</TitleNextLine>
      </Title>
      <Text id="Text">
        Super-low prices and killer deals on over 8,000 products!
      </Text>
    </MainWrapper>
  );
};
