import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

export const StoreSectionSwiper = ({ sectionId, title, items }) => {
  require("../Swiper-StoreSection/storeSectionSwiper.css");
  // <Swiper id="main"></Swiper>;

  const slides = [];

  for (let i = 0; i < 12; i++) {
    slides.push(
      <SwiperSlide>
        <div className="height-setter">
          <div className="dynamic-height" style={{ paddingBottom: 106 }}>
            <a className="product-link" href="/store/shield.html">
              <div className="image-wrap">
                <img
                  className="product-image lazyloaded"
                  src="https://cdn.muscleandstrength.com/store/media/mnsresized/promos/05fbe4/240/0/shield_immunity_plus_ultra_orange_3.jpg"
                  data-src="https://cdn.muscleandstrength.com/store/media/mnsresized/promos/943b37/240/0/cherry_lemonade_1_2.jpg"
                  alt="Primeval Labs EAA MAX, 30 Servings"
                />
              </div>
              <div className="product-name">
                PERFECT Sports Shield Immunity+, 30 Servings
              </div>
            </a>
          </div>
          <div className="product-info">
            <span className="mns-label lbl-deal">
              PRICE CUT + FREE WORKOUT MASK
            </span>
            <div className="price-box">
              <span className="price">€16.09</span>
            </div>
            <div className="button-wrap">
              <a
                href="/store/shield.html"
                className="btn btn-blue btn-sm btn-addtocart"
              >
                View Product
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }
  return (
    <section
      id={sectionId || "top-rated-products"}
      className="margin-bottom-none"
    >
      <h2 className="grey-stripe">{title || "Top Rated Products"}</h2>
      <Swiper
        id="main"
        className="mns-carousel"
        slidesPerView={6}
        freeMode={true}
        spaceBetween={4}
        navigation={true}
        slidesPerGroup={6}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="height-setter">
              <div className="dynamic-height" style={{ paddingBottom: 106 }}>
                <Link className="product-link" to={item.href}>
                  <div className="image-wrap">
                    <img
                      className="product-image lazyloaded"
                      src={item.image}
                      alt="Primeval Labs EAA MAX, 30 Servings"
                    />
                  </div>
                  <div className="product-name">{item.name}</div>
                </Link>
              </div>
              <div className="product-info">
                <span className="mns-label lbl-deal">{item.deal}</span>
                <div className="price-box">
                  <span className="price">€{item.price}</span>
                </div>
                <div className="button-wrap">
                  <Link
                    to={item.href}
                    className="btn btn-blue btn-sm btn-addtocart"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
