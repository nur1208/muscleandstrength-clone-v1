import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { getPathName } from "../actions/navBlockActions";
import { getProductsTopDeals } from "../actions/productsAction";
import { Slider } from "../components/homeScreen/Slider";
import { LoadingScreen } from "../components/LoadingScreen";
import { MessageBox } from "../components/MessageBox";
import { StoreSectionSwiper } from "../components/reactSwipeableTest/Swiper-StoreSection/StoreSectionSwiper";
import { SliderV2 } from "../components/SliderV2";
import { Brands } from "../components/storeScreen/Brands";
import { ContentBlock } from "../components/storeScreen/ContentBlock";
import { MerchBanner } from "../components/storeScreen/MerchBanner";
import { QuickNav } from "../components/storeScreen/QuickNav";
import { StoreSection } from "../components/storeScreen/StoreSection";
import { sliderDataStore } from "../data/SliderData";
import { useAddBodyClass } from "../hooks/customAddBodyClass";

export const StoreScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPathName(props.location.pathname));
  }, [dispatch, props.location.pathname]);

  useAddBodyClass("col1-wide");

  useEffect(() => {
    dispatch(getProductsTopDeals());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  const {
    topDeals,
    topRated,
    trending,
    brands,
    storeContents,
    loading,
    error,
  } = products;

  require("../styles/store.css");

  const isNotPC = useMediaQuery({ maxWidth: 1028 });

  useEffect(() => {
    if (isNotPC) console.log("not PC screen");
  }, [isNotPC]);

  return (
    <main id="main-wrapper">
      <Helmet>
        <title>
          Muscle & Strength Store: Supplements, Fitness Gear, Clothing & More!
        </title>
      </Helmet>
      <article className="content">
        {/* <Slider
          sliderData={sliderDataStore}
          sliderStyle={"store-section"}
          dotsStyle={"slick-dots-store"}
          sectionCenterStyle={"store-section-center"}
          hasPhoneImage={true}
        /> */}
        <SliderV2
          slidersData={sliderDataStore}
          hasPhoneImage={true}
          sliderStyle="mns-carousel"
        />
        <QuickNav />
        {loading ? (
          <LoadingScreen msg={"Loading Top Deals products"} />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : isNotPC ? (
          <StoreSectionSwiper
            sectionId={"top-rated-products"}
            title={"Top Rated Products"}
            items={topRated}
          />
        ) : (
          <StoreSection
            sectionId="top-deals"
            title="This Week's Top Deals"
            items={topDeals}
            promotionsId="promotions-carousel_1"
          />
        )}

        <MerchBanner
          idBanner={"merch-banner"}
          link={"/store/brands/primeval-labs"}
          image={"/images/primeval_banner_desktop.jpg"}
          imagePhone={"/images/primeval_banner_mobile.jpg"}
        />
        {loading ? (
          <LoadingScreen msg={"Loading Top rated products"} />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          // <StoreSection
          //   sectionId={"top-rated-products"}
          //   title={"Top Rated Products"}
          //   items={topRated}
          //   promotionsId="promotions-carousel_2"
          // />

          <StoreSectionSwiper
            sectionId={"top-rated-products"}
            title={"Top Rated Products"}
            items={topRated}
          />
        )}

        {loading ? (
          <LoadingScreen msg={"Loading Top rated products"} />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          // <StoreSection
          //   sectionId={"top-rated-products"}
          //   title={"Top Rated Products"}
          //   items={trending}
          //   promotionsId="promotions-carousel_2"
          // />
          <StoreSectionSwiper
            sectionId={"top-rated-products"}
            title={"Top Rated Products"}
            items={trending}
          />
        )}

        <MerchBanner
          idBanner={"mns-merch-banner"}
          link={"/store/rewards"}
          image={"/images/rewards_banner_desktop.jpg"}
          imagePhone={"/images/reward-mobile-slider.jpg"}
        />
        {loading ? (
          <LoadingScreen msg={"Loading brands"} />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Brands items={brands} />
        )}

        {loading ? (
          <LoadingScreen msg={"Loading store contents"} />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <ContentBlock items={storeContents} />
        )}
      </article>
    </main>
  );
};
