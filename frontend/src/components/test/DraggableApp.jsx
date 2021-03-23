import React, { useState } from "react";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable";

export const DraggableApp = () => {
  return (
    <div>
      <DraggableCore handle=".here" defaultPosition={{ x: 0, y: 0 }}>
        <div className="box no-cursor">
          <strong className="cursor here">
            <div>Drag here</div>
          </strong>
          <div>You must click my handle to drag me</div>
        </div>
      </DraggableCore>
    </div>
  );
};
