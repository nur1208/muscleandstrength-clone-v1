import styled from "styled-components";

export const SwiperWrapper = styled.div`
  width: auto;
  margin: 0;
  overflow: hidden;
  margin-bottom: 0;

  @media (min-width: 600px) {
    margin: 1em 3em 3em;
  }

  @media (min-width: 1024px) {
    margin: 20px 3em 0 11em;
  }

  div.swiper-container {
    position: static;
  }

  div.swiper-button-prev {
    display: none;
  }

  div.swiper-button-next {
    z-index: 10;
    font-family: nimbusnovus-bold, sans-serif;
    display: none;
    background-color: #059;
    color: #fff;
    position: absolute;
    top: 50%;
    padding: 0.5em 0.5em 0.7em;
    font-size: 18px;
    border-radius: 2px;
    cursor: pointer;
    right: -0.5em;

    @media (min-width: 840px) {
      display: block;
      /* top: 35%; */
      background-color: #059;
      color: #fff;
    }

    :after {
      content: ">";
      font-size: 25px;
    }
  }
`;

export const SwiperSlideWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;

  img {
    margin-right: 15px;

    @media (min-width: 1024px) {
      flex: 0 0 15%;
    }
  }
`;

export const DealInfoWrap = styled.div`
  width: 67%;
  margin-right: 2%;

  @media (min-width: 1024px) {
    flex: 0 0 80%;
  }

  span.deal-label {
    padding: 5px 10px;
    display: inline-block;
    font-size: 16px;
    color: #079c3a;
    border: 1px solid #079c3a;
    text-transform: uppercase;
    border-radius: 2px;
  }
  div.deal-desc {
    margin-top: 0.5em;
    font-size: 10px;
  }
`;
