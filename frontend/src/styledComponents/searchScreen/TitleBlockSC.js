import styled from "styled-components";

export const TitleBlockGrid = styled.section`
  text-align: center;
  background-color: #fff;

  display: grid;

  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  grid-template-areas:
    "shipping shipping"
    "title title"
    "breadcrumbs breadcrumbs";
  -ms-grid-columns: 50% 50%;
  grid-template-columns: 50% 50%;
  margin-bottom: 15px;

  @media (min-width: 840px) {
    grid-template-areas:
      "breadcrumbs shipping"
      "title title"
      "none none";
    margin-bottom: 30px;
  }
`;

export const BoxBreadcrumbs = styled.div`
  grid-area: breadcrumbs;

  font-size: 13px;
  text-align: left;
  position: relative;
  padding: 0;

  @media (min-width: 840px) {
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
  } ;
`;
export const Breadcrumb = styled.div`
  padding: 0;
  display: none;
  font-size: 13px;

  display: block;
  padding: 0 0 15px 15px;
  line-height: 1;
  max-width: calc(100% - 98px);

  @media (min-width: 840px) {
    padding: 0 0 0 20px;

    line-height: 38px;
  }

  a {
    text-decoration: none;
    color: #303030;

    background-color: transparent;
  }
`;

export const BoxFreeShipping = styled.div`
  padding: 0;
  border-bottom: 1px solid #eee;
  font-size: 13px;
  grid-area: shipping;

  @media (min-width: 840px) {
    margin-bottom: 15px;
  }
`;

export const FreeShippingBlock = styled.div`
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  padding: 0 15px 0 0;

  @media (min-width: 840px) {
    float: right;
    display: inline-block;
    padding: 0 20px 0 0;
    line-height: 38px;
    text-align: center;
  } ;
`;

export const Icon = styled.div`
  display: inline-block;
  margin: -1em 0.15em 0 0;
  position: relative;
  top: 0.24em;
  padding-right: 10px;
`;

export const SVG = styled.div`
  background: no-repeat center;
  background-image: url("http://localhost:5000/icon-airplane.svg");
  background-size: contain;
`;

export const BaseText = styled.span`
  display: inline-block;
  color: #059;
  font-family: nimbusnovus-bold, sans-serif;
  text-transform: uppercase;
  padding-right: 10px;
`;

export const Text = styled.span`
  display: inline-block;
  margin-top: 0;
`;

export const BoxTitle = styled.h1`
  text-align: center;
  font-size: 25px;
  margin: 0 0 15px;
  grid-area: title;
`;
