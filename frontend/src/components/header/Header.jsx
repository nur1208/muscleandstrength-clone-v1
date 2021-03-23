import React, { useEffect } from "react";
import { Actions } from "./Actions";
import { CustomerSupport } from "./CustomerSupport";
import { Search } from "./Search";
import { useMediaQuery } from "react-responsive";
import { MenuBtn } from "./MenuBtn";
import { LocationBtn } from "./LocationBtn";
import { Logo } from "./Logo";
import { MobileSearch } from "./MobileSearch";
import { Navigation } from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../actions/sidebarAction";

export const Header = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const { isSidebarOpen } = sidebar;
  const dispatch = useDispatch();
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1084 });

  useEffect(() => {
    if (isDesktopOrLaptop && isSidebarOpen) {
      dispatch(closeSidebar());
    }
  }, [dispatch, isDesktopOrLaptop, isSidebarOpen]);

  return (
    <header>
      <div className="header-container">
        <MenuBtn />
        <LocationBtn />
        <Logo />
        <Logo styleName="mobile-logo" />
        <Search />
        <CustomerSupport />
        <Actions />
        <Navigation />
        <MobileSearch />
      </div>
    </header>
  );
};
