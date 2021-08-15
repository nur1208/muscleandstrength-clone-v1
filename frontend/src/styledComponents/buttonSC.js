import styled from "styled-components";

export const ButtonSC = styled.button`
  ${(props) => props.customStyle && props.customStyle}
  ${(props) =>
    props.isGreen
      ? `background-color: #079c3a;
  background-image: linear-gradient(#08b443, #068431);
  color: #fff;
  text-shadow: 1px 1px 0 #068431;
  border: 1px solid #068833;`
      : `background-color: #fff;
  background-image: linear-gradient(white, #f2f2f2);
  color: #3c3c3c;
  text-shadow: 1px 1px 0 #f2f2f2;
  border: 1px solid #f5f5f5;`}

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

  ${(props) =>
    props.isLong
      ? `font-size: 18px;
    padding: 0 20px;
    height: 54px;
    line-height: 54px;`
      : `height: 39px;
    font-size: 13px;
    padding: 0 3%;
    line-height: 35px;`}

  ${(props) =>
    props.isLong
      ? `@media (min-width: 840px) {
    padding: 0 30px;
    height: 60px;
    line-height: 60px;
  } ;`
      : `@media (min-width: 600px) {
    height: 35px;
  }`}
`;

export const LoaderBlock = styled.span`
  width: 32px;
  height: 32px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  display: ${(props) => (props.isLoading ? "block" : "none")};
  z-index: 10;
`;

export const Loader = styled.span`
  @keyframes load8 {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  box-sizing: content-box;
  display: inline-block;
  vertical-align: top;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-left-color: ${(props) =>
    props.isBlue ? "#059" : "#fff"};
  transform: translateZ(0);
  animation: 1.1s linear infinite load8;
`;
