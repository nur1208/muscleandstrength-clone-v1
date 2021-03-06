import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Select = (props) => {
  let { options } = props;
  options = options || [{ value: "" }];
  const optionsConst = options;
  return (
    <div className="select-container">
      <select className="half" required defaultValue={"Choose Your Goal"}>
        {optionsConst.map((cItem, index) => (
          <option
            key={index}
            value={cItem.value}
            disabled={cItem.disabled}
            // selected={cItem.selected}
          >
            {cItem.text}
          </option>
        ))}
      </select>
      <RiArrowDropDownLine />
    </div>
  );
};
