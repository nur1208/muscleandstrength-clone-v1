import React from "react";
import { useState } from "react";
import styled from "styled-components";

const SodSelect = styled.span`
  user-select: none;
  display: inline-block;
  position: relative;
  width: 100%;
  height: 42px;
  padding: 12px 8px 11px 10px;
  border: 1px solid #ddd;
  background: #fff;
  text-align: left;
  line-height: 1;
  outline: 0;
  outline-offset: -2px;
  cursor: pointer;
  border-radius: 2px;
  color: #303030;
  :before {
    content: "▲";
    position: absolute;
    right: 10px;
    font-size: 7px;
    top: 10px;
  }
  :after {
    content: "▼";
    top: auto;
    bottom: 10px;
    position: absolute;
    right: 10px;
    font-size: 7px;
  }

  * {
    user-select: none;
    box-sizing: border-box;
  }

  box-shadow: ${(props) => props.isOpen && "0 0 5px rgb(0 0 0 / 20%);"};

  border-color: ${(props) => props.isOpen && "#888"};

  :hover {
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
    border-color: #888;
  }
`;

const SodLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 15px;
  display: block;
`;
// TODO global component.

const flags = {
  es: "0 -3211px",
  us: "0 -551px",
  sa: "0 -2337px",
};
const FlagsIcon = styled.div`
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;

  margin: 0 auto;
  width: 40px;
  height: 19px;
  background-position: ${(props) => flags[props.flag.toLowerCase()]};

  display: inline-block;
  margin-bottom: -0.2em;
  margin-right: 0.5em;
`;

// flags.png;

const SodListWrapper = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  height: auto;
  width: 100%;
  background: #fff;
  border: 1px solid #a2a2a2;
  border-top: 1px solid #aaa;
  color: #535353;
  z-index: 1;
  border-radius: 0 0 2px 2px;
  overflow-y: auto;
`;

const SodList = styled.span`
  display: block;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  max-height: 194px;
`;

const SodOption = styled.span`
  display: block;
  position: relative;
  padding: 10px;
  list-style-type: none;
  padding-right: ${(props) => props.isSelected && "25px"};

  ${(props) =>
    props.isActive &&
    ` background: #059;
    color: #fff;`}

  :before {
    content: "";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: ${(props) => (props.isSelected ? " inline-block" : "none")};
    color: #aaa;
    height: 9px;
    width: 10px;
    background: url(${(props) => props.icon});
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CountrySelector = ({
  countryOptions,
  selectedIndex,
  setSelectedIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [whoseActive, setWhoseActive] = useState(
    Array(countryOptions.length).fill(false)
  );

  // const checkSelectedAndActive = (isActive, isSelected) => {
  //   if (isActive) {
  //     return true;
  //   }else{

  //   }

  //   else
  //   return false;
  // };

  //  const handleBlur = (e) => {
  //    const currentTarget = e.currentTarget;

  //    // Check the newly focused element in the next tick of the event loop
  //    setTimeout(() => {
  //      // Check if the new activeElement is a child of the original container
  //      if (!currentTarget.contains(document.activeElement)) {
  //        // You can invoke a callback or add custom logic here
  //        onBlur();
  //      }
  //    }, 0);
  //  };
  const checkBlur = () => {};

  return (
    <div
    // style={{ minHeight: " 194px", zIndex: 3 }}
    // tabIndex={0}
    // onBlur={() => setIsOpen(false)}
    >
      <SodSelect
        id="SodSelect"
        title="Country"
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <SodLabel id="SodLabel">
          <FlagsIcon
            id="FlagsIcon"
            icon={"/images/flags.png"}
            flag={countryOptions[selectedIndex].icon}
          />
          {countryOptions[selectedIndex].name}
        </SodLabel>
        <SodListWrapper id="SodListWrapper" isOpen={isOpen}>
          <SodList id="SodList">
            {countryOptions.map((item, index) => {
              return (
                <SodOption
                  tabIndex={0}
                  id="SodOption"
                  onMouseOver={() =>
                    setWhoseActive(whoseActive.map((_, inx) => inx === index))
                  }
                  isActive={
                    selectedIndex === index && !whoseActive.includes(true)
                      ? true
                      : whoseActive[index]
                      ? true
                      : false
                  }
                  isSelected={selectedIndex === index}
                  icon="/images/check.svg"
                  onClick={() => setSelectedIndex(index)}
                  // onBlur={handleBlur}
                  // isActive={}
                >
                  <FlagsIcon
                    id="FlagsIcon"
                    icon={"/images/flags.png"}
                    flag={item.icon}
                  />
                  {item.name}
                </SodOption>
              );
            })}
          </SodList>
        </SodListWrapper>
        <select name="country_id" id="country" style={{ display: "none" }}>
          <option value="US">United States</option>
        </select>
      </SodSelect>
      {/* <Background id="Background2" /> */}
    </div>
  );
};
