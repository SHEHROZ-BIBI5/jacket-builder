import React from "react";

const FrontCollar = ({ color = "#F3F5F8" }) => {
  return (
    <g id="VARSITY-FRONT-COLLAR">
      <linearGradient
        id="XMLID_23_"
        gradientUnits="userSpaceOnUse"
        x1="300.0184"
        y1="130.0473"
        x2="300.0184"
        y2="58.0376"
      >
        {/* ✅ style ki jagah direct stopColor use karo */}
        <stop offset="0" stopColor={color} />
        <stop offset="1" stopColor={color} />
      </linearGradient>

      <path
        id="XMLID_1283_"
        style={{
          fill: "url(#XMLID_23_)",
          stroke: "#9DA2A5",
          strokeMiterlimit: 10,
        }}
        d="M253.728,69.622
          c-9.761,6.528,0.26,11.962,4.025,14.819c12.621,9.575,42.253,32.809,40.088,45.599c0,0-22.47,0.498-39.247-6.777
          c-16.777-7.272-22.178-15.302-23.475-17.602c0,0,2.798-15.006,6.027-24.197c3.799-10.812,9.336-17.111,22.889-20.417
          c16.341-3.992,55.591-4.023,71.934-0.031c13.551,3.304,19.089,9.605,22.889,20.418c3.228,9.188,6.06,24.226,6.06,24.226
          c-1.298,2.297-6.73,10.298-23.509,17.569c-16.776,7.275-39.219,6.781-39.219,6.781c-2.167-12.79,27.441-36.024,40.062-45.603
          c3.764-2.853,13.786-8.288,4.025-14.817C328.873,59.526,271.13,59.557,253.728,69.622z"
      />
    </g>
  );
};

export default FrontCollar;
