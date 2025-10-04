import React from "react";

const ZipperedHoodRight = ({ color }) => {
  return (
    <svg
      width="400"
      height="300"
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md mx-auto"
    >
      <defs>
        <linearGradient
          id="XMLID_2aHoodie_right"
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

      <g id="ZIPPERED-RIGHT-COLLAR">
        <path
          style={{
            fill: "url(#XMLID_2aHoodie_right)",
            stroke: "#9DA2A5",
            strokeMiterlimit: 10,
          }}
          d="M290.024,117.383
            c-15.083,2-27.654,6.805-37.379,18.66c-9.725,11.856-19.901,32.495-24.903,50.736c-5.081,18.532-9.744,40.228-24.602,42.015
            c-14.858,1.787-1.682-43.07,4.095-68.084c1.42-6.15,15.647-49.712,31.926-67.237c16.28-17.526,5.848-35.235,22.503-34.852
            c16.655,0.383,17.025,9.728,35.262,19.683c28.045,15.309,65.546,37.167,52.566,49.375
            C347.831,127.185,305.107,115.383,290.024,117.383z"
        />
      </g>
    </svg>
  );
};

export default ZipperedHoodRight;
