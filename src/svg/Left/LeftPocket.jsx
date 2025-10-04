import React from "react";

const LeftPocket = ({ color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      width="100%"
      height="600px"
    >
      <g id="VARSITY-LEFT-POCKETS">
        <polygon
          points="274.169,433.446 268.594,432.299 280.176,359.48 285.75,360.627"
          style={{
            stroke: "#c6cbd2",
            strokeWidth: 1,
            fill: color, // 👈 pockets ka color yahan apply hoga
          }}
        />
      </g>
    </svg>
  );
};

export default LeftPocket;
