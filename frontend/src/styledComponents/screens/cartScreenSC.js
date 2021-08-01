import styled from "styled-components";

export const MainWrap = styled.div`
  font-family: nimbusnovus, sans-serif;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2.5%;
  max-width: 1060px;
  background-color: #fff;

  @media (min-width: 1082px) {
    padding-top: 0;
  }
  @media (min-width: 700px) {
    position: relative;
  }

  :after {
    content: " ";
    display: block;
    clear: both;
  }
`;

export const MainContent = styled.div`
  font-family: nimbusnovus, sans-serif;

  width: 95%;
  height: 100vh;
  padding-left: 2.5%;
  padding-right: 2.5%;
  padding: 0 15px;

  @media (min-width: 1024px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 840px) {
    float: left;
    /* width: 68%; */
    position: relative;
  }
`;
