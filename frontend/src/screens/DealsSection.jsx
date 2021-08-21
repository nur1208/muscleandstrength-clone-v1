import React from "react";
import { useSelector } from "react-redux";
import { DealSwiperV1 } from "../components/productScreen/DealSwiperV1";
import { DealSwiperV2 } from "../components/productScreen/DealSwiperV2";

export const DealsSection = () => {
  const productV2Store = useSelector(
    (state) => state.productV2Store
  );
  const { isOldVersion } = productV2Store;

  return (
    <div className="deals-coupons-section solo">
      <div className="deals-coupons-title section-title">
        <img
          src="/images/deal.png"
          alt="deal"
          className="icon"
        />{" "}
        Deals
      </div>
      <div className="section-inner-wrap">
        {isOldVersion ? <DealSwiperV1 /> : <DealSwiperV2 />}
      </div>
    </div>
  );
};
