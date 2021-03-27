import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../actions/reviewAction";
import { LoadingTwo } from "../LoadingTwo";
import { ReviewCard } from "./ReviewCard";

export const UsersReview = ({ viewMore, hasViewAll }) => {
  require("../../styles/usersReview.css");

  const allReviews = useSelector((state) => state.getAllReviews);
  const { reviews, limit, loading } = allReviews;

  // const reviews = [];

  const productOne = useSelector((state) => state.productOne);
  const {
    product: { _id },
  } = productOne;

  const reviewAdd = useSelector((state) => state.reviewAdd);
  const { review: newReview } = reviewAdd;

  const dispatch = useDispatch(null);

  const handleAddMore = () => {
    dispatch(getAllReviews(_id, limit + viewMore));
  };

  useEffect(() => {
    // this because limit's default value is 10 so when viewMore not equal 10
    //  change the limit the viewMore passed  value for example in ReviewScreen
    // viewMore value is 50 not 10.
    if (limit !== viewMore) dispatch(getAllReviews(_id, viewMore));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="allReviews">
        <div className="review-wrapper" data-pagesize="5">
          {newReview && <ReviewCard {...newReview} />}
          {reviews.map((review, index) => {
            return <ReviewCard {...review} key={index} />;
          })}
        </div>
        {/* <div className="viewmore-loadingmessage" id="viewmore-loadingmessage">
          <img
            className="lazyload"
            style={{ width: 2 }}
            src="/images/ajax-loader.gif"
            alt="ajax-loader.gif"
          />
        </div> */}
        <LoadingTwo isDisplay={loading} />
        {reviews.length >= viewMore && (
          <div className="button-columns btn-row-mobile">
            {viewMore && (
              <button
                className="btn btn-right btn-blue"
                id="load-more-reviews"
                onClick={handleAddMore}
              >
                View {viewMore} More Reviews
              </button>
            )}
            {hasViewAll && (
              <Link
                to="/store/review"
                className="btn ellipsis  btn-left btn-blue"
                href="/store/reviews/brands/jnx-sports/ripper.html"
              >
                View All Reviews
              </Link>
            )}
          </div>
        )}
      </div>
      {reviews.length !== 0 && (
        <>
          <div id="results-disclaimer">
            * Muscle &amp; Strength does not imply any medical claims from this
            review. There are no guarantees of specific results and results may
            vary.
          </div>
          <div className="fdaWarning">
            * These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease.
          </div>
        </>
      )}
    </>
  );
};
