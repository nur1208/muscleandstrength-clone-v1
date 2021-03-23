import React from "react";
import { contents } from "../../data/NewData";

export const New = () => {
  return (
    <div className="new clearfix">
      <h2 className="hstyle-two">
        New At Muscle &amp; Strength{" "}
        <a href="/new" className="inner-link">
          View all new
        </a>
      </h2>
      <div className="content-grid-3up">
        <div className="view view-newest-content-by-type view-id-newest_content_by_type view-display-id-posted_in view-dom-id-b09fe4ed35c3f65f72a8c5aea31a8d3d">
          <div className="view-content">
            {contents.map((content, index) => {
              return (
                <div className="item" key={index}>
                  <div className="inner-wrap">
                    <a
                      href={content.hrefV}
                      alt={content.title}
                      title={content.title}
                    >
                      <div className="nodeImgWrap">
                        <div className="nodeImg ">
                          <img
                            className=" lazyloaded"
                            width="400"
                            height="250"
                            alt={content.imageAlt}
                            src={content.image}
                          />{" "}
                        </div>
                      </div>
                      <div className="nodeData">
                        <div className="nodeTitle">{content.title} </div>
                      </div>
                    </a>
                  </div>
                  <div className="stats-wrap"></div>
                </div>
              );
            })}
            {/* <div className="item">
              <div className="inner-wrap">
                <a
                  href="/workouts/single-pair-dumbbell-bodyweight-workout"
                  alt="4 Day Dumbbell and Bodyweight Fat Loss Workout"
                  title="4 Day Dumbbell and Bodyweight Fat Loss Workout"
                >
                  <div className="nodeImgWrap">
                    <div className="nodeImg ">
                      <img
                        className=" lazyloaded"
                        width="400"
                        height="250"
                        alt="Muscular man performing dumbell bicep curls."
                        src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/field/image/workout/dumbbell_bodyweight_workout_-_400x250.jpg?itok=O0NyZ5Zz"
                      />{" "}
                    </div>
                  </div>
                  <div className="nodeData">
                    <div className="nodeTitle">
                      4 Day Dumbbell and Bodyweight Fat Loss Workout{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
