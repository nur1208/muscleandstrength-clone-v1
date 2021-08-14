import React from "react";
import { useEffect } from "react";
import { FaShare } from "react-icons/fa";
import { useSelector } from "react-redux";

export const ProductHeader = () => {
  // const productOne = useSelector((state) => state.productOne);
  // const { product, loading } = productOne;
  // const {
  //   features,
  //   name,
  //   image,
  //   brand,
  //   description,
  //   rating,
  //   // numReviews,
  // } = product;

  const productV2Store = useSelector(
    (state) => state.productV2Store
  );

  const { product, loading } = productV2Store;

  const {
    features,
    name,
    image,
    brand: brandO,
    description,
    rating,
  } = product;

  const { name: brand } = brandO;

  const getAllReviews = useSelector(
    (state) => state.getAllReviews
  );
  const { totalReviews } = getAllReviews;

  // useEffect(() => {
  //   console.log(image);
  //   console.log(image.startsWith("/"));
  // }, [image]);

  return loading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : (
    <div className="product-header">
      <div className="ship-to-block tooltip tooltipstered">
        <div className="ship-to-wrapper">
          <span className="svg_flag svg_flag-es"></span>
          <i className="svg-express-delivery svg-icon"></i>
        </div>
      </div>
      <div className="product-image">
        <img
          id="image"
          className=" lazyloaded"
          src={image.startsWith("/") ? image : "/" + image}
          // TODO update the image in the database
          // src={"/images/iso100_5lb_frpebbles_1.webp"}
          alt="The Ripper!"
          title="The Ripper!"
        />
      </div>
      <div className="product-title-wrap">
        <h1 className="product-title">{name} </h1>
      </div>
      <div className="product-info">
        <span
          className="brand"
          itemProp="brand"
          itemScope=""
          itemType="http://schema.org/Brand"
        >
          A{" "}
          <a itemProp="url" href="/store/brands/jnx-sports">
            <span itemProp="name">{brand}</span>
          </a>{" "}
          Product{" "}
        </span>
        <div className="tagline">{description}</div>
        <ul className="product-features">
          {features &&
            features.map((feature, index) => (
              <li key={index}>- {feature}</li>
            ))}
        </ul>
      </div>
      <div className="product-data">
        <a href="#reviews" className="review-status-button">
          <div className="product-rating-wrap">
            <div className="rating-box">
              <div className="star-overlay gray-bg"></div>
              <div
                className="rating"
                style={{ width: `${rating}%` }}
              ></div>
            </div>
          </div>
          <span className="button-text">
            {totalReviews}{" "}
            <span className="button-text-label">Reviews</span>
          </span>
        </a>
        <div className="product-share-btn addthis_toolbox">
          <a
            className="addthis_button_more at300b"
            target="_blank"
            title="More"
            href="/someWhere"
          >
            <div className="icon-wrap">
              <FaShare style={{ width: "1em", height: "1em" }} />
            </div>
            <span className="button-text">Share</span>
          </a>
        </div>
      </div>
    </div>
  );
};
