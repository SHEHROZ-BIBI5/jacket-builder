import React from "react";

const BackSide = ({ colors }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 600 600"
      width="100%"
      height="600px"
      style={{ enableBackground: "new 0 0 600 600" }}
      xmlSpace="preserve"
    >
      <g id="VARSITY-BACK-BODY">
        <linearGradient
          id="XMLID_21_"
          gradientUnits="userSpaceOnUse"
          x1="300.0165"
          y1="482.7176"
          x2="300.0165"
          y2="100.4642"
        >
          <stop offset="0" style={{ stopColor: colors.body }} />
          <stop offset="1" style={{ stopColor: colors.body }} />
        </linearGradient>
        <path
          id="XMLID_1091_"
          style={{
            fill: "url(#XMLID_21_)", // gradient اب props سے آئے گا
            stroke: "#9DA2A5",
            strokeMiterlimit: 10,
          }}
          d="M300.017,482.716
            c0,0,106.75,0.634,129.25-20.5c26.5-26.75-2-88.25,1-104.25s-4.75-62-4.75-62c11.494-54.807,37.599-123.714,51-143.5
            c-35.5-53-176.5-52-176.5-52s-141-1-176.5,52c13.401,19.786,39.506,88.693,51,143.5c0,0-7.75,46-4.75,62s-25.5,77.5,1,104.25
            C193.267,483.349,300.017,482.716,300.017,482.716z"
        />
      </g>
    </svg>
  );
};

export default BackSide;
