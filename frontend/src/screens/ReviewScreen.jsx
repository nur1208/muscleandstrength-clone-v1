import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Filter } from "../components/Filter";
import { LoadingTwo } from "../components/LoadingTwo";
import { Reviews } from "../components/productScreen/Reviews";
import { UsersReview } from "../components/productScreen/UsersReview";
import { Product } from "../components/reviewScreen/Product";
import { Reviewing } from "../components/reviewScreen/Reviewing";
import { useAddBodyClass } from "../hooks/customAddBodyClass";
import { useGetPathName } from "../hooks/customGetPathName";

export const ReviewScreen = (props) => {
  require("../styles/ReviewScreen.css");
  const [isWriteMode, setIsWriteMode] = useState(false);

  useGetPathName(props.location.pathname + "/:The Ripper");

  useAddBodyClass("mnsreview-product-view");
  useAddBodyClass("layout-v3");

  const allReviews = useSelector((state) => state.getAllReviews);
  const { reviews } = allReviews;

  const limitToShowF = 3;
  return (
    <div id="main-wrap">
      <div className="aside aside-before">
        <Product />
      </div>
      <div className="main-content">
        {" "}
        <Reviews
          mainStyle={"product-reviews-summary"}
          specialBtn={true}
          setIsWriteMode={setIsWriteMode}
        />
        <LoadingTwo />
        {isWriteMode && <Reviewing />}
        {reviews.length > limitToShowF && <Filter />}
        <UsersReview viewMore={50} />
      </div>
    </div>
  );
};
