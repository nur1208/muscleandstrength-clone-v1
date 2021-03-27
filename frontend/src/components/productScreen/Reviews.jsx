import React from "react";
import { Rating } from "./Rating";
import { BsPencil } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { Link } from "react-router-dom";
import { RatingList } from "./RatingList";
import { useDispatch, useSelector } from "react-redux";
import { openDialogLogin } from "../../actions/dialogLoginActions";

export const Reviews = ({ mainStyle, title, specialBtn, setIsWriteMode }) => {
  const dispatch = useDispatch(null);
  // const graphData = [
  //   { starts: "5", percentage: "79%" },
  //   { starts: "4", percentage: "16%" },
  //   { starts: "3", percentage: "4%" },
  //   { starts: "2", percentage: "0%" },
  //   { starts: "1", percentage: "1%" },
  // ];

  // const topRated = [
  //   { percentage: 98, name: "Dark Grape (4.9/5 )" },
  //   { percentage: 97, name: "Blue Raspberry (4.9/5 )" },
  //   { percentage: 96, name: "Fruit Punch (4.8/5 )" },
  //   { percentage: 95, name: "Raspberry Lemonade (4.8/5 )" },
  //   { percentage: 95, name: "Blood Orange (4.8/5 )" },
  //   { percentage: 95, name: "Sour Strawberry (4.8/5  )" },
  //   { percentage: 94, name: "Razor Lime (4.7/5 )" },
  //   { percentage: 94, name: "Watermelon Candy (4.7/5 )" },
  //   { percentage: 93, name: "Pineapple Shred (4.7/5 )" },
  //   { percentage: 91, name: "Pink Mango Slice (4.6/5 )" },
  //   { percentage: 91, name: "Cherry Limeade (4.6/5 )" },
  //   { percentage: 86, name: "Pixie Sticks (4.3/5 )" },
  // ]; 603cd94f39e7893b1cb3e4ed

  // useEffect(() => {
  //   dispatch(getOneProduct("603cd94f39e7893b1cb3e4ed"));
  // }, [dispatch]);

  const productOne = useSelector((state) => state.productOne);
  const {
    product: { topRated, graphData, rating },
  } = productOne;

  const userSingIn = useSelector((state) => state.userSingIn);
  const { userInfo } = userSingIn;

  const getAllReviews = useSelector((state) => state.getAllReviews);
  const { totalReviews, totalVerbifiedReviews } = getAllReviews;

  const handleWriteReview = () => {
    if (!userInfo) {
      dispatch(openDialogLogin());
    } else {
      setIsWriteMode(true);
    }
  };
  return (
    <div className={mainStyle || "product-reviews-section"}>
      {title && (
        <div id="reviews" className="section-title">
          {title}
        </div>
      )}

      <div className="section-inner-wrap">
        <div className="overall-rating-subsection">
          <div className="subsection-inner-wrap">
            <div className="subsection-title">Overall Rating</div>
            <Rating
              ratingPercent={rating}
              mainStyle={"rate-stars"}
              label={"4.7 out of 5 stars"}
            />
            <div className="review-data-summary">
              <div className="item">
                <BsPencil className="icon" /> Reviews ({totalReviews})
              </div>
              <div className="item">
                <MdVerifiedUser className="icon green" /> Verified Buyers (
                {totalVerbifiedReviews})
              </div>
            </div>
          </div>
        </div>
        <div className="review-graph-subsection">
          <div className="subsection-inner-wrap">
            <div className="subsection-title">Review Graph</div>
            <ul className="bar-graph-wrap">
              {graphData &&
                graphData.map((item, index) => (
                  <React.Fragment key={index}>
                    <li>
                      <div className="stars">
                        {item.starts}{" "}
                        <span className="upper font-s-small">star</span>
                      </div>
                      <div className="bar-graph">
                        <div
                          className="bar"
                          style={{ width: item.percentage }}
                        ></div>
                      </div>
                      <div className="percentage">{item.percentage + "%"}</div>
                    </li>
                    <br />
                  </React.Fragment>
                ))}
            </ul>
          </div>
        </div>
        <div className="top-rated-flavors-subsection">
          <div className="subsection-inner-wrap">
            <div className="subsection-title">Top Rated Flavors</div>
            <RatingList rated={topRated} />
          </div>
        </div>
        <div className="review-utility-bar">
          {specialBtn ? (
            <button className="btn btn-lg btn-blue" onClick={handleWriteReview}>
              <BsPencil className="icon" /> Write Review
            </button>
          ) : (
            <Link to="/store/review" className="btn btn-lg btn-blue">
              <BsPencil className="icon" /> Write Review
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
