import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { Link } from "react-router-dom";

export const StoreSection = ({ sectionId, title, items, promotionsId }) => {
  const [translate3d, setTranslate3d] = useState("translate3d");

  const moveSection = () => {
    setTranslate3d(
      translate3d === "translate3d" ? "translate3d-2" : "translate3d"
    );
  };

  return (
    <section id={sectionId} className="margin-bottom-none">
      <h2 className="grey-stripe">{title}</h2>
      <div
        id={promotionsId}
        className="mns-carousel swiper-container hybrid-carousel-grid"
      >
        <div
          className={`swiper-wrapper grid-products-wrapper ${
            promotionsId === "promotions-carousel_1"
              ? "grid-x grid-margin-x medium-up-6"
              : translate3d
          }`}
        >
          {items.map((item, index) => (
            <div className={`carousel-cell swiper-slide cell`} key={index}>
              <div className="height-setter">
                <div className="dynamic-height" style={{ paddingBottom: 106 }}>
                  <Link to={item.href} className="product-link">
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
                    <a
                      href={item.href}
                      className="btn btn-blue btn-sm btn-addtocart"
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {promotionsId === "promotions-carousel_2" && (
          <>
            <AiOutlineArrowLeft
              className={`swiper-button-prev swiper-button-black ${
                translate3d === "translate3d" ? "swiper-button-disabled" : ""
              }`}
              onClick={moveSection}
            />
            <AiOutlineArrowRight
              className={`swiper-button-next swiper-button-black  ${
                translate3d === "translate3d-2" ? "swiper-button-disabled" : ""
              }`}
              onClick={moveSection}
            />
          </>
        )}
      </div>
    </section>
  );
};
