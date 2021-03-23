import React from "react";
import { useSelector } from "react-redux";

import {
  footContact,
  footerLine,
  footerTagline,
  footJoin,
  foots,
} from "../../data/footdata";
import { Foot } from "./Foot";
import { FootContact } from "./FootContact";
import { FootJoin } from "./FootJoin";
import { FooterTagline } from "./FooterTagline";
import { FooterLine } from "./FooterLine";
import { PerksFooter } from "./PerksFooter";

export const Footer = () => {
  const navBlock = useSelector((state) => state.navBlock);
  const { pathName } = navBlock;
  // TODO const handleSignUp = () => {};
  return (
    <footer>
      {pathName !== "/" && <PerksFooter />}
      <div className="footer-container">
        {foots.map((foot, index) => {
          return <Foot {...foot} key={index} />;
        })}
        <FootContact {...footContact} />
        <FootJoin {...footJoin} />
        <FooterTagline {...footerTagline} />
        <FooterLine {...footerLine} />
      </div>
    </footer>
  );
};
