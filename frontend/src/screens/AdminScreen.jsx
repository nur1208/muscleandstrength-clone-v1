import React from "react";
import {
  AdminHeader,
  HeaderTitle,
  MainContent,
  SearchWrapper,
  Sidebar,
  SidebarBrand,
  SidebarMenu,
  SidebarMenuContainer,
  SidebarMenuItem,
  UserWrapper,
  AdminMain,
  Cards,
  CardSingle,
} from "../components/admin/styledComp";
import { FcCdLogo } from "react-icons/fc";
import { BsListTask } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { GiBuyCard } from "react-icons/gi";
import { RiAccountBoxLine, RiProjectorLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

export const AdminScreen = () => {
  return (
    <div>
      <Sidebar>
        <SidebarBrand>
          <h2>
            <FcCdLogo
              style={{ display: "inline-block", paddingRight: "0.5rem" }}
            ></FcCdLogo>{" "}
            Accusoft
          </h2>
        </SidebarBrand>

        <SidebarMenu>
          <SidebarMenuContainer>
            <SidebarMenuItem>
              <a href="#" className="active">
                <AiOutlineDashboard /> <span>Dashboard</span>
              </a>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <a href="#">
                <FiUsers /> <span>Customers</span>
              </a>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <a href="#">
                <RiProjectorLine /> <span>Projects</span>
              </a>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <a href="#">
                <GiBuyCard /> <span>Orders</span>
              </a>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <a href="#">
                <RiAccountBoxLine /> <span>Accounts</span>
              </a>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <a href="#">
                <BsListTask /> <span>Tasks</span>
              </a>
            </SidebarMenuItem>
          </SidebarMenuContainer>
        </SidebarMenu>
      </Sidebar>

      <MainContent>
        <AdminHeader>
          <h2>
            <label htmlFor=""></label>
            <FaBars />
            Dashboard
          </h2>

          <SearchWrapper>
            <AiOutlineSearch />
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
        <AdminMain>
          <Cards>
            <CardSingle>
              <div>
                <h1>54</h1>
                <span>Customers</span>
              </div>
              <div>
                <FiUsers />
              </div>
            </CardSingle>

            <CardSingle>
              <div>
                <h1>79</h1>
                <span>Projects</span>
              </div>
              <div>
                <RiProjectorLine />
              </div>
            </CardSingle>

            <CardSingle>
              <div>
                <h1>124</h1>
                <span>Orders</span>
              </div>
              <div>
                <GiBuyCard />
              </div>
            </CardSingle>

            <CardSingle>
              <div>
                <h1>$6k</h1>
                <span>Income</span>
              </div>
              <div>
                <GiBuyCard />
              </div>
            </CardSingle>
          </Cards>
        </AdminMain>
      </MainContent>
    </div>
  );
};
