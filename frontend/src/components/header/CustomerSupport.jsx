import React from "react";
import { BsChatFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

export const CustomerSupport = () => {
  return (
    <div className="customer-support-container">
      <a className="title" href="/store/help" alt="M&amp;S Help">
        7 Day Customer Support
      </a>
      <ul className="support-menu">
        <li className="left">
          <span className="open-chat">
            <a href="/contact.html">
              <BsChatFill className="icon" /> Live Chat
            </a>
          </span>
        </li>
        <li className="right">
          <AiFillPhone className="icon" /> 1-800-537-9910
          {/* TODO make the phone number dynamic */}
        </li>
      </ul>
    </div>
  );
};
