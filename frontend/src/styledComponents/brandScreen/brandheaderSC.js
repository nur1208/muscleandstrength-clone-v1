import styled from "styled-components";

export const BrandHeaderBlock = styled.section`
  padding: 12px;
  /* margin-right: auto;
  margin-left: auto;
  max-width: 1300px; */

  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 840px) {
    padding: 15px;
    margin-bottom: 15px;
    justify-content: center;
  } ;
`;

export const BrandLogo = styled.div`
  flex: 0 0 170px;

  @media (min-width: 840px) {
    text-align: center;
    margin-right: 15px;
  }

  img {
    border-style: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    max-height: 50px;
    width: auto;
  }
`;

export const BrandAboutBtn = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  line-height: 16px;
  color: #059;
  font-family: nimbusnovus-bold, sans-serif;

  @media (min-width: 840px) {
    text-align: center;
    margin-left: 4px;
  } ;
`;

export const CaretRight = styled.span`
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  cursor: pointer;
  margin-left: 8px;
  margin-bottom: -2px;

  @media (min-width: 840px) {
    margin-bottom: -1px;

    :before {
      border-left-color: #059;
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 5px solid transparent;
    }

    :after {
      content: "";
      position: absolute;
      border: 3px solid transparent;
      left: 0;
      top: 2px;
      border-left-color: #fff;
    }
  } ;
`;
