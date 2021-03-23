import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useAddBodyClass } from "../hooks/customAddBodyClass";
import { useGetPathName } from "../hooks/customGetPathName";

export const LogoutSuccessScreen = (props) => {
  require("../styles/LogoutSuccessScreen.css");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPathName(props.location.pathname));
  // }, [dispatch, props.location.pathname]);

  useGetPathName(props.location.pathname);

  useAddBodyClass("col1-wide");

  return (
    <main id="main-wrapper">
      <Helmet>
        <title>Logout</title>
      </Helmet>
      <article className="before-content"></article>
      <article className="content">
        <div className="logout-container">
          <section className="logout-message text-center">
            <h1 className="page-title">You're Logged Out</h1>
            <p>
              <Link className="btn btn-sm" to="/store/customer/account/login/">
                Log back in
              </Link>
            </p>
          </section>
          <section className="more-on-mns">
            <div className="section-title">Looking For More?</div>
            <div className="grid-x grid-padding-x grid-padding-y text-center">
              <div className="cell small-4 bp600-2">
                <a href="/workout-routines">
                  {/* <svg style="width:40px; height:40px;">
                    <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-nav-workouts"></use>
                  </svg> */}
                  <img
                    src="/images/nav-workouts.png"
                    alt="nav-workouts.png"
                    className="icon"
                  />
                  <h4>Workouts</h4>
                </a>
              </div>
              <div className="cell small-4 bp600-2">
                <a href="/expert-guides">
                  <img
                    src="/images/nav-expert-guides.png"
                    alt="nav-expert-guides.png"
                    className="icon"
                  />
                  <h4>Expert Guides</h4>
                </a>
              </div>
              <div className="cell small-4 bp600-2">
                <a href="/videos">
                  <img
                    src="/images/nav-videos.png"
                    alt="nav-videos.png"
                    className="icon"
                  />
                  <h4>Videos</h4>
                </a>
              </div>
              <div className="cell small-4 bp600-2">
                <a href="/tools">
                  <img
                    src="/images/nav-tools.png"
                    alt="nav-tools.png"
                    className="icon"
                  />
                  <h4>Fitness Tools</h4>
                </a>
              </div>
              <div className="cell small-4 bp600-2">
                <a href="/diet-plans">
                  <img
                    src="/images/nav-diet-plans.png"
                    alt="nav-diet-plans.png"
                    className="icon"
                  />
                  <h4>Diet Plans</h4>
                </a>
              </div>
              <div className="cell small-4 bp600-2">
                <a href="/store">
                  <img
                    src="/images/nav-store.png"
                    alt="nav-store.png"
                    className="icon"
                  />
                  <h4>M&amp;S Store</h4>
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};
