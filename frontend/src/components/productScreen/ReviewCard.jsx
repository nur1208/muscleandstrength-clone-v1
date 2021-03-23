import React from "react";
import { Rating } from "./Rating";
import { RatingList } from "./RatingList";
import { GiMuscleUp } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";
import Moment from "react-moment";

export const ReviewCard = ({
  userId,
  rating,
  ratingFavors,
  image,
  reviewingAs,
  content,
  helpful,
  notHelpful,
  createdAt,
  userGoal,
  isVerifiedBuyer,
}) => {
  return (
    <div
      className={`rID-${userId} customer-review-wrap`}
      data-metadata-loaded="true"
      key={userId}
    >
      <div className="review-rating-wrap">
        <div className="overall rating-wrap">
          <div className="rating-label-wrap">
            <span className="rating-label">Overall Rating</span>
          </div>
          <Rating mainStyle={"rate-stars"} ratingPercent={rating} />
        </div>
        <RatingList rated={ratingFavors} />
      </div>
      <div className="review-user-wrap">
        <div className="user-image">
          <img
            className=" lazyloaded"
            alt="User"
            src={
              image ||
              "https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/user-img.jpg"
            }
          />
        </div>
        <div className="user-name">{reviewingAs}</div>
        <div className="user-badge-wrap">
          {/* {badges.map((badge, index) => (
                        <div className="user-badge" key={index}>
                          <div className="badge-icon">
                            {badge === "Build Muscle" ? (
                              <GiMuscleUp className="icon" />
                            ) : badge === "verified buyer" ? (
                              <MdVerifiedUser className="icon" />
                            ) : null}
                          </div>
                          <div className="badge-label">{badge}</div>
                        </div>
                      ))} */}

          <div className="user-badge">
            {userGoal && (
              <>
                <div className="badge-icon">
                  <GiMuscleUp className="icon" />
                </div>
                <div className="badge-label">{userGoal}</div>
              </>
            )}
            {isVerifiedBuyer && (
              <>
                <div className="badge-icon">
                  <MdVerifiedUser className="icon" />
                </div>
                <div className="badge-label">Verified Buyer</div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="review-content-wrap">
        <div className="user-review">
          {content}
          <a href="#results-disclaimer">*</a>
        </div>
      </div>
      <div className="helpful-wrap" id="review-helpful-27713">
        <div className="question">Was this helpful?</div>
        <div className="response-wrap">
          You found this <span className="not-helpful">not </span>
          helpful
        </div>
        <div className="form">
          <button
            className="choice"
            id="review-helpful-link-27713"
            // onClick="reviews.helpfulReview(27713, 1); return false;"
          >
            Yes
          </button>
          <button
            className="choice"
            id="review-helpful-link-27713"
            // onClick="reviews.helpfulReview(27713, 0); return false;"
          >
            No
          </button>
          <button
            className="response-wrap change"
            id="review-vote-undo-link-27713"
            // onClick="reviews.undoReviewVote(27713); return false;"
          >
            Undo
          </button>
        </div>
        <div className="helpful-data">{`${helpful} of ${
          notHelpful + helpful
        } found this helpful`}</div>
      </div>
      <div className="review-meta-wrap">
        <abbr className="date timeago" title={createdAt}>
          <Moment fromNow>{createdAt}</Moment>
        </abbr>
        <div className="meta-button-wrap">
          <button
            className="report"
            id="review-report-link-73480"
            data-rid="73480"
          >
            Report
          </button>
        </div>
      </div>
      <div className="loading-message">
        <img
          className="lazyload"
          src="/images/ajax-loader.gif"
          alt="ajax-loader.gif"
        />
      </div>
    </div>
  );
};
