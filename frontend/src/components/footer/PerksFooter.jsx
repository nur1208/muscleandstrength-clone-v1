import React from "react";
import { FaIdeal, FaGlassMartini } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
export const PerksFooter = () => {
  const links = [
    {
      hrefV: "/store/promos.html",
      bV: "b1",
      icon: <FaIdeal />,
      title: "Lowest Prices,",
      titleS: "Best Deals",
      text: "Super-low prices and killer deals on over 8,000 products!",
    },
    {
      hrefV: "/store/samples",
      bV: "b2",
      icon: <FaGlassMartini />,
      title: "Get free ",
      titleS: "samples",
      text: "Pick two free samples with every order at M&S!",
    },
    {
      hrefV: "/store/help/returns.html",
      bV: "b3",
      icon: <MdDateRange />,
      title: "60 Day Return ",
      titleS: "Policy",
      text: "100% money back satisfaction guarantee on all orders!",
    },
    {
      hrefV: "/contact.html",
      bV: "b4",
      icon: <AiFillPhone />,
      title: "Fit Support ",
      titleS: "Team",
      text: "Our team of fitness experts is standing by 7 days a week!",
    },
  ];
  return (
    <div className="perks-footer">
      <div className="max-wrap">
        <div className="main-text">
          The{" "}
          <span className="logo">
            <img src="/images/logo.png" alt="logo.png" />
          </span>{" "}
          Difference
        </div>
        <div className="text-block-wrap">
          {links.map((link, index) => {
            const { hrefV, bV, icon, title, titleS, text } = link;
            return (
              <a
                rel="nofollow"
                href={hrefV}
                className={`text-block ${bV}`}
                key={index}
              >
                <div className="icon">{icon}</div>
                <div className="title">
                  {title} <span>{titleS}</span>
                </div>
                <div className="text">{text}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
