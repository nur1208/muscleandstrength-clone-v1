import styled from "styled-components";

export const SidebarContainer = styled.div`
  right: 5px;
  position: fixed;
  top: 76%;
  z-index: 10000;

  div {
    background-color: #7ac02c;
    padding: 0.5em;
    cursor: pointer;
  }
`;

export const SidebarItem = styled.div`
  border-bottom: 2px solid white;
`;
