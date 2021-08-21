import React from "react";
import {
  DealInfoWrap,
  SwiperSlideWrapper,
  SwiperWrapper,
} from "../DealSeactionSC";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

export const DealSwiperV1 = () => {
  const productOne = useSelector((state) => state.productOne);
  const {
    product: { buyingOption },
  } = productOne;

  return (
    <SwiperWrapper id="SwiperWrapper">
      <Swiper
        id="main"
        // className="mns-carousel"
        // slidesPerView={2}
        // freeMode={true}
        // spaceBetween={2}
        loop={false}
        speed={800}
        autoplay={{
          delay: 3000,
        }}
        navigation={false}
        // breakpoints={{
        //   950: { slidesPerView: 6, slidesPerGroup: 6 },
        //   850: { slidesPerView: 5, slidesPerGroup: 5 },
        //   650: { slidesPerView: 4, slidesPerGroup: 4 },
        //   450: { slidesPerView: 3, slidesPerGroup: 3 },
        // }}
        // slidesPerGroup={4}
      >
        {buyingOption &&
          buyingOption.map((option, index) => {
            if (option.deal)
              return (
                <>
                  <SwiperSlide>
                    <SwiperSlideWrapper id="SwiperSlideWrapper">
                      <img
                        className="deal-image lazyloaded"
                        alt={option.deal.title}
                        src={option.deal.image}
                      />
                      <DealInfoWrap>
                        <div>
                          <span className="deal-label">
                            {option.deal.title}
                          </span>
                        </div>
                        <div className="deal-desc">
                          {option.deal.description}
                        </div>
                      </DealInfoWrap>
                    </SwiperSlideWrapper>
                  </SwiperSlide>
                </>
              );
            else return null;
          })}
      </Swiper>
    </SwiperWrapper>
  );
};
