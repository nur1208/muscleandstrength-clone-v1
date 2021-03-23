import React, { useState } from "react";
import { Filter } from "../components/Filter";
import { LoadingTwo } from "../components/LoadingTwo";
import { Reviews } from "../components/productScreen/Reviews";
import { UsersReview } from "../components/productScreen/UsersReview";
import { Product } from "../components/reviewScreen/Product";
import { Reviewing } from "../components/reviewScreen/Reviewing";
import { useAddBodyClass } from "../hooks/customAddBodyClass";

export const ReviewScreen = () => {
  require("../styles/ReviewScreen.css");
  const [isWriteMode, setIsWriteMode] = useState(false);

  useAddBodyClass("mnsreview-product-view");
  useAddBodyClass("layout-v3");
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
        <Filter />
        <UsersReview viewMore={50} />
      </div>
    </div>
  );
};
