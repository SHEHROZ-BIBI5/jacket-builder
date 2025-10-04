import React from "react";

const FrontPockets = ({ color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      width="100%"
      height="600px"
    >
      <g id="VARSITY-FRONT-POCKETS">
        <polygon
          points="208.854,359.48 203.28,360.627 214.861,433.446 220.436,432.299"
          style={{
            stroke: "#c6cbd2",
            strokeWidth: 1,
            fill: color, // 👈
            transform: "translate(190px, 0px)",
          }}
        />
        <polygon
          points="385.175,433.446 379.6,432.299 391.182,359.48 396.757,360.627"
          style={{
            stroke: "#c6cbd2",
            strokeWidth: 1,
            fill: color, // 👈
            transform: "translate(-190px, 0px)",
          }}
        />
      </g>
    </svg>
  );
};

export default FrontPockets;
