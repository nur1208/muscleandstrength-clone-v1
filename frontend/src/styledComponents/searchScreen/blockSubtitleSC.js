import styled from "styled-components";
export const BlockSubtitleMW = styled.div`
  display: block;
  @media (min-width: 840px) {
    display: none;
  } ;
`;

export const Text2 = styled.div`
  display: none;
  font-family: nimbusnovus-medium, sans-serif;
  font-size: 13px;

  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

export const BtnTabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #059;
  /* margin-bottom: 10px; */
  @media (min-width: 840px) {
    margin-bottom: 15px;
  }
`;

export const BlueStripe = styled.h2`
  position: relative;
  width: 100%;
  max-width: 81.25rem;

  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  background-color: #059;

  margin: 0;
  line-height: 39px;
  text-align: left;
  padding-left: 12px;

  @media screen and (min-width: 52.5em) {
    margin-bottom: 15px;
  }

  @media (min-width: 600px) {
    line-height: 35px;
  } ;
`;

export const BtnLightBlue = styled.div`
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  font-family: nimbusnovus, sans-serif;
  font-weight: 500;
  width: auto;
  white-space: nowrap;
  transition: 0.25s ease-out, color 0.25s ease-out;
  padding: 0 16px;
  height: 39px;
  line-height: 39px;
  font-size: 13px;
  background-color: #0687e6;
  background-image: linear-gradient(#0d95f9, #0578cd);
  color: #fff;
  text-shadow: 1px 1px 0 #0578cd;
  border: 1px solid #057bd2;
`;
