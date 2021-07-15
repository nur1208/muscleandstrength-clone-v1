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
import { RatingStars } from "../RatingStars";
import { FilterProcess } from "./FilterProcess";

export const ContentFilters = () => {
  const [isShowItems, setIsShowItems] = useState([]);
  const [isShowMore, setIsShowMore] = useState(false);

  const options = [
    {
      link: "https://www.muscleandstrength.com/store/search?___store=eu&amp;dir=asc&amp;order=sales_ranking&amp;q=The+Ripper",
      title: "Top Sellers",
    },
    {
      link: "https://www.muscleandstrength.com/store/search?___store=eu&amp;dir=asc&amp;order=price&amp;q=The+Ripper",
      title: "Price",
    },
    {
      link: "https://www.muscleandstrength.com/store/search?___store=eu&amp;dir=asc&amp;order=name&amp;q=The+Ripper",
      title: "Name",
    },
  ];

  const filters = [
    {
      title: "Category",
      items: [
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&cat=21&q=The+Ripper",
          title: "Fat Loss (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&cat=130&q=The+Ripper",
          title: "Thermogenic Fat Burners (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&cat=132&q=The+Ripper",
          title: "Appetite Suppressants (1)",
        },
      ],
    },
    {
      title: "Brand",
      items: [
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&amp;manufacturer=542&amp;q=The+Ripper",
          title: "JNX Sports (1)",
        },
      ],
    },
    {
      title: "Price",
      items: [
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&amp;price=20-30&amp;q=The+Ripper",
          price: { start: 20.0, end: 30.0 },
        },
      ],
    },
    {
      title: "Average Rating ",
      items: [
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&q=The+Ripper&review_rating_summary=4-0",
          ratingPercentage: 80,
          ratingText: "up (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&amp;q=The+Ripper&amp;review_rating_summary=3-0",
          ratingPercentage: 60,
          ratingText: "up (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&q=The+Ripper&review_rating_summary=2-0",
          ratingPercentage: 40,
          ratingText: "up (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&q=The+Ripper&review_rating_summary=1-0",
          ratingPercentage: 20,
          ratingText: "up (1)",
        },
      ],
    },
    {
      title: "Product Flavor ",
      items: [
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_flavor=Blood+Orange&q=The+Ripper",
          title: "Blood Orange (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_flavor=Blue+Raspberry&q=The+Ripper",
          title: "Blue Raspberry (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_flavor=Dark+Grape&q=The+Ripper",
          title: "Dark Grape (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_flavor=Fruit+Punch&q=The+Ripper",
          title: "Fruit Punch (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_flavor=Pineapple+Shred&q=The+Ripper",
          title: "Pineapple Shred (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_flavor=Pink+Mango&q=The+Ripper",
          title: "Pink Mango (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_flavor=Pixie+Sticks&q=The+Ripper",
          title: "Pixie Sticks (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_flavor=Raspberry+Lemonade&q=The+Ripper",
          title: "Raspberry Lemonade (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_flavor=Razor+Lime&q=The+Ripper",
          title: "Razor Lime (1)",
        },
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_flavor=Watermelon+Candy&q=The+Ripper",
          title: "Watermelon Candy (1)",
        },
      ],
    },
    {
      title: "Product Size ",
      items: [
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&product_size=30+Servings&q=The+Ripper",
          title: "30 Servings (1)",
        },
      ],
    },
    {
      title: "Form Factor ",
      items: [
        {
          link: "https://www.muscleandstrength.com/store/search?___store=eu&form_factor=458&q=The+Ripper",
          title: "Powder (1)",
        },
      ],
    },
  ];

  useEffect(() => {
    const newShowArray = Array(filters.length).fill(true);

    setIsShowItems(newShowArray);
  }, [filters.length]);

  return (
    <BlockContentFilters id="BlockContentFilters">
      <SortingBar id="SortingBar">
        <OptionWrap id="OptionWrap">
          {options.map((option, index) => (
            <Option id="Option" key={index}>
              <InnerWrap id="InnerWrap" href={option.link}>
                {option.title}
              </InnerWrap>
            </Option>
          ))}
        </OptionWrap>
        <OptionToggle id="OptionToggle">
          <Inner>
            <a href="https://www.muscleandstrength.com/store/search?___store=eu&amp;dir=desc&amp;order=position&amp;q=The+Ripper">
              {" "}
              ASC{" "}
              <svg
                id="icon-asc"
                viewBox="0 0 100 100"
                style={{
                  width: 18,
                  height: 18,
                  marginLeft: 5,
                  marginBottom: -5,
                }}
              >
                <path
                  fill="none"
                  stroke="#059"
                  stroke-width="11"
                  stroke-miterlimit="10"
                  d="M7.9 83.4h84.2M7.9 36.1H51M7.9 12.4h21M7.9 59.8h63.2"
                ></path>
              </svg>
            </a>
          </Inner>
        </OptionToggle>
      </SortingBar>
      {filters.map((filter, index) => (
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
