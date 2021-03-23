import React, { useState } from "react";
import { Resizable } from "react-resizable";

export const ResizableApp = () => {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);
  const [absoluteWidth, setAbsoluteWidth] = useState(200);
  const [absoluteHeight, setAbsoluteHeight] = useState(200);

  const onResize = (event, { element, size, handle }) => {
    setHeight(size.height);
    setWidth(size.width);
  };
  const onResetClick = () => {
    setWidth(200);
    setHeight(200);
    setAbsoluteWidth(200);
    setAbsoluteHeight(200);
  };
  return (
    <div>
      <Resizable
        className="box"
        height={height}
        width={width}
        onResize={onResize}
        resizeHandles={["sw", "se", "nw", "ne", "w", "e", "n", "s"]}
      >
        <div
          className="box"
          style={{
            width: width + "px",
            height: height + "px",
          }}
        >
          <span className="text">
            {"Raw use of <Resizable> element. 200x200, all Resize Handles."}
          </span>
          <button onClick={onResetClick} style={{ marginTop: "10px" }}>
            Reset this element's width/height
          </button>
        </div>
      </Resizable>
    </div>
  );
};
