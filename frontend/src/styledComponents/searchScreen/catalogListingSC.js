import styled from "styled-components";

export const ResultContentInnerWrap = styled.div`
  padding: 0;
  position: relative;
`;

export const SearchResultProducts = styled.div``;

export const ToolbarBottom = styled.div`
  clear: both;
`;

export const Toolbar = styled.div`
  display: block;
`;

export const ViewMoreWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ViewMore = styled.button`
  background-color: #059;
  background-image: linear-gradient(#0063b3, #004780);
  color: #fff;
  text-shadow: 1px 1px 0 #004780;
  border: 1px solid #004a85;
  padding: 0 20px;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  line-height: 43px;
  font-family: nimbusnovus, sans-serif;
  font-weight: 500;
  width: auto;
  white-space: nowrap;
  transition: 0.25s ease-out, color 0.25s ease-out;
  margin: 0 auto;
  display: block;
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
  border-left-color: ${(props) => (props.isBlue ? "#059" : "#fff")};
  transform: translateZ(0);
  animation: 1.1s linear infinite load8;
`;
