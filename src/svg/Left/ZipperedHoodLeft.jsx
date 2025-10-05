 import React from "react";

const ZipperedHoodLeft = ({ color }) => {
  return (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <defs>
        <linearGradient
          id="XMLID_2aHoodie_"
          gradientUnits="userSpaceOnUse"
          x1="300.7049"
          y1="517.6899"
          x2="300.7049"
          y2="445.5266"
        >
          <stop offset="0" style={{ stopColor: color || "#F3F5F8" }} />
          <stop offset="1" style={{ stopColor: color || "#F3F5F8" }} />
        </linearGradient>
      </defs>

      <g id="ZIPPERED-LEFT-COLLAR">
        <path
          style={{
            fill: "url(#XMLID_2aHoodie_)",
            stroke: "#9DA2A5",
            strokeMiterlimit: 10,
          }}
          d="M309.878,117.383
            c15.083,2,27.654,6.805,37.379,18.66c9.725,11.856,19.901,32.495,24.903,50.736c5.081,18.532,9.744,40.228,24.602,42.015
            c14.858,1.787,1.682-43.07-4.095-68.084c-1.42-6.15-15.647-49.712-31.926-67.237c-16.28-17.526-5.848-35.235-22.503-34.852
            c-16.655,0.383-17.025,9.728-35.262,19.683c-28.045,15.309-65.546,37.167-52.566,49.375
            C252.07,127.185,294.794,115.383,309.878,117.383z"
        />
      </g>
    </svg>
  );
};

export default ZipperedHoodLeft;
