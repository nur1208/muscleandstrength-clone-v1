import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { FaPinterestSquare } from "react-icons/fa";
import { Select } from "../components/footer/Select";

export const foots = [
  {
    mainStyle: "foot-support",
    title: "Help & Shipping",
    footItems: [
      {
        relValue: "nofollow",
        hrefValue: "#store-help-main.html",
        text: "Help Center",
      },
      {
        relValue: "nofollow",
        hrefValue: "#contact.html",
        text: "Contact Support",
      },
      {
        relValue: "nofollow",
        hrefValue: "#store-customer-account",
        text: "Your Account",
      },
      {
        relValue: "nofollow",
        hrefValue: "#store-sales-order-history",
        text: "Order Status",
      },
      {
        relValue: "nofollow",
        hrefValue: "#store-help-shipping.html",
        text: "Shipping & Returns",
      },
    ],
  },
  {
    mainStyle: "foot-rewards",
    title: "M&S Rewards",
    footItems: [
      {
        relValue: "nofollow",
        hrefValue: "#store-rewards",
        text: "How to earn points?",
      },
      {
        relValue: "nofollow",
        hrefValue: "#store-rewards-catalog",
        text: "Rewards Catalog",
      },
    ],
    subFoot: {
      mainStyle: "foot-connect",
      title: "Follow M&S",
      uStyle: "follow",
      footItems: [
        {
          relValue: "nofollow",
          hrefValue: "#",
          icon: <AiFillYoutube />,
        },
        {
          relValue: "nofollow",
          hrefValue: "#",
          icon: <GrInstagram />,
        },
        {
          relValue: "nofollow",
          hrefValue: "#",
          icon: <FaPinterestSquare />,
        },
        {
          relValue: "nofollow",
          hrefValue: "#",
          icon: <AiFillFacebook />,
        },
        {
          relValue: "nofollow",
          hrefValue: "#",
          icon: <AiFillTwitterSquare />,
        },
      ],
    },
  },
];

export const footContact = {
  title: "Contact Us",
  itemTypeValue: "http://schema.org/Organization",
  itemName: "Muscle & Strength, LLC",
  address: {
    streetAddress: "1180 First Street South",
    addressLocality: "Columbia",
    addressRegion: "SC",
    postalCode: "29209",
    phone: "1-800-537-9910",
    emailHref: "/contact.html",
  },
};

export const footerFormOptions = [
  {
    value: "Choose Your Goal",
    text: "Choose Your Goal",
    disabled: true,
    selected: true,
  },
  { value: "Build Muscle", text: "Build Muscle" },
  { value: "Lose Fat", text: "Lose Fat" },
  { value: "Increase Strength", text: "Increase Strength" },
  { value: "Body Transformation", text: "Body Transformation" },
  { value: "Improve Sport", text: "Improve Sport" },
  { value: "Endurance", text: "Endurance" },
  { value: "Healthy Lifestyle", text: "Healthy Lifestyle" },
  { value: "Contest Prep", text: "Contest Prep" },
  { value: "Other", text: "Other" },
];

export const footJoin = {
  title: "Join Our Newsletter",
  headline:
    " Build muscle, lose fat & stay motivated. Join 500,000+ newsletter subscribers!",
};

export const footSignUp = {
  fields: [
    <input type="text" placeholder="First Name" required />,
    <input type="email" placeholder="Email Address" required />,
    <Select options={footerFormOptions} />,
  ],
};

export const footerTagline = {
  quote: (
    <div>
      THE TOOLS YOU NEED TO <br />
      BUILD THE BODY YOU WANT<span className="mark">®</span>
    </div>
  ),
};

export const footerLine = {
  links: [
    {
      relValue: "nofollow",
      hrefValue: "/about",
      text: "About",
    },

    {
      relValue: "nofollow",
      hrefValue: "/careers/",
      text: " Careers",
    },
    {
      relValue: "nofollow",
      hrefValue: "/writers/",
      text: "Write for Us",
    },
    {
      relValue: "nofollow",
      hrefValue: "/store/affiliate-program/",
      text: "Affiliates",
    },
    {
      relValue: "nofollow",
      hrefValue: "/terms.html#terms",
      text: "Terms of Use",
    },
    {
      relValue: "nofollow",
      hrefValue: "https://www.iubenda.com/privacy-policy/27031375",
      text: "Privacy Policy",
      targetValue: "_blank",
      classValue: "iubenda-nostyle no-brand iubenda-embed ",
      hasTitle: true,
    },
    {
      relValue: "nofollow",
      hrefValue: "/store/affiliate-program/",
      text: "Cookie Policy",
      targetValue: "_blank",
      classValue: "iubenda-nostyle no-brand iubenda-embed ",
      hasTitle: true,
    },
  ],
  message:
    "© Copyright 2005-2020, Muscle &amp; Strength LLC. Images copyright of their respective owners.",
};
