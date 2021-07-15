import styled from "styled-components";

export const SearchInfoBarMW = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  line-height: 32px;
  background-color: #fff;
  margin-bottom: 10px;

  @media (min-width: 840px) {
    margin-bottom: 15px;
  }

  @media (min-width: 480px) {
    font-size: 16px;
  } ;
`;
