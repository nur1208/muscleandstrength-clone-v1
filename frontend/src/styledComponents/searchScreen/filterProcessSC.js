import styled from "styled-components";
// filter process main wrapper
export const FilterProcessMW = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px;
  padding: 8px 15px;
  align-items: center;
  background-color: #fff;

  @media (min-width: 840px) {
    display: none;
  }
`;

export const FilterBtn = styled.button`
  ${(props) =>
    props.isBlueBtn
      ? ` background-color: #059;
    background-image: linear-gradient(#0063b3, #004780);
    color: #fff;
    text-shadow: 1px 1px 0 #004780;
    border: 1px solid #004a85;`
      : `
    background-color: #fff;
    background-image: linear-gradient(white, #f2f2f2);
    color: #3c3c3c; 
    text-shadow: 1px 1px 0 #f2f2f2; 
    border: 1px solid #f5f5f5; `}

  padding: 0 20px;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  line-height: 43px;
  font-family: nimbusnovus, sans-serif;
  font-weight: 500;
  width: auto;
  white-space: nowrap;
  transition: 0.25s ease-out, color 0.25s ease-out;

  outline: 0;
  font-size: 13px;

  padding: 0 3%;
  line-height: 35px;
  flex: 0 0 48%;

  @media (min-width: 600px) {
    height: 35px;
  }
`;
