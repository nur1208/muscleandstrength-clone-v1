import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPathName } from "../actions/navBlockActions";
import { articleGroup } from "../data/articleGroupData";
import { ArticleGroup } from "../components/homeScreen/ArticleGroup";
import { HeaderRightBlock } from "../components/homeScreen/HeaderRightBlock";
import { New } from "../components/homeScreen/New";
import { Slider } from "../components/homeScreen/Slider";
import { TodaysDeals } from "../components/homeScreen/TodaysDeals";
import { Helmet } from "react-helmet-async";
import { useAddBodyClass } from "../hooks/customAddBodyClass";
import { sliderData } from "../data/SliderData";

export const HomeScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPathName(props.location.pathname));
  }, [dispatch, props.location.pathname]);

  useAddBodyClass("front");

  require("../styles/home.css");

  return (
    <>
      <div id="main-wrap">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div ame="header-content">
          <div ame="row">
            <Slider sliderData={sliderData} sliderStyle={"section"} />
            <HeaderRightBlock />
          </div>
        </div>
        <div ame="main-content wide-format">
          <div ame="table"></div>
          <TodaysDeals />
          <New />
          {articleGroup.map((group, index) => (
            <ArticleGroup {...group} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
