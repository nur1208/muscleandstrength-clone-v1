import styled from "styled-components";

export const ProductsWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;

  margin-left: -0.3125rem;
  margin-right: -0.3125rem;
  list-style: none;
  padding: 0;

  @media print, screen and (min-width: 52.5em) {
    margin-left: -0.46875rem;
    margin-right: -0.46875rem;
  } ;
`;
