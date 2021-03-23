import React from "react";
import { useSelector } from "react-redux";

export const DealsSection = () => {
  const productOne = useSelector((state) => state.productOne);
  const {
    product: { buyingOption },
  } = productOne;

  return (
    <div className="deals-coupons-section solo">
      <div className="deals-coupons-title section-title">
        <img src="/images/deal.png" alt="deal" className="icon" /> Deals
      </div>
      <div className="section-inner-wrap">
        <div className="deals-swiper-container swiper-container-horizontal">
          <div
            className="swiper-wrapper"
            // style="transform: translate3d(0px, 0px, 0px);"
          >
            {buyingOption &&
              buyingOption.map((option, index) => {
                if (option.deal)
                  return (
                    <div
                      className="swiper-slide swiper-slide-active"
                      style={{ width: 692 }}
                      key={index}
                    >
                      <img
                        className="deal-image lazyloaded"
                        alt={option.deal.title}
                        src={option.deal.image}
                      />
                      <div className="deal-info-wrap">
                        <div>
                          <span className="deal-label">
                            {option.deal.title}
                          </span>
                        </div>
                        <div className="deal-desc">
                          {option.deal.description}
                        </div>
                      </div>
                    </div>
                  );
                else return null;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
