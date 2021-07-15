import styled from "styled-components";

export const Nav = styled.div`
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-color: #e7e7e7;
  background: white;
  margin: auto;
  width: 1170px;

  :before {
    display: table;
    content: " ";
    box-sizing: border-box;
  }
  :after {
    clear: both;
    display: table;
    content: " ";
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    border-radius: 4px;
  }
`;

export const Container = styled.div`
  width: 1170px;
  background: white;

  :before {
    display: table;
    content: " ";
    box-sizing: border-box;
  }

  :after {
    clear: both;
    display: table;
    content: " ";
    box-sizing: border-box;
  }
`;

export const Labels = styled.div`
  width: 300px;
  height: 25px;
  position: absolute;
  top: 8px;
  left: calc(50% - 150px);
  text-align: center;
  font-size: 13px;
  z-index: 999;
  color: gray;
`;

export const BtnOfLabels = styled.span`
  font-size: 12px;
  color: red;
  padding-left: 15px;
  cursor: pointer;
`;

export const TopBanner = styled.div`
  height: 27px;
  line-height: 27px;
`;

export const RightPart = styled.div`
  float: right;
  margin-right: 15px;

  a {
    color: #767874;
    margin-left: 16px;
    text-decoration: none;
  }

  img {
    border: 0;
    vertical-align: middle;
    height: 18px;
  }
`;

export const LeftPart = styled.div`
  float: left;
  height: 27px;
  line-height: 27px;
  margin-left: 167px;
  margin-top: 5px;

  a {
    margin-right: 12px;
    float: left;
  }
`;

export const CommonIcons = styled.a`
  width: 24px;
  height: 18px;
  background: url(${(props) => props.img}) ${(props) => props.position};
  position: ${(props) => props.isPositionAbsolute && "absolute"};
`;

export const Tel = styled.span`
  color: #9acd72;
  margin-left: 50px;
`;

export const NavbarHeader = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 0px;

  @media (min-width: 768px) {
    float: left;
    margin-right: 0;
    margin-left: 0;
  }

  :before {
    display: table;
    content: " ";
    box-sizing: border-box;
  }

  a {
    padding: 0px;
    color: #08c;
    text-decoration: none;
  }

  a img {
    vertical-align: middle;
    border: 0;
    position: absolute;
    width: 220px;
    height: 67px;
    top: 30px;
    left: 9px;
  }

  :after {
    clear: both;
    display: table;
    content: " ";
    box-sizing: border-box;
  }
`;

export const NavbarLeft = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 10%);
  border-color: #e7e7e7;
  margin-left: 210px;

  @media (min-width: 768px) {
    width: auto;
    border-top: 0;
    box-shadow: none;
    float: left;
    display: block;
    height: auto;
    padding-bottom: 0;
    overflow: visible;
  }

  :before {
    display: table;
    content: " ";
    box-sizing: border-box;
  }

  :after {
    clear: both;
    display: table;
    content: " ";
    box-sizing: border-box;
  }
`;

export const NavbarNav = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin: 7.5px -15px;

  @media (min-width: 768px) {
    float: left;
    margin: 0;
  }

  :before {
    display: table;
    content: " ";
    box-sizing: border-box;
  }

  > li {
    position: relative;
    display: block;
  }

  @media (min-width: 768px) {
    > li {
      float: left;
    }
  }

  li,
  a {
    width: 116px;
    height: 60px;
    line-height: 60px;
    display: block;
    font-size: 18px;
    text-align: center;
    padding: 0px;
  }

  :after {
    clear: both;
    display: table;
    content: " ";
    box-sizing: border-box;
  }

  /* li.active a {
    color: #fff;
    background: url(../../img/common/select.png);
    padding: 0px;
    line-height: 60px;
    height: 60px;
  } */
`;

export const NavbarNavLi = styled.li`
  a {
    color: ${(props) => (props.isActive ? "#fff" : "#777")};
    background: url(${(props) => props.img});
    padding: 0px;
    line-height: 60px;
    height: 60px;
  }
`;

export const NavbarRight = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  border-top: 1px solid transparent;
  border-color: #e7e7e7;

  padding: 0px;
  margin-right: 15px;
  @media (min-width: 768px) {
    width: auto;
    border-top: 0;
    box-shadow: none;
    float: right;
    display: block;
    height: auto;
    padding-bottom: 0;
    overflow: visible;
  }

  :before {
    display: table;
    content: " ";
    box-sizing: border-box;
  }

  :after {
    clear: both;
    display: table;
    content: " ";
    box-sizing: border-box;
  }
`;

export const SearchInput = styled.input`
  width: 210px;
  height: 37px;
  line-height: 37px;
  border: 1px solid #8ec948;
  background: url(${(props) => props.img}) no-repeat 5px;
  padding-left: 30px;
  margin-right: -7px;
`;

export const SearchButton = styled.button`
  border: 0px;
  width: 60px;
  height: 39px;
  line-height: 37px;
  background: #80c12d;
  color: #fff;
  border-radius: 0 4px 4px 0;
  border: 1px solid #8ec948 !important;
  border-left: none !important;
  position: relative;
  top: 0px;
`;
