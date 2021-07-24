import React, { useState } from "react";
import styled from "styled-components";
import { ArrowDropDown } from "@styled-icons/remix-line/ArrowDropDown";

const MainWrapperOfTool = styled.div`
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
  float: left;
  padding-left: 0;
  padding-right: 0;

  @media (min-width: 840px) {
    margin-bottom: 15px;
  }

  @media (min-width: 1024px) {
    box-sizing: border-box;
    width: 33.3333333333%;
    float: left;
    padding-left: 0;
    padding-right: 0;
  } ;
`;

const Accordion = styled.ul`
  margin-top: 0;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
`;

const AccordionItem = styled.li`
  display: block;
  margin-left: 0;

  @media (min-width: 1024px) {
    margin: 0 0.5em;
  } ;
`;

const AccordionTitle = styled.div`
  font-family: nimbusnovus-medium, sans-serif;
  font-weight: 500;
  font-size: 16px;
  background: #059;
  color: #fff;
  display: block;
  padding: 0 5px 0 15px;
  line-height: 36px;
  /* cursor: pointer; */
  position: relative;
`;

export const CaretDown = styled(ArrowDropDown)`
  position: relative;
  /* display: inline-block; */
  width: 40px !important;
  height: 40px !important;
  top: ${(props) => (props.isActive ? "-3px" : "24px")};
  /* top: -3px; */
  cursor: pointer;
  /* margin: 4px 0 0; */
  float: right;
  transform-origin: 8px 4px;
  /* transform: rotate(-90deg); */
  transform: ${(props) => (props.isActive ? "rotate(0)" : "rotate(-90deg)")};
  transition: transform 0.2s ease-in-out;

  /* transform: rotate(0); */

  :before {
    border-top-color: #fff;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 8px solid transparent;
  }

  :after {
    left: 2px;
    top: 0;
    border-top-color: #059;
  }

  :after {
    content: "";
    position: absolute;
    border: 6px solid transparent;
  }
`;

const AccordionContent = styled.div`
  border: 1px solid #ddd;
  display: block;
  max-height: ${(props) => (props.isActive ? "8000px" : "0")};
  overflow-y: ${(props) => (props.isActive ? "visible" : "hidden")};
  transition: max-height 0s ease-in-out;
`;
export const CartTool = ({ children, hasDropdown, title, isOrderTotal }) => {
  const [isActive, setIsActive] = useState(true);
  // const [isOnBlur, setIsOnBlur] = useState(false);
  return (
    <MainWrapperOfTool id="MainWrapperOfTool">
      {isOrderTotal ? (
        children
      ) : (
        <Accordion id="Accordion">
          <AccordionItem id="AccordionItem">
            <AccordionTitle id="AccordionTitle">
              <span>{title}</span>
              {hasDropdown && (
                <CaretDown
                  id="CaretDown"
                  onClick={() => setIsActive(!isActive)}
                  isActive={isActive}
                />
              )}
            </AccordionTitle>
            <AccordionContent id="AccordionContent" isActive={isActive}>
              <div style={{ padding: ".7em" }}>{children}</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </MainWrapperOfTool>
  );
};
