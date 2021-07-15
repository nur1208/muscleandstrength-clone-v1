import React from "react";
import {
  Nav,
  Container,
  Labels,
  BtnOfLabels,
  TopBanner,
  RightPart,
  LeftPart,
  CommonIcons,
  Tel,
  NavbarLeft,
  NavbarNav,
  NavbarNavLi,
  NavbarHeader,
  NavbarRight,
  SearchInput,
  SearchButton,
} from "./styledCompo";

export const Navbar = () => {
  const navbarItems = [
    { title: "首页", link: "somewhere", isActive: true },
    { title: "大气环境", link: "somewhere" },
    { title: "城市微环境", link: "somewhere" },

    { title: "环境健康", link: "somewhere" },
    { title: "关于我们", link: "somewhere" },
  ];
  return (
    <Nav id="Nav">
      <Container
        id="container1"
        style={{ padding: " 3px 0px 3px 15px", position: "relative" }}
      >
        <Labels id="Labels">
          数据未经总站审核，仅供实时动态参考{" "}
          <BtnOfLabels id="BtnOfLabels">点击关闭</BtnOfLabels>
        </Labels>
        <TopBanner id="TopBanner">
          <RightPart id="RightPart">
            <a href="#somewhere">污染地图{">>"}</a>
            <img src="/imagesDome/new.gif" alt="new.gif" />
          </RightPart>
          <LeftPart id="LeftPart">
            <CommonIcons
              id="weiboicon"
              img={"../imagesDome/common.png"}
              title="点击访问微博 "
              position="0px -30px"
            ></CommonIcons>

            <CommonIcons
              id="weixinicon"
              img={"../imagesDome/common.png"}
              title="点击访问微博 "
              position="0px 0px"
              isPositionAbsolute={true}
            ></CommonIcons>

            <Tel id="Tel">400-995-1580</Tel>
          </LeftPart>
        </TopBanner>
      </Container>
      <Container
        id="container2"
        style={{ height: "60px", lineHeight: "60px", paddingRight: "0px" }}
      >
        <NavbarHeader id="NavbarHeader">
          <a href="#somewhere">
            <img src="/imagesDome/logo_large.png" alt="ogo_large" />
          </a>
        </NavbarHeader>
        <div>
          <NavbarLeft id="NavbarLeft">
            <NavbarNav id="NavbarNav">
              {navbarItems.map((item, index) => (
                <NavbarNavLi
                  key={index}
                  isActive={item.isActive}
                  img={item.isActive && "/imagesDome/select.png"}
                >
                  <a href={item.link}>{item.title}</a>
                </NavbarNavLi>
              ))}
            </NavbarNav>
          </NavbarLeft>
        </div>
        <NavbarRight id="NavbarRight">
          <SearchInput
            id="SearchInput"
            img="/imagesDome/search.png"
            // type="text"
            placeholder="输入关键词进行搜索"
          />
          <SearchButton>搜索</SearchButton>
        </NavbarRight>
      </Container>
    </Nav>
  );
};
