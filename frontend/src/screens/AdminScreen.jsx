import React, { useState } from "react";
import {
  Sidebar,
  SidebarBrand,
  SidebarMenu,
  SidebarMenuContainer,
  SidebarMenuItem,
  GlobalStyle,
  NavToggle,
  AdminHeader,
  MainContent,
  SearchWrapper,
  UserWrapper,
} from "../components/admin/styledComp";
import { FcCdLogo } from "react-icons/fc";
import { BsListTask } from "react-icons/bs";
import { AiOutlineDashboard, AiOutlineSearch } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GiBuyCard } from "react-icons/gi";
import { RiAccountBoxLine, RiProjectorLine } from "react-icons/ri";
import { Dashboard } from "../components/admin/Dashboard";
import { Products } from "../components/admin/Products";
import { FaBars } from "react-icons/fa";

export const AdminScreen = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const sidebarItem = [
    {
      title: "Dashboard",
      isActive: true,
      icon: <AiOutlineDashboard />,
      comp: (
        <Dashboard
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ),
    },
    { title: "Customers", isActive: false, icon: <FiUsers /> },
    {
      title: "Products",
      isActive: false,
      icon: <RiProjectorLine />,
      comp: <Products isSidebarOpen={isSidebarOpen} />,
    },
    { title: "Orders", isActive: false, icon: <GiBuyCard /> },
    { title: "Accounts", isActive: false, icon: <RiAccountBoxLine /> },
    { title: "Tasks", isActive: false, icon: <BsListTask /> },
  ];

  return (
    <div>
      <GlobalStyle />
      <NavToggle type="checkBox" id="nav-toggle" />
      <Sidebar isSidebarOpen={isSidebarOpen}>
        <SidebarBrand isSidebarOpen={isSidebarOpen}>
          <h2>
            <FcCdLogo
              style={{ display: "inline-block", paddingRight: "0.5rem" }}
            ></FcCdLogo>{" "}
            <span>Accusoft</span>
          </h2>
        </SidebarBrand>

        <SidebarMenu>
          <SidebarMenuContainer>
            {sidebarItem.map((sidebar, index) => {
              return (
                <SidebarMenuItem
                  isSidebarOpen={isSidebarOpen}
                  key={index}
                  onClick={() => setActiveSectionIndex(index)}
                >
                  <a href="#" className={`${sidebar.isActive ? "active" : ""}`}>
                    {sidebar.icon} <span>{sidebar.title}</span>
                  </a>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenuContainer>
        </SidebarMenu>
      </Sidebar>

      <MainContent isSidebarOpen={isSidebarOpen}>
        <AdminHeader isSidebarOpen={isSidebarOpen}>
          <h2>
            <label htmlFor="nav-toggle">
              {" "}
              <span onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <FaBars />
              </span>
            </label>
            Dashboard
          </h2>

          <SearchWrapper>
            <span>
              <AiOutlineSearch />
            </span>
            <input type="search" placeholder="Search here" />
          </SearchWrapper>

          <UserWrapper>
            <img src="/images/user2.png" width="40px" height="40px" alt="" />
            <div>
              <h4>John Doe</h4>
              <small>Super admin</small>
            </div>
          </UserWrapper>
        </AdminHeader>
        {sidebarItem[activeSectionIndex].comp}
      </MainContent>
    </div>
  );
};
