import styled from "styled-components";

export const ErrorsMainContainer = styled.div`
  margin-left: 1.17em;
  display: ${(props) => (props.hasError ? "block" : "none")};
`;

export const Message = styled.ul`
  list-style: none;
  max-width: 1300px;
  margin: 0 auto 1em;
  border-radius: 2px;
  text-align: center;
  padding: 0;
`;

export const ErrorMsg = styled.li`
  display: block;
  list-style: none;
  text-align: left;
  text-decoration: none;
  line-height: 1.8em;
  font-size: 13px;
  background-color: #fef2f2;
  border: 1px solid #fac4c4;
  border-radius: 2px;
  margin: 0.2em 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li span {
    display: block;
    margin-left: 0.5em;
    padding: 0.6em 1em;
    color: #d41313;
  }
`;
