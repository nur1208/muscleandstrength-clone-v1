import React from "react";
import styled from "styled-components";

const UiDialog = styled.div`
  outline: 0;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ddd;
  position: fixed;
  top: 30px;
  height: auto;
  width: 800px;
  left: 274.5px;
  display: block;
  z-index: 101;

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
  max-height: 436.75px;
  height: auto;
`;

const Information = styled.div`
  * {
    margin-bottom: 15px;
  }
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

export const ShippingInfoModal = ({ setIsModalOpen }) => {
  return (
    <>
      <UiDialog id="UiDialog">
        <Titlebar id="Titlebar">
          <Title id="Title">&nbsp;</Title>
          <Button id="Button" onClick={() => setIsModalOpen(false)}>
            <Icon id="Icon" />
          </Button>
        </Titlebar>
        <DialogContent id="DialogContent">
          <Information id="Information">
            <h2>International Shipping</h2>
            <p>
              Since 2008, Muscle &amp; Strength has been shipping packages to
              over 150 countries. Our experienced International Shipping Team
              and shipping partners make it easy for you to shop at Muscle &amp;
              Strength and have your order delivered to your door, no matter
              where you live.
            </p>
            <p>
              Below you will find information about international shipping. If
              you would like more information about shipping to your country or
              still have questions, please{" "}
              <a href="/contact.html">email or chat</a> with our support team.
            </p>
            <h4>Shipping</h4>
            <p>
              All shipments are sent air freight from our Headquarters in the
              USA.
            </p>
            <p>
              When you choose your shipping option you will be provided an
              estimated delivery window. The estimated delivery window provided
              reflects most standard deliveries for the particular shipping
              carrier/method. However, some orders may my take longer to receive
              due to delays in customs clearance, air freight delays, and other
              unforeseen complications that are outside of our control.
            </p>
            <p>
              Our Distribution Center operates 7 days per week and most orders
              we receive are shipped out the same day they are received. When
              your order ships we will send you an email with your tracking
              number. Please note, tracking may take 24 hours to appear.
            </p>
            <h4>Customs</h4>
            <p>
              All packages must pass through customs clearance before being
              delivered to you. While we do our best restrict products we know
              are unable to be imported into certain countries, ultimately it is
              your responsibility to know if a product be imported before
              purchasing.
            </p>
            <p>
              If there is a problem with clearing your package you may be
              contacted by a customs agent. In the event that your package is
              seized or destroyed by customs we're unable to offer you a refund.
              If customs returns the package to us, we can offer you a full
              refund minus shipping costs.
            </p>
            <h4>Duties &amp; Taxes</h4>
            <p>
              You may have to pay local taxes (sales tax, VAT, GST etc) and
              duties charges when you receive your package. These charges are
              separate from the shipping charges and are billed directly from
              the carrier you chose to ship with.
            </p>
            <h4>Countries We Cannot Ship To</h4>
            <p>
              In accordance with US State Department regulations, we cannot ship
              to Cuba, Iran, North Korea (DPRK), Sudan and Syria.
            </p>
          </Information>
        </DialogContent>
      </UiDialog>
      <WidgetOverlay id="WidgetOverlay" onClick={() => setIsModalOpen(false)} />
    </>
  );
};
