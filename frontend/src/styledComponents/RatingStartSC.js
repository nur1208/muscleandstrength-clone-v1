import styled from "styled-components";

export const RatingBox = styled.div`
  position: relative;
  width: 6em;
  max-width: 100%;
  z-index: 0;
  line-height: 19.5px;
  margin-top: -5px;
`;

export const StarOverlay = styled.div`
  width: 101%;
  left: -0.5%;
  background-image: url(${(props) => props.svg});
  background-image: linear-gradient(transparent, transparent),
    url(${(props) => props.svg});
  background-size: 100% 100%;
  height: 0;
  padding: 0 0 25%;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
  z-index: 0;
`;

export const Rating = styled.div`
  width: ${(props) => props.ratingPercentage}%;
  height: 75%;
  position: absolute;
  top: 9%;
  z-index: -1;
  max-width: 99%;
  background: #059;
  background: linear-gradient(to right, #fff 0, #059 1.5%);
`;
