import React, { useState } from "react";
import { PopUp } from "./PopUp";

export const AppPop = () => {
  const [seen, setSeen] = useState(false);
  require("../testPopUp/popUp.css");
  // state = {
  //   seen: false,
  // };
  const togglePop = () => {
    //   this.setState({
    //     seen: !this.state.seen,
    //   });

    setSeen(!seen);
  };
  return (
    <div>
      <div className="btn" onClick={togglePop}>
        <button>New User?</button>
      </div>
      {seen ? <PopUp toggle={togglePop} /> : null}
    </div>
  );
};
