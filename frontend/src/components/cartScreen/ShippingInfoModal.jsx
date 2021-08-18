import React from "react";
import styled from "styled-components";

const getIsSmallStyle = (isSmall, smallStyle, notSmallStyle) =>
  isSmall ? smallStyle : notSmallStyle;
const UiDialog = styled.div`
  outline: 0;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ddd;
  position: fixed;
  top: ${({ isSmall }) =>
    getIsSmallStyle(isSmall, "60px", "30px")};
  height: auto;
  // here
  width: ${({ isSmall }) =>
    getIsSmallStyle(isSmall, "650px", "800px")};
  /* width: ${({ isSmall }) => (isSmall ? "650px" : "800px")}; */
  left: ${({ isSmall }) =>
    getIsSmallStyle(isSmall, "350.5px", "274.5px")};
  /* left: ${({ isSmall }) =>
    isSmall ? "350.5px" : "274.5px"}; */
  display: block;
  z-index: ${({ isSupDialog }) => (isSupDialog ? "105" : "101")};

  @media (min-width: 840px) {
    padding: 15px;
  }
`;

const Titlebar = styled.div`
  position: relative;
  float: right;
  :before {
    content: "";
    display: table;
    border-collapse: collapse;
  }
  :after {
    content: "";
    display: table;
    border-collapse: collapse;
    clear: both;
  }
`;

const Title = styled.span`
  font-weight: 500;
  line-height: 30px;
  float: left;
  white-space: nowrap;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
`;

const Button = styled.button`
  user-select: none;
  overflow: visible;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  line-height: normal;
  display: inline-block;
  box-sizing: border-box;
  white-space: nowrap;
  border: none;
  background: 0 0;
  color: #454545;
  text-decoration: none;
  position: absolute;
  right: -13px;
  top: -10px;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  z-index: 102;
`;

const Icon = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  position: relative;
  text-indent: 0;

  :after {
    position: absolute;
    left: -2px;
    top: -2px;
    content: "✕";
    text-align: center;
    cursor: pointer;
    display: inline-block;
    font-size: 28px;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
`;

const DialogContent = styled.div`
  position: relative;
  border: 0;
  background: 0 0;
  overflow: auto !important;
  margin-right: 15px;
  width: auto;
  min-height: 118px;
  max-height: ${({ isSmall }) =>
    getIsSmallStyle(isSmall, "370.75px", "436.75px")};
  height: auto;
`;

const WidgetOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Dialog = ({
  setIsModalOpen,
  children,
  isSupDialog,
  isSmall,
}) => {
  const uiDialogProps = { isSupDialog, isSmall };
  const dialogContentProps = { isSmall };
  return (
    <>
      <UiDialog id="UiDialog" {...uiDialogProps}>
        <Titlebar id="Titlebar">
          <Title id="Title">&nbsp;</Title>
          <Button
            id="Button"
            onClick={() => setIsModalOpen(false)}
          >
            <Icon id="Icon" />
          </Button>
        </Titlebar>
        <DialogContent
          id="DialogContent"
          {...dialogContentProps}
        >
          {children}
        </DialogContent>
      </UiDialog>
      <WidgetOverlay
        id="WidgetOverlay"
        onClick={() => setIsModalOpen(false)}
      />
    </>
  );
};
