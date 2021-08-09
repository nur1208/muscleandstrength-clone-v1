import React from "react";
import { useSelector } from "react-redux";
import { BrandHeader } from "../components/brandScreen/BrandHeader";
import { ListProducts } from "../components/ListProducts";
import { StoreSectionSwiper } from "../components/reactSwipeableTest/Swiper-StoreSection/StoreSectionSwiper";
import { TitleBlock } from "../components/searchScreen/TitleBlock";
import { topDeal } from "../data/storeData";
import { filters } from "../data/storeFilters";
import { SearchMainContainer } from "./styledCompo/searchScreen";

export const BrandScreen = () => {
  // const products = useSelector((state) => state.products);
  const productSearch = useSelector(
    (state) => state.productSearch
  );

  // const { topDeals } = products;
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
          title="MuscleTech"
          path="store/brans/MuscleTech"
        />
        <BrandHeader />
        <StoreSectionSwiper
          sectionId={"top-rated-products"}
          title={"his Week's Top Deals"}
          items={topDeal}
        />

        <ListProducts
          title="All Products"
          filtersData={filters}
          catalogData={productSearch}
          isOptionsBtn={true}
          showingTitle="Showing 60 of 91 products"
        />
      </div>
    </SearchMainContainer>
  );
};
