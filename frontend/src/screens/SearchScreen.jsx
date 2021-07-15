import React from "react";
import {
  MainWrapper,
  Col2Container,
  LeftSide,
  AllProducts,
  SearchMainContainer,
  Content,
} from "./styledCompo/searchScreen";
import { TitleBlock } from "../components/searchScreen/TitleBlock";
import { MobileTabs } from "../components/searchScreen/MobileTabs";
import { BlockNav } from "../components/searchScreen/BlockNav";
import { ResultContent } from "../components/searchScreen/ResultContent";
export const SearchScreen = () => {
  return (
    <SearchMainContainer>
      <TitleBlock />

      <MainWrapper id="MainWrapper" style={{ height: "100vh" }}>
        <AllProducts id="AllProducts">All Products</AllProducts>
        <Col2Container id="Col2Container">
          <LeftSide id="LeftSide">
            <div>
              <MobileTabs />
              <div>
                <BlockNav />
              </div>
            </div>
          </LeftSide>
          <Content id="Content">
            <ResultContent />
          </Content>
        </Col2Container>
      </MainWrapper>
    </SearchMainContainer>
  );
};
