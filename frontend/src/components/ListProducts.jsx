import React from "react";
import {
  ListProductsTitle,
  Col2Container,
  Content,
  LeftSide,
  MainWrapper,
} from "../screens/styledCompo/searchScreen";
import { BlockNav } from "./searchScreen/BlockNav";
import { MobileTabs } from "./searchScreen/MobileTabs";
import { ResultContent } from "./searchScreen/ResultContent";

export const ListProducts = ({
  title,
  isTitleDisable,
  filtersData,
  catalogData,
  isOptionsBtn,
  showingTitle,
}) => {
  return (
    <MainWrapper id="MainWrapper">
      {!isTitleDisable && (
        <ListProductsTitle id="AllProducts">
          {title}
        </ListProductsTitle>
      )}
      <Col2Container id="Col2Container">
        <LeftSide id="LeftSide">
          <div>
            <MobileTabs />
            <div>
              <BlockNav filtersData={filtersData} />
            </div>
          </div>
        </LeftSide>
        <Content id="Content">
          <ResultContent
            catalogData={catalogData}
            isOptionsBtn={isOptionsBtn}
            showingTitle={showingTitle}
          />
        </Content>
      </Col2Container>
    </MainWrapper>
  );
};
