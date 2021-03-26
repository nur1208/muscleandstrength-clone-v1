import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReport } from "../../actions/reviewAction";

export const Reporting = ({ setIsReportOn }) => {
  const [reportText, setReportText] = useState("");
  const [isReported, setIsReported] = useState(false);

  const dispatch = useDispatch(null);

  const handleSubmit = () => {
    console.log(reportText);
    dispatch(
      addReport({
        reviewId: "604b733f1ffe9b039cfbb3da",
        userId: "5fef1d35db624d3258c938c7",
        productId: "603cd94f39e7893b1cb3e4ed",
        userName: "nur",
        content: reportText,
      })
    );
    setIsReported(true);
    setIsReportOn(false);
    setTimeout(() => {
      setIsReported(false);
    }, 5000);
  };

  return (
    <>
      <div id="review-report-49293" className="review-report active">
        <form id="review-report-form-49293">
          <div className="invalid-message message red"></div>
          <h4>Report to Muscle &amp; Strength Staff</h4>
          <input type="hidden" name="review_id" value="49293" />
          <div className="report-form-add">
            <div className="expandingArea text-area active">
              <pre>
                <span></span>
                <br />
              </pre>
              <textarea
                name="message"
                id="message_field"
                placeholder="Please describe the nature of the offense."
                required
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
              ></textarea>
            </div>
            <button
              className="btn basic-loading btn-blue"
              onClick={handleSubmit}
              type="button"
              title="Submit Report"
            >
              <span className="init">Submit Report</span>
              <span className="loading">
                <span
                  className="svg-wrap"
                  //   style="line-height: 0em;position: relative;top: 0.1em;"
                >
                  {/* <svg style="width:1em; height:1em;">
                    <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-update-white"></use>
                  </svg> */}
                </span>{" "}
                Sending...
              </span>
            </button>
          </div>
        </form>
      </div>
      <div
        id="review-report-message-67881"
        class="review-report-message"
        style={{ display: isReported ? "block" : "none" }}
      >
        <h4>Thank you for your feedback!</h4>
        <p>
          Your reports help us ensure our reviews are appropriate and
          informative.
        </p>
      </div>
    </>
  );
};
