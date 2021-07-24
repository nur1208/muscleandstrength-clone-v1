import styled from "styled-components";

export const CartFeature = styled.div`
  overflow: hidden;
  background-color: #eee;
  font-family: nimbusnovus-bold, sans-serif;
  font-size: 13px;
  padding: 10px 0;
  margin-bottom: 2em;
  text-align: center;
  display: none;
  color: #aaa;

  @media (min-width: 840px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30px;
  } ;
`;
