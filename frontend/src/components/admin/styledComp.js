import styled, { createGlobalStyle } from "styled-components";

const mainColor = "#DD2F6E";
const colorDark = "#1d22231";
const textGrey = "#8390A2";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    list-style-type: none;
    text-decoration:none;
    font-family:"Poppins", sans-serif;
    
  }
`;

export const SidebarBrand = styled.div`
  height: 90px;
  padding: ${(props) => (props.isSidebarOpen ? "1rem" : "1rem 0rem 1rem 2rem")};
  color: #fff;

  span {
    display: ${(props) => (props.isSidebarOpen ? "inline-block" : "none")};
  }

  @media only screen and (max-width: 1200px) {
    padding: 1rem 0rem 1rem 2rem;
    span {
      display: none;
    }
    /* :hover { padding-left: 2rem; text-align: left; } span:hover { display: inline; } */
  }
`;

export const SidebarMenuItem = styled.li`
  width: 100%;
  margin-bottom: 1.7rem;
  padding-left: ${(props) => (props.isSidebarOpen ? "2rem" : "1rem")};

  a {
    padding-left: 1rem;
    display: block;
    color: #fff;
    font-size: 1.2rem;
  }

  a span {
    display: ${(props) => (props.isSidebarOpen ? "inline-block" : "none")};
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

  @media only screen and (max-width: 1200px) {
    padding-left: 1rem;
    /* ${(props) => (props.isSidebarOpen ? "inline-block" : "none")} */
    a span {
      display: none;
    }
  }
`;

export const Sidebar = styled.div`
  width: ${(props) => (props.isSidebarOpen ? "345px" : "70px")};
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: ${mainColor};
  z-index: 100;
  transition: margin-left 300ms;

  @media only screen and (max-width: 1200px) {
    width: 70px;
    &:hover {
      width: 345px;
      z-index: 200;
      ${SidebarBrand} {
        padding-left: 2rem;
        text-align: left;

        span {
          display: inline;
        }
      }
      ${SidebarMenuItem} {
        padding-left: 2rem;

        a span {
          display: inline-block;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    width: 345px;

    left: ${(props) => (props.isSidebarOpen ? "0" : "-100% !important")};
  }
`;

export const SidebarMenu = styled.div`
  margin-bottom: 1rem;
`;

export const SidebarMenuContainer = styled.ul``;

export const MainContent = styled.div`
  transition: margin-left 300ms;
  margin-left: ${(props) => (props.isSidebarOpen ? "345px" : "75px")};

  @media only screen and (max-width: 1200px) {
    margin-left: 70px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0rem;
  }
`;

export const AdminHeader = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: ${(props) => (props.isSidebarOpen ? "345px" : "75px")};
  width: ${(props) =>
    props.isSidebarOpen ? "calc(100% - 345px)" : "calc(100% - 75px)"};
  top: 0;
  z-index: 100;
  transition: left 900ms;

  h2 {
    color: #222;
  }

  label span {
    font-size: 1.7rem;
    padding-right: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    left: 75px;
    width: calc(100% - 75px);
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    left: 0;
    h2 {
      display: flex;
      align-items: center;
    }
    h2 label {
      display: inline-block;
      justify-content: center;
      align-items: center;
      background: ${mainColor};
      padding-left: 0rem;
      margin-left: 1rem;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center !important;
    }

    h2 span {
      display: flex;
      align-items: center;
      text-align: center;
      padding-right: 0rem;
      font-size: 1.1rem;
    }

    /* left: ${(props) => (props.isSidebarOpen ? "345px" : "0")};
    width: ${(props) =>
      props.isSidebarOpen ? "calc(100% - 345px)" : "100%"}; */
  }
`;

export const HeaderTitle = styled.h2``;

export const SearchWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  overflow-x: hidden;

  span {
    display: inline-block;
    padding: 0rem 1rem;
    font-size: 1.5rem;
  }

  input {
    height: 100%;
    padding: 0.5rem;
    border: none;
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    margin-right: 1rem;
  }

  small {
    display: inline-block;
    color: ${textGrey};
  }
`;

export const AdminMain = styled.div`
  margin-top: 85px;
  padding: 2rem 1.5rem;
  background: #f1f5f9;
  min-height: calc(100vh - 90px);
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 1rem;

  @media only screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

export const CardSingle = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 2rem;
  border-radius: 2px;

  div:last-child span {
    font-size: 3rem;
    color: ${mainColor};
  }

  div:first-child span {
    color: ${textGrey};
  }

  :last-child {
    background: ${mainColor};
  }

  :last-child h1,
  :last-child div:first-child span,
  :last-child div:last-child span {
    color: #fff;
  }
`;

export const RecentFlex = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 65% auto;

  @media only screen and (max-width: 960px) {
    grid-template-columns: 60% 40%;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, "1fr");
  }

  @media only screen and (max-width: 560px) {
    grid-template-columns: 100%;
  } ;
`;

export const Projects = styled.div``;

export const Customers = styled.div``;

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
`;

export const CardHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;

  button {
    background: ${mainColor};
    border-radius: 10px;
    color: #fff;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${mainColor};
  }
`;

export const CardBody = styled.div`
  padding: 1rem;

  table {
    border-collapse: collapse;
  }

  table tr {
    border-top: 1px solid #f0f0f0;
    border-bottom: 2px solid #f0f0f0;
  }

  thead td {
    font-weight: 700;
  }

  td {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: #222;
  }

  tr td:last-child {
    display: flex;
    align-items: center;
  }
`;

export const Customer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.7rem;
`;

export const Status = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 1rem;

  background: ${(props) => props.color};
`;

export const TableResponsive = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    margin-right: 1rem;
  }

  h4 {
    font-size: 0.8rem;
    font-weight: 700;
    color: #222;
  }

  small {
    font-weight: 600;
    color: ${textGrey};
  }
`;

export const Contact = styled.div`
  span {
    font-size: 1.2rem;
    display: inline-block;
    margin-left: 0.5rem;
    color: ${mainColor};
  }
`;

export const NavToggle = styled.input`
  display: none;
`;

// start of products
export const ProductsWrapper = styled.div`
  margin-top: 85px;
  padding: 3rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
// product input wrapper.
export const ProductInputW = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 3rem;
  margin-bottom: 3rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  label {
    margin-bottom: 0px;
  }
`;

export const ChooseFileBtn = styled.label`
  color: #f1e5e6;
  background-color: #007bff;
  max-width: 80%;
  font-size: 1.25rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
  border-radius: 5%;
`;

export const InputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
export const ImageLoadBtn = styled.div``;

export const UploadedImage = styled.img`
  margin-bottom: 2rem;
`;

export const AddButtonW = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const AddButton = styled.button`
  width: 80%;
  padding: 1%;
  color: #f1e5e6;
  background-color: #007bff;
  border-radius: 5%;
  border-color: #007bff;
`;
