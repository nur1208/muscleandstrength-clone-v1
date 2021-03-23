import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSubSubmenu, openSubSubmenu } from "../../actions/submenuActions";

export const SubSubmenu = ({
  index,
  subSubBtnHref,
  subSubBtnText,
  subMainLinkHref,
  subMainLinkText,
  subMainLinkStyle,
  subMainLinkTitle,
  subLinks,
}) => {
  const subSubmenu = useSelector((state) => state.subSubmenu);
  const { isActives: subIsActives } = subSubmenu;
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar);
  const { isSidebarOpen } = sidebar;

  const handleOpenSubSubmenu = (e, index) => {
    if (isSidebarOpen) {
      e.preventDefault();
      dispatch(openSubSubmenu(index));
    }
  };
  const handleCloseSubSubmenu = (e, index) => {
    e.preventDefault();
    dispatch(closeSubSubmenu(index));
  };

  return (
    <li
      className={`has-sub-submenu ${
        subIsActives[index] ? "open-sub-submenu" : ""
      }`}
    >
      <a
        className="sub-submenu-button"
        href={subSubBtnHref}
        onClick={(e) => handleOpenSubSubmenu(e, index)}
      >
        {subSubBtnText} <span className="caret">›</span>
      </a>
      <div className="sub-submenu">
        <button
          className="back-button"
          onClick={(e) => handleCloseSubSubmenu(e, index)}
        >
          <span className="caret">‹</span>
          Back
        </button>
        {subMainLinkHref && (
          <div className="main-link">
            <a href={subMainLinkHref}>{subMainLinkText}</a>
          </div>
        )}
        <ul className={`link-list ${subMainLinkStyle}`}>
          <div className="link-list-title">{subMainLinkTitle}</div>
          {subLinks.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.linkHref}>
                  {link.linkImg && (
                    <img
                      src={link.linkImg}
                      alt={link.linkImg}
                      className="lazyloaded"
                    />
                  )}
                  {link.linkText}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};
