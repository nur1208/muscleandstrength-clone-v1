import styled from "styled-components";
import { ArrowDropDown } from "@styled-icons/remix-line/ArrowDropDown";

export const BlockContentFilters = styled.div`
  width: auto;
  margin: 0;
  font-size: 18px;
  display: none;
  margin-top: 0;

  @media (min-width: 840px) {
    display: block;
    margin: 0 0 1em;
    background-color: #fff;
    margin-top: -10px;
  }

  @media (min-width: 680px) {
    font-size: 16px;
  } ;
`;

export const SortingBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  line-height: 32px;
  background-color: #fff;
  padding: 8px 15px;

  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 840px) {
    display: none;
  } ;
`;

export const OptionWrap = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 480px) {
    display: inline-block;
  } ;
`;

export const Option = styled.div`
  display: inline-block;
  font-size: 13px;
  border-radius: 2px;

  @media (min-width: 480px) {
    padding: 0 20px;
  } ;
`;

export const InnerWrap = styled.a`
  color: #059;
  cursor: pointer;
`;

export const OptionToggle = styled.div`
  flex: 0 0 84px;
  border-left: 1px solid #ddd;
  padding: 0 15px;
  margin-left: 10px;
  color: #fff;

  @media (min-width: 480px) {
    flex: 0 0 auto;
  }
`;

export const Inner = styled.div`
  width: 75px;
`;

export const CategoryList = styled.dl`
  display: block;
  background-color: #fff;
  margin: 0 10px 1px;

  @media (min-width: 840px) {
    margin: 0;
  }
`;

export const FilterItem = styled.dt`
  display: block;
  border: 0;
  background-color: #059;
  font-family: nimbusnovus-medium, sans-serif;
  padding: 8px 10px 8px 15px;
  font-size: 16px;
  text-transform: capitalize;
  color: #fff;
  text-align: left;
  position: relative;
  margin-bottom: 0;
  line-height: 1.25;
  cursor: pointer;

  @media (min-width: 840px) {
    font-size: 13px;
  } ;
`;

export const CaretDown = styled(ArrowDropDown)`
  position: relative;
  /* display: inline-block; */
  width: 30px !important;
  height: 30px !important;
  top: ${(props) => (props.isShowItems ? "7px" : "-7px")};
  cursor: pointer;
  /* margin: 4px 0 0; */
  float: right;
  transform-origin: 8px 4px;
  /* transform: rotate(-90deg); */
  transform: ${(props) => (props.isShowItems ? "rotate(-90deg)" : "rotate(0)")};
  transition: transform 0.2s ease-in-out;

  /* transform: rotate(0); */

  :before {
    border-top-color: #fff;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 8px solid transparent;
  }

  :after {
    left: 2px;
    top: 0;
    border-top-color: #059;
  }

  :after {
    content: "";
    position: absolute;
    border: 6px solid transparent;
  }
`;

export const SortingBarData = styled.dd`
  display: ${(props) => (props.isShowItems ? "block" : "none")};

  /* display: none; */

  /* @media (min-width: 840px) {
    display: block;
  } */
`;

export const ShortListOn = styled.ul`
  -webkit-margin-after: 0;
  -webkit-margin-before: 0;
  padding: 0 10px;
  list-style: none;

  @media (min-width: 840px) {
    padding: 0 0.5em;
  }

  li {
    position: relative;
    clear: both;
    overflow: hidden;
    margin: 0;
    font-size: 13px;
    transition: color 0.8s;
    border-top: 1px solid #eee;
    display: block;
    border-top: 0;

    a {
      display: block;
      color: #303030;
      padding: 1em 0 1em 2em;
      cursor: pointer;

      :before {
        ${(props) =>
          props.isShowItems &&
          `
        position: absolute;
        top: 1em;
        left: 0.3em;
        width: 1em;
        height: 1em;
        border: 1px solid #ddd;
        content: "";
        background-color: #fff;`};
      }
    }
  }
`;

export const SolrCat = styled.input`
  float: left;
  width: 20px;
  margin: 0 5px 0 0;
  padding: 0;
  border-radius: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const RatingFilterText = styled.span`
  line-height: 19.5px;
  margin-left: 5px;
`;

export const ShowBtn = styled.button`
  /* display: none; */
  cursor: pointer;
  background-color: transparent;
  padding-left: 0.5em;
  padding-top: 0.6em;
  padding-bottom: 0.3em;
  font-size: 13px;
  transition: color 0.8s;
  margin: 3%;
  width: 94%;
  border: 0;
  border-top: 1px solid #eee;
  text-align: left;
  height: 2.5em;

  border-top-color: #eee;
  margin: 0;
  width: 100%;
  font-family: nimbusnovus-regular, sans-serif;
`;
