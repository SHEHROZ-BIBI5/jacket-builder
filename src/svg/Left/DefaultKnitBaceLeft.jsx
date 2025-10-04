import React from "react";

const DefaultKnitBaceLeft = ({ colors }) => {
  const knitColor = colors.knit || "#F3F5F8"; // front ka color use karo

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
      <g id="VARSITY-LEFT-KNIT">
        <linearGradient
          id="XMLID_2a_"
          gradientUnits="userSpaceOnUse"
          x1="300.7049"
          y1="517.6899"
          x2="300.7049"
          y2="445.5266"
        >
          <stop offset="0" style={{ stopColor: knitColor }}></stop>
          <stop offset="1" style={{ stopColor: knitColor }}></stop>
        </linearGradient>
        <path
          id="XMLID_1490_"
          style={{
            fill: "url(#XMLID_2a_)",
            stroke: "#9DA2A5",
            strokeMiterlimit: 10,
          }}
          d="M207.07,445.527
            c1.2,4.337,2.877,8.282,5.155,11.668c15.278,21.134,89.197,25.521,89.197,25.521s72.485,0.634,87.763-20.5
            c2.278-3.386,3.955-7.331,5.155-11.668l0,37.699c0,3.784-1.416,7.275-3.713,9.17c-17.391,14.346-50.523,20.274-88.542,20.274
            c-39.269,0-73.329-6.323-90.21-21.715c-2.115-1.928-3.372-5.289-3.372-8.869L207.07,445.527z"
        ></path>
        <path
          id="XMLID_1488_"
          style={{
            fill: "url(#XMLID_2a_)",
            stroke: "#9DA2A5",
            strokeMiterlimit: 10,
          }}
          d="M258.336,513.902
            c-1.772,4.059,0.333,6.955,3.92,9.554c3.704,2.684,12.693,7.653,19.336,10.553c6.644,2.9,16.399,6.114,20.885,7.005
            c4.344,0.863,7.899,0.438,9.671-3.621l10.415-23.858c0,0-13.336-3.639-27.707-9.913c-15.472-6.754-26.128-13.594-26.128-13.594
            L258.336,513.902z"
        ></path>
      </g>
    </svg>
  );
};

export default DefaultKnitBaceLeft;
