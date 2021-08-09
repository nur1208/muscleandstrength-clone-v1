import React, { useEffect, useState } from "react";
import {
  BlockContentFilters,
  SortingBar,
  OptionWrap,
  Option,
  InnerWrap,
  OptionToggle,
  Inner,
  CategoryList,
  FilterItem,
  CaretDown,
  SortingBarData,
  ShortListOn,
  SolrCat,
  RatingFilterText,
  ShowBtn,
} from "../../styledComponents/searchScreen/contentFiltersSC";
import { OptionsBtn } from "../OptionsBtn";
import { RatingStars } from "../RatingStars";
import { FilterProcess } from "./FilterProcess";

export const ContentFilters = ({ filtersData }) => {
  const [isShowItems, setIsShowItems] = useState([]);
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    const newShowArray = Array(filtersData.length).fill(true);

    setIsShowItems(newShowArray);
  }, [filtersData.length]);

  return (
    <BlockContentFilters id="BlockContentFilters">
      <SortingBar id="SortingBar">
        <OptionsBtn />
      </SortingBar>
      {filtersData.map((filter, index) => (
        <CategoryList id="CategoryList">
          <FilterItem id="FilterItem">
            {filter.title}{" "}
            <CaretDown
              // size="35px"
              id="CaretDown"
              isShowItems={isShowItems[index]}
              // style={
              //   isShowItems[index]
              //     ? { transform: "rotate(0)", top: "-14px" }
              //     : {
              //         transform: "rotate(-90deg)",
              //         top: "7px",
              //       }
              // }
              onClick={() =>
                setIsShowItems(
                  isShowItems.map((item, inx) => {
                    if (index === inx) {
                      return !item;
                    }
                    return item;
                  })
                )
              }
            />
          </FilterItem>
          <SortingBarData id="SortingBarData" isShowItems={isShowItems[index]}>
            <ShortListOn id="ShortListOn" isShowItems={isShowItems[index]}>
              {filter.items.map((item, index) => (
                <li
                  key={index}
                  style={
                    index > 4 && !isShowMore
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  <a
                    href={item.link}
                    style={
                      item.ratingPercentage && {
                        display: "flex",
                        alignItems: "center",
                      }
                    }
                  >
                    <SolrCat />
                    {item.title ? (
                      item.title
                    ) : item.price ? (
                      <>
                        <span class="price">€{item.price.start}</span> -{" "}
                        <span class="price">€{item.price.end}</span> (1)
                      </>
                    ) : item.ratingPercentage ? (
                      <>
                        <RatingStars ratingPercentage={item.ratingPercentage} />
                        <RatingFilterText>{"& "}up (1)</RatingFilterText>
                      </>
                    ) : null}
                  </a>
                </li>
              ))}
              {filter.items.length > 5 && (
                <ShowBtn onClick={() => setIsShowMore(!isShowMore)}>
                  {isShowMore ? "Show Less -" : "Show more +"}
                </ShowBtn>
              )}
            </ShortListOn>
          </SortingBarData>
        </CategoryList>
      ))}
      <FilterProcess />
    </BlockContentFilters>
  );
};
