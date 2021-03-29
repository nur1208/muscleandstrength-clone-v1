import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const NavBlock = () => {
  const navBlock = useSelector((state) => state.navBlock);
  const { pathName } = navBlock;
  return (
    <div className="nav-block">
      <div className="nav-block--inner">
        <div>
          <div className="breadcrumb">
            {pathName === "/" ? (
              "WELCOME TO MUSCLE &amp; STRENGTH!"
            ) : (
              <>
                <Link to="/">Home</Link>
                {` > ${pathName.split("/")[1]} ${
                  pathName.split("/")[2] === "review" ? " > review" : ""
                }  ${
                  pathName.split("/")[3] && pathName.split("/")[3].includes(":")
                    ? ">" + pathName.split("/")[3].substr(1)
                    : ""
                }`}
              </>
            )}
          </div>
          <div className="free-shipping-block">
            {/* <div className="international" style=""></div> */}
            <div className="international" style={{ display: "none" }}>
              <span className="icon">
                <img src="/images/airplane.png" alt="airplane.png" />
              </span>{" "}
              <div className="base-text">
                We Ship To <span className="country_name">Netherlands</span>{" "}
                <span className="text"> View Details</span>
              </div>
            </div>
            <div className="usa">
              <span className="icon">
                <img src="/images/truck.png" alt="truck.png" />
              </span>{" "}
              <span className="base-text"> Free Shipping</span>{" "}
              <span className="text"> On $99+ Orders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
