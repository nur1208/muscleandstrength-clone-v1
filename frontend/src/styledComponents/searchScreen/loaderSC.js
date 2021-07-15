import styled from "styled-components";

export const LoaderContainer = styled.div``;

export const LoaderBlock = styled.span`
  width: 32px;
  height: 32px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 10;
  margin-top: 10px;
  /* display: none; */
`;

export const Loading = styled.span`
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
  width: 60px;
  height: 60px;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border: 4px solid rgba(0, 142, 255, 0.3);
  border-left-color: #059;
  transform: translateZ(0);
  animation: 1.1s linear infinite load8;

  :before {
    content: "";
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
`;
