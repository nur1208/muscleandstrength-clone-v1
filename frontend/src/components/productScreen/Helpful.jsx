import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHelpfulness, helpfulFunction } from "../../actions/reviewAction";

export const Helpful = ({
  helpful,
  notHelpful,
  _id,
  isHelpfulEvaluate,
  helpfulObject,
}) => {
  const dispatch = useDispatch(null);

  const YEAS = true;
  const NO = false;

  const userSingIn = useSelector((state) => state.userSingIn);

  const {
    userInfo: { evaluateHelpfulness, _id: userId },
  } = userSingIn;

  const productOne = useSelector((state) => state.productOne);

  const {
    product: { _id: productId },
  } = productOne;

  const handleHelpful = (type) => {
    // const _id = "604b733f1ffe9b039cfbb3da";
    dispatch(helpfulFunction(_id, type, userId, productId));
  };
  // ${
  //       evaluateHelpfulness.map(_id) ? "response-yes" : ""
  //     }`

  const handleUndo = () => {
    dispatch(
      deleteHelpfulness(helpfulObject._id, _id, helpfulObject.isHelpful)
    );
  };
  return (
    <div
      className={`helpful-wrap ${isHelpfulEvaluate ? "response-yes" : ""}`}
      id={`review-helpful-${_id}`}
    >
      <div className="question">Was this helpful?</div>
      <div className="response-wrap">
        You found this{" "}
        {!helpfulObject.isHelpful && <span className="not-helpful">not </span>}
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
          onClick={handleUndo}
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
