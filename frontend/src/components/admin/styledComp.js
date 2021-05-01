import styled from "styled-components";

const mainColor = "#DD2F6E";

export const Sidebar = styled.div`
  width: 345px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: ${mainColor};
`;

export const SidebarBrand = styled.div`
  height: 90px;
  padding: 1rem 0rem 1rem 2rem;
  color: #fff;
`;

export const SidebarMenu = styled.div``;

export const SidebarMenuContainer = styled.ul``;

export const SidebarMenuItem = styled.li`
  width: 100%;
  margin-bottom: 1.7rem;
  padding-left: 2rem;

  a {
    padding-left: 1rem;
    display: block;
    color: #fff;
    font-size: 1.2rem;
  }

  a span {
    font-size: 1.5rem;
    padding-left: 1rem;
  }

  a.active {
    background: #fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: ${mainColor};
    border-radius: 30px 0px 0px 30px;
  }
`;

export const MainContent = styled.div`
  margin-left: 345px;
`;

export const AdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const HeaderTitle = styled.h2``;

export const SearchWrapper = styled.div``;

export const UserWrapper = styled.div``;

export const AdminMain = styled.div``;

export const Cards = styled.div``;

export const CardSingle = styled.div``;
