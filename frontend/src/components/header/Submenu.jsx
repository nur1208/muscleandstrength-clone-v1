import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeSubmenu, openSubmenu } from "../../actions/submenuActions";
import { SubSubmenu } from "./SubSubmenu";

export const Submenu = ({
  index,
  baseBtnHref,
  baseBtnImg,
  baseBtnText,
  mainLinkHref,
  mainLinkImg,
  mainLinkText,
  hasSubSubmenu,
  subLinkListTitle,
  subSubmenu,
  linkListTitle,
  linkLists,
  featuredHref,
  featuredImg,
  featuredHeadLine,
  featuredCopy,
}) => {
  const submenu = useSelector((state) => state.submenu);
  const { isActives } = submenu;

  const sidebar = useSelector((state) => state.sidebar);
  const { isSidebarOpen } = sidebar;

  const dispatch = useDispatch();
  const handleOpenSubmenu = (e, index) => {
    if (isSidebarOpen) {
      e.preventDefault();
      dispatch(openSubmenu(index));
    }
  };
  const handleCloseSubmenu = (e, index) => {
    e.preventDefault();
    dispatch(closeSubmenu(index));
  };

  return (
    <li className={`base-item ${isActives[index] ? "open-submenu" : ""}`}>
      <Link
        to={baseBtnHref}
        className="base-item-button"
        onClick={(e) => handleOpenSubmenu(e, index)}
      >
        <span className="icon">
          <img
            src={baseBtnImg}
            alt={baseBtnImg.substring(
              baseBtnImg.lastIndexOf("/") + 1,
              baseBtnImg.lastIndexOf(".")
            )}
          />
        </span>
        {baseBtnText}
        <span className="caret">›</span>
      </Link>
      <div className="submenu">
        <button
          className="back-button"
          onClick={(e) => handleCloseSubmenu(e, index)}
        >
          <span className="caret">‹</span>
          Back
        </button>
        <div className="main-link">
          <a href={mainLinkHref}>
            <span className="icon">
              <img
                src={mainLinkImg}
                alt={mainLinkImg.substring(
                  mainLinkImg.lastIndexOf("/") + 1,
                  mainLinkImg.lastIndexOf(".")
                )}
              />
            </span>
            {mainLinkText}
          </a>
        </div>
        {hasSubSubmenu && subSubmenu && (
          <ul className="link-list link-list-submenu">
            <div className="link-list-title">{subLinkListTitle}</div>
            {subSubmenu.map((sub, index) => (
              <SubSubmenu {...sub} index={index} key={index} />
            ))}
          </ul>
        )}
        <ul
          className={`link-list ${
            !hasSubSubmenu && linkLists.length >= 10 ? "link-list-two-cols" : ""
          }`}
        >
          <div className={`link-list-title `}>{linkListTitle}</div>
          {linkLists.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.linkListHref}>
                  {link.linkListImg && (
                    <img
                      src={link.linkListImg}
                      alt={link.linkListImg.substring(
                        link.linkListImg.lastIndexOf("/") + 1,
                        link.linkListImg.lastIndexOf(".")
                      )}
                      className="icon"
                    />
                  )}{" "}
                  {link.linkListText}
                </a>
              </li>
            );
          })}
        </ul>
        {featuredHref && (
          <a className="featured-link" href={featuredHref}>
            <div className="featured-link-wrap">
              <div className="featured-link-icon">
                {featuredImg && (
                  <img
                    className="icon"
                    alt={featuredImg.substring(
                      featuredImg.lastIndexOf("/") + 1,
                      featuredImg.lastIndexOf(".")
                    )}
                    src={featuredImg}
                  />
                )}
              </div>
              <div className="featured-link-text">
                <div className="headline">{featuredHeadLine}</div>
                <div className="copy">{featuredCopy}</div>
              </div>
            </div>
          </a>
        )}
      </div>
    </li>
  );
};
