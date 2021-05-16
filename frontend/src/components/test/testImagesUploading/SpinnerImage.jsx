import React from "react";
import { FaBowlingBall } from "react-icons/fa";

export const SpinnerImage = () => {
  return (
    <div className="spinner fadein">
      <FaBowlingBall size="5x" color="#3B5998" />
    </div>
  );
};

// export default () => (
//   <div className="spinner fadein">
//     <FontAwesomeIcon icon={faBowlingBall} size="5x" color="#3B5998" />
//   </div>
// );
