import styled from "styled-components";

export const StoreControl = styled.div`
  display: block;
  padding: ${(props) => (props.noPadding ? null : "12px")};

  @media (min-width: 840px) {
    padding: ${(props) => (props.noPadding ? null : "15px")};
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  li {
    padding: 0 12px;
  }
`;

export const StoreControlLink = styled.a`
  display: block;
  color: ${(props) => (props.current ? "#059" : "#005599a3")};
  padding: 0 12px;
  background-color: transparent;
  font-size: 18px;
  text-align: center;
  font-weight: ${(props) => props.current && 700};
  @media (min-width: 840px) {
    font-size: 13px;
    /* current */

    color: ${(props) => props.current && "#fff"};
    background-color: ${(props) => props.current && "#059"};
  } /* current */
  color: ${(props) => props.current && "#059"};
  background-color: ${(props) => props.current && "#fff"};
  font-family: ${(props) =>
    props.current && "nimbusnovus-medium,sans-serif"};
  border-radius: ${(props) => props.current && "2px"};
`;

export const ToggleSwitch = styled.li`
  line-height: 23px;

  @media (min-width: 840px) {
    display: none;
  }

  a {
    display: inline-block;
    border-radius: 2em;
    position: relative;
    width: 34px;
    text-transform: uppercase;
    height: 10px;
    background-color: #ddd;
    margin: 0 auto;
    font-size: 13px;
  }
`;

export const SwitchNode = styled.div`
  position: absolute;
  height: 1.2em;
  transform: translate(0, -20%);
  width: 1.2em;
  border-radius: 5em;
  z-index: 0;
  transition: 0.2s;
  background-color: #059;
  left: 0;
`;
