import React from "react";
import { productDeals } from "../../data/TodaysDealsData";

export const TodaysDeals = () => {
  return (
    <div className="todays-deals clearfix">
      <h2 className="hstyle-two">
        Supplement Deals{" "}
        <a href="/store/promos.html" className="inner-link">
          View all 600+ deals
        </a>
      </h2>
      <ul className="product-grid-4up">
        {productDeals.map((product) => {
          return (
            <li className="item id-1" key={product.id}>
              <div className="inner-wrap">
                <div className="grid-product-header">
                  <h4 className="product-name">
                    <a href={product.hrefV}>{product.name}</a>
                  </h4>
                  <div className="promoLabel">
                    <span className="label success">{product.promo}</span>
                  </div>
                </div>
                <div className="product-image">
                  <a href={product.hrefV} title={product.name}>
                    <img src={product.image} alt={product.name} />
                  </a>
                </div>
                <div className="prodDataWrap">
                  <a
                    href={product.hrefV}
                    title={product.name}
                    className="product-link"
                  >
                    <div className="price-box">
                      <span className="price">SEK{product.price}</span>{" "}
                    </div>
                  </a>
                </div>
              </div>
            </li>
          );
        })}
        {/* <li className="item id-1">
          <div className="inner-wrap">
            <div className="grid-product-header">
              <h4 className="product-name">
                <a href="https://www.muscleandstrength.com/store/primeval-labs-apeshit-cutz.html">
                  Primeval Labs APESH*T Cutz, 50sv
                </a>
              </h4>
              <div className="promoLabel">
                <span className="label success">Buy 1 Get 1 FREE</span>
              </div>
            </div>
            <div className="product-image">
              <a
                href="https://www.muscleandstrength.com/store/primeval-labs-apeshit-cutz.html"
                title="Primeval Labs APESH*T Cutz, 50sv"
              >
                <img
                  src="https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/167x/9df78eab33525d08d6e5fb8d27136e95/u/n/untamed-cutz-palmer_1024x1024_2x_1.jpg"
                  alt="Primeval Labs APESH*T Cutz, 50sv"
                />
              </a>
            </div>
            <div className="prodDataWrap">
              <a
                href="https://www.muscleandstrength.com/store/primeval-labs-apeshit-cutz.html"
                title="Primeval Labs APESH*T Cutz, 50sv"
                className="product-link"
              >
                <div className="price-box">
                  <span className="price">SEK261.91</span>{" "}
                </div>
              </a>
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
};
