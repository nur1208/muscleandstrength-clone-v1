import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  BaseText,
  BoxBreadcrumbs,
  BoxFreeShipping,
  BoxTitle,
  Breadcrumb,
  FreeShippingBlock,
  Icon,
  Text,
  TitleBlockGrid,
} from "../../styledComponents/searchScreen/TitleBlockSC";

export const TitleBlock = () => {
  const productSearch = useSelector((state) => state.productSearch);
  const { query } = productSearch;
  return (
    <TitleBlockGrid id="TitleBlockGrid">
      <BoxBreadcrumbs id="BoxBreadcrumbs">
        <Breadcrumb id="Breadcrumb">
          {" "}
          <Link
            to="https://www.muscleandstrength.com/"
            title="Home"
            id="bc-home"
            class="breadcrumb-0"
          >
            Home
          </Link>{" "}
          &gt; Search results for: '{query}'
        </Breadcrumb>
      </BoxBreadcrumbs>

      <BoxFreeShipping>
        <FreeShippingBlock>
          <div>
            <Icon>
              <svg
                id="icon-airplane"
                style={{ width: "1rem", height: "1rem" }}
                viewBox="0 0 100 100"
              >
                <path
                  d="M29.5 62l18.1-5.5 6.1 39.6 12.7-3.8 4.8-42.9 17.1-5.2c4.9-1.5 8.1-5.6 7-9-1.1-3.5-5.9-5.1-10.9-3.6l-17.1 5.2L39.5 3.7 26.9 7.5l16.9 36.4-18.1 5.5-16.5-8.9-4.4 8.3L15 59.5l-2.5 14.6 8.3 4.4L29.5 62z"
                  fill="#059"
                ></path>
              </svg>
            </Icon>
            <BaseText>{"   "} We Ship To Spain</BaseText>
            <Text> {"   "}View Details</Text>
          </div>
        </FreeShippingBlock>
      </BoxFreeShipping>
      <BoxTitle>Search Results</BoxTitle>
    </TitleBlockGrid>
  );
};
