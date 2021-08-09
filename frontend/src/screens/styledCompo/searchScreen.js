import styled from "styled-components";

export const SearchMainContainer = styled.div`
  background-color: #f5f5f5;

  * {
    box-sizing: inherit;
  }
`;

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  *,
  ::after,
  ::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

export const Col2Container = styled.article`
  max-width: 1300px;
  margin: 0 auto;
  display: table;
  width: 100%;
`;

export const LeftSide = styled.aside`
  width: 100%;

  @media (min-width: 840px) {
    width: 225px;
    max-width: 225px;
    display: table-cell;
    vertical-align: top;
    padding: 0;
    padding-right: 7px;
  } ;
`;

export const ListProductsTitle = styled.h2`
  margin-bottom: 10px;
  position: relative;
  width: 100%;
  max-width: 81.25rem;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  line-height: 40px;
  font-size: 16px;
  background-color: #059;

  @media screen and (min-width: 52.5em) {
    margin-bottom: 15px;
  }

  /* display: none; */
`;

export const Content = styled.section`
  margin-bottom: 10px;
  position: relative;
  background-color: transparent;
  @media (min-width: 840px) {
    margin-bottom: 15px;
    display: table-cell;
    vertical-align: top;
    padding: 0;
    padding-left: 7px;
  } ;
`;
