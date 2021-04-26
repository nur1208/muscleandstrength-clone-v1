import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { helpfulFunction } from "../../actions/reviewAction";

export const Helpful = ({ helpful, notHelpful }) => {
  const dispatch = useDispatch(null);

  const YEAS = 1;
  const NO = 0;

  const handleHelpful = (type) => {
    const _id = "604b733f1ffe9b039cfbb3da";
    dispatch(helpfulFunction(_id, type));
  };

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
          onClick={() => handleHelpful(YEAS)}
        >
          Yes
        </button>
        <button
          className="choice"
          id="review-helpful-link-27713"
          onClick={() => handleHelpful(NO)}
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
