import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../actions/productsAction";
import { Features } from "../components/productScreen/Features";
import { ProductAside } from "../components/productScreen/ProductAside";
import { ProductHeader } from "../components/productScreen/ProductHeader";
import { ProductInfo } from "../components/productScreen/ProductInfo";
import { Recommended } from "../components/productScreen/Recommended";
import { Reviews } from "../components/productScreen/Reviews";
import { UsersReview } from "../components/productScreen/UsersReview";
import { features } from "../data/featuresData";
import { items } from "../data/RecommendedData";
import { useAddBodyClass } from "../hooks/customAddBodyClass";
import { DealsSection } from "./DealsSection";
import { LoadingScreen } from "../components/LoadingScreen";
import { MessageBox } from "../components/MessageBox";
import { getAllReviews, getTotalReviews } from "../actions/reviewAction";

export const ProductScreen = (props) => {
  require("../styles/product.css");
  useAddBodyClass("product-layout");

  const productId = props.match.params.id;
  const dispatch = useDispatch(null);

  useEffect(() => {
    dispatch(getOneProduct(productId));
    dispatch(getAllReviews(productId, 10));
    dispatch(getTotalReviews(productId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, productId]);

  const productOne = useSelector((state) => state.productOne);
  const { loading, error } = productOne;

  return (
    <>
      {loading ? (
        <LoadingScreen msg={"Loading Product"} />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div id="main-wrap">
          <div className="main-content">
            <div className="message-wrap">
              <div id="messages_product_view"></div>
            </div>
            <ProductHeader />
            <Features items={features} />
            <DealsSection />
          </div>
          {!loading && <ProductAside />}

          <div className="main-content continued">
            {/* <Recommended items={items} /> */}
            <ProductInfo />
            <Reviews title={"Reviews"} />
            <UsersReview viewMore={10} hasViewAll={true} />
          </div>
        </div>
      )}
    </>
  );
};
