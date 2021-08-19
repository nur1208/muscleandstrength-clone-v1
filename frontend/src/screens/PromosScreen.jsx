import React from "react";
import { useSelector } from "react-redux";
import { BrandHeader } from "../components/brandScreen/BrandHeader";
import { ListProducts } from "../components/ListProducts";
import { StoreSectionSwiper } from "../components/reactSwipeableTest/Swiper-StoreSection/StoreSectionSwiper";
import { TitleBlock } from "../components/searchScreen/TitleBlock";
import { topDeal } from "../data/storeData";
import { filters } from "../data/storeFilters";
import { SearchMainContainer } from "./styledCompo/searchScreen";

export const PromosScreen = () => {
  const productSearch = useSelector(
    (state) => state.productSearch
  );

  return (
    <SearchMainContainer id="SearchMainContainer">
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: "1300px",
        }}
      >
        <TitleBlock
          title="Deals & Coupons"
          path="store/brans/MuscleTech"
        />
        {/* <BrandHeader /> */}
        {/* <StoreSectionSwiper
          sectionId={"top-rated-products"}
          title={"his Week's Top Deals"}
          items={topDeal}
        /> */}

        <ListProducts
          hasDealAlerts={true}
          title="All Products"
          filtersData={filters}
          catalogData={productSearch}
          isTitleDisable={true}
          isOptionsBtn={true}
          showingTitle="Showing 60 of 1156 products"
        />
      </div>
    </SearchMainContainer>
  );
};
