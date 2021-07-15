import React from "react";
import {
  BtnLightBlue,
  BlockSubtitleMW,
  Text2,
  BtnTabContainer,
  BlueStripe,
} from "../../styledComponents/searchScreen/blockSubtitleSC";

export const BlockSubtitle = () => {
  return (
    <BlockSubtitleMW id="BlockSubtitleMW">
      <Text2 id="Text2">Showing results for 'The Ripper' </Text2>
      <BtnTabContainer id="BtnTabContainer">
        <BlueStripe id="BlueStripe">All Products</BlueStripe>
        <BtnLightBlue id="BtnLightBlue">Sort {"&"} Filter</BtnLightBlue>
      </BtnTabContainer>
    </BlockSubtitleMW>
  );
};
