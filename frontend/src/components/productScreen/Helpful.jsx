import React from "react";

export const Helpful = ({ helpful, notHelpful }) => {
  return (
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
  );
};
