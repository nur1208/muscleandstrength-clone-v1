import React, { useEffect, useState } from "react";
import {
  DealInfoWrap,
  SwiperSlideWrapper,
  SwiperWrapper,
} from "../DealSeactionSC";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

export const DealSwiperV2 = () => {
  const productOne = useSelector((state) => state.productOne);
  const {
    product: { buyingOption },
  } = productOne;

  const productV2Store = useSelector(
    (state) => state.productV2Store
  );
  const { product } = productV2Store;

  const [hasDeals, setHasDeals] = useState(false);

  useEffect(() => {
    // get the total deals for this product
    const dealsNum = product.supProducts.reduce(
      (dealsNum, supProduct) =>
        supProduct.deals.length + dealsNum,
      0
    );
    // if there are more the three deals setHasDeals to true
    // else false
    setHasDeals(dealsNum > 1);
    // console.log({ dealsNum });
  }, [product]);

  // product.supProducts.length 3
  /// supProduct.deals.length 1
  return (
    <SwiperWrapper id="SwiperWrapper">
      <Swiper
        id="main"
        // className="mns-carousel"
        // slidesPerView={2}
        // freeMode={true}
        // spaceBetween={2}
        loop={hasDeals}
        speed={800}
        autoplay={{
          delay: 3000,
        }}
        navigation={hasDeals}
        // breakpoints={{
        //   950: { slidesPerView: 6, slidesPerGroup: 6 },
        //   850: { slidesPerView: 5, slidesPerGroup: 5 },
        //   650: { slidesPerView: 4, slidesPerGroup: 4 },
        //   450: { slidesPerView: 3, slidesPerGroup: 3 },
        // }}
        // slidesPerGroup={4}
      >
        {product &&
          product.supProducts &&
          product.supProducts.map((supProduct, index) => {
            if (supProduct.deals)
              return supProduct.deals.map((deal) => {
                // setDealNum(dealNum + 1);
                return (
                  <SwiperSlide key={deal._id}>
                    <SwiperSlideWrapper id="SwiperSlideWrapper">
                      <img
                        style={{ maxWidth: 80 }}
                        className="deal-image lazyloaded"
                        alt={supProduct.size}
                        src={supProduct.image}
                      />
                      <DealInfoWrap>
                        <div>
                          <span className="deal-label">
                            {deal.type}
                          </span>
                        </div>
                        <div className="deal-desc">
                          {deal.description}
                        </div>
                      </DealInfoWrap>
                    </SwiperSlideWrapper>
                  </SwiperSlide>
                );
              });
            else return null;
          })}
      </Swiper>
    </SwiperWrapper>
  );
};
