import React from "react";
import {
  BrandAboutBtn,
  BrandHeaderBlock,
  BrandLogo,
  CaretRight,
} from "../../styledComponents/brandScreen/brandheaderSC";

export const BrandHeader = () => {
  return (
    <BrandHeaderBlock id="BrandHeaderBlock">
      <BrandLogo id="BrandLogo">
        <img
          height="100"
          width="211"
          alt="MuscleTech Supplements: Lowest Prices at Muscle &amp; Strength"
          src="/images/MT_logo_2020_black_400.jpg"
          title="MuscleTech Supplements: Lowest Prices at Muscle &amp; Strength"
        />
      </BrandLogo>
      <BrandAboutBtn id="BrandAboutBtn">
        About MuscleTech <CaretRight id="CaretRight" />
      </BrandAboutBtn>
    </BrandHeaderBlock>
  );
};
