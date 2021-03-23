import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Rating } from "./Rating";

export const Recommended = ({ items }) => {
  const [translate3d, setTranslate3d] = useState("translate3d");
  const [viewBtnStyle, setViewBtnStyle] = useState(
    "recommended-products-section"
  );

  const productOne = useSelector((state) => state.productOne);
  const {
    product: { recommended },
  } = productOne;
  return (
    <div className={viewBtnStyle} /*style=""*/>
      <div className="section-title">
        Recommended For You
        <span
          className="expand-section-btn disable-swiper-btn"
          data-items="8"
          onClick={() =>
            setViewBtnStyle(
              viewBtnStyle.includes("disabled")
                ? "recommended-products-section"
                : "recommended-products-section disabled"
            )
          }
        >
          {viewBtnStyle.includes("disabled") ? "View less" : "View All (8)"}
        </span>
      </div>
      <div className="recommended-products-list recommended-swiper-container swiper-container-horizontal">
        <div
          className={"strandsRecs swiper-wrapper " + translate3d}
          tpl="prod_4"
          item="14821"
          id="SBSnode8441_0"
          //   style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);"
        >
          {recommended &&
            recommended.map((item, index) => (
              <a
                className={
                  "recommended-product swiper-slide " +
                  (item.extraStyle || " ") +
                  (viewBtnStyle.includes("disabled") ? "" : " width225")
                }
                href={item.link}
                // onclick="SBS.Tracking.onRecClick('9302','prod_4','2060349000766196019');return true;"
                // style={{ width: 225 }}
                key={index}
              >
                <div className="recommended-product-inner-wrap">
                  <img
                    className=" lazyloaded"
                    data-src="https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/150x/9df78eab33525d08d6e5fb8d27136e95/t/h/the-curse-bottle-render-fruit-punch_2_1.jpg"
                    src={item.image}
                    alt=""
                  />
                  <div className="recommended-product-name"> {item.name} </div>
                  <div className="recommended-product-review-wrap">
                    <Rating rating={item.rating} />
                    <div className="recommended-product-price">
                      {" "}
                      {item.priceString ? item.priceString : "€" + item.price}
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
      <div className="recommended-pagination-wrap">
        <button
          className="pagination-view-all btn disable-swiper-btn"
          data-items="8"
        >
          {viewBtnStyle.includes("disabled") ? "View less" : "View All (8)"}
        </button>
        <div className="recommended-pagination"></div>
      </div>
      {!viewBtnStyle.includes("disabled") && (
        <>
          <div
            className="recommended-products-prev arrow-prev arrow-btn"
            onClick={() => setTranslate3d("translate3d")}
          >
            ‹
          </div>

          <div
            className="recommended-products-next arrow-next arrow-btn"
            onClick={() => setTranslate3d("translate3d-2")}
          >
            ›
          </div>
        </>
      )}
    </div>
  );
};
