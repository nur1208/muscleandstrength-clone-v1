import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openDialogLogin } from "../../actions/dialogLoginActions";
import { logoutUser } from "../../actions/userActions";

export const LoginBtn = () => {
  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    dispatch(openDialogLogin());
  };

  const userSingIn = useSelector((state) => state.userSingIn);
  const { userInfo: userSingInSuccessfully } = userSingIn;

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div
      className="base-item account has-dropdown"
      onClick={() => !userSingInSuccessfully && handleOpenDialog()}
    >
      <img src="/images/user-login.png" alt="user-login.png" className="icon" />
      <img className="authenticated-user-image" src="#" alt="" />
      {userSingInSuccessfully ? (
        <>
          <span className="text show-auth">Account</span>
          <div className="submenu">
            <div className="user-account">
              <div className="welcome">
                Welcome, {userSingInSuccessfully.firstName}
              </div>
              <ul className="account-menu">
                <li>
                  <a
                    rel="nofollow"
                    href="https://www.muscleandstrength.com/store/customer/account/"
                  >
                    <img
                      src="/images/account.png"
                      alt="account.png"
                      className="icon"
                    />{" "}
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="https://www.muscleandstrength.com/store/sales/order/history/"
                  >
                    <img
                      src="/images/history.png"
                      alt="history.png"
                      className="icon"
                    />
                    {/* <svg style="width:1.3em; height:1.3em; margin-bottom:-.3em; margin-right: 0.1em;">
                      <use xlink:href="#icon-history"></use>
                      <image
                        style="width:1.3em; height:1.3em; margin-bottom:-.3em; margin-right: 0.1em;"
                        src="https://cdn.muscleandstrength.com/images/fallback/history.png"
                      ></image>
                    </svg> */}{" "}
                    Order History
                  </a>
                </li>
                <li className="logout" onClick={handleLogout}>
                  <Link to="/store/customer/account/logoutSuccess/">
                    <img
                      src="/images/logout.png"
                      alt="logout.png"
                      className="icon"
                    />
                    {/* <svg style="width:1.3em; height:1.3em; margin-bottom:-.3em; margin-right: 0.1em;">
                      <use xlink:href="#icon-logout"></use>
                      <image
                        style="width:1.3em; height:1.3em; margin-bottom:-.3em; margin-right: 0.1em;"
                        src="https://cdn.muscleandstrength.com/images/fallback/logout.png"
                      ></image>
                    </svg> */}{" "}
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <span className="text show-auth">Login</span>
      )}
    </div>
  );
};
