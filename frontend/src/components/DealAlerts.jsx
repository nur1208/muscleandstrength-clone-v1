import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  CallToAction,
  Close,
  DealAlertWrap,
  FormWrap,
  Input,
  MessageWrap,
  NewsletterSignupForm,
  Text,
  Title,
} from "../styledComponents/DealAlertsSC";
import { IconCoseX } from "../svgs/IconCoseX";
import { IconDealAlert } from "../svgs/IconDealAlert";
import { Button } from "./Button";

export const DealAlerts = () => {
  const isNotPhone = useMediaQuery({ minWidth: 840 });

  return (
    <CallToAction id="CallToAction">
      <DealAlertWrap id="DealAlertWrap">
        <MessageWrap id="MessageWrap">
          <Title>
            Deal <IconDealAlert />
            <span>Alerts</span>
          </Title>
        </MessageWrap>
        <FormWrap id="FormWrap">
          <Text id="Text">
            Be the first to get notified when we post flash
            sales, coupon codes and new deals!
          </Text>
          <NewsletterSignupForm id="NewsletterSignupForm">
            <Input id="Input" placeholder="First Name" />

            <Input
              id="EmailInput"
              placeholder="Email Address"
              isEmail={true}
            />

            <Button
              isGreen={true}
              isLoading={true}
              style={isNotPhone ? { marginLeft: "2%" } : {}}
            >
              Get Alerts
            </Button>
          </NewsletterSignupForm>
          <Close id="Close">
            <IconCoseX />
          </Close>
        </FormWrap>
      </DealAlertWrap>
    </CallToAction>
  );
};
