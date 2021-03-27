import React, { useEffect, useState } from "react";
import { Rating } from "./Rating";
import { RatingList } from "./RatingList";
import { GiMuscleUp } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";
import Moment from "react-moment";
import { LoadingTwo } from "../LoadingTwo";
import { Reporting } from "./Reporting";
import { Helpful } from "./Helpful";
import { useSelector } from "react-redux";

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
  const [isReportOn, setIsReportOn] = useState(false);

  const userSingIn = useSelector((state) => state.userSingIn);
  const {
    userInfo: { _id },
  } = userSingIn;

  useEffect(() => {
    console.log(_id);
    console.log(userId);
    console.log(_id !== userId);
  }, [_id, userId]);
  return (
    <div
      className={`rID-${userId} customer-review-wrap ${
        isReportOn ? "report-on" : ""
      }`}
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
      {userId !== _id && <Helpful helpful={helpful} notHelpful={notHelpful} />}
      <div className="review-meta-wrap">
        <abbr className="date timeago" title={createdAt}>
          <Moment fromNow>{createdAt}</Moment>
        </abbr>
        <div className="meta-button-wrap">
          <button
            className="report"
            id="review-report-link-73480"
            data-rid="73480"
            onClick={() => setIsReportOn(true)}
          >
            Report
          </button>
        </div>
      </div>
      <LoadingTwo />
      <Reporting setIsReportOn={setIsReportOn} />
    </div>
  );
};
