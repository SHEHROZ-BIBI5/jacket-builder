import React from "react";

const RightPocket = ({ color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      width="100%"
      height="600px"
    >
      <g id="VARSITY-RIGHT-POCKETS">
        <polygon
          points="325.831,433.446 331.406,432.299 319.824,359.48 314.25,360.627"
          style={{
            stroke: "#c6cbd2",
            strokeWidth: 1,
            fill: color, // 👈
          }}
        />
      </g>
    </svg>
  );
};

export default RightPocket;
