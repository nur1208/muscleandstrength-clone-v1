import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Product = () => {
  const productOne = useSelector((state) => state.productOne);
  const {
    product: { _id },
  } = productOne;
  return (
    <div className="product-wrap">
      <div className="image-wrap review-screen">
        <a href="/store/ripper.html">
          <img
            src="//cdn.muscleandstrength.com/store/media/catalog/product/cache/all/large_image/x450/602f0fa2c1f0d1ba5e241f914e856ff9/t/h/the-ripper-blood-orange-30-serve_2.jpg"
            alt="the-ripper-blood-orange-30-serve_2.jpg"
            style={{ width: 286 }}
          />
        </a>
      </div>
      <div className="info-wrap">
        <div className="product-name">
          <a href="/store/ripper.html">JNX Sports The Ripper</a>
        </div>
        <div className="brand-name">
          By: <a href="/store/brands/jnx-sports">JNX Sports</a>
        </div>
        <div className="product-text">
          The Ultimate Fast Acting, Full Strength Fat Burner!*
        </div>
        <Link to={`/store/${_id}`} className="btn btn-lg btn-blue">
          View Product
        </Link>
      </div>
    </div>
  );
};
