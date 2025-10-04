import React from "react";

const DefaultKnitBaceRight = ({ colors }) => {
  const sleevesColor = colors?.sleeves || "#F3F5F8";
  const knitColor = colors?.knit || "#F3F5F8";

  return (
    <>
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
        <g id="VARSITY-RIGHT-KNIT">
          <linearGradient
            id="XMLID_2ak_"
            gradientUnits="userSpaceOnUse"
            x1="299.2951"
            y1="517.6899"
            x2="299.2951"
            y2="445.5266"
          >
            <stop offset="0" style={{ stopColor: knitColor }}></stop>
            <stop offset="1" style={{ stopColor: knitColor }}></stop>
          </linearGradient>
          <path
            id="XMLID_952_"
            style={{
              fill: "url(#XMLID_2ak_)",
              stroke: "#9DA2A5",
              strokeMiterlimit: 10,
            }}
            d="M392.93,445.527
            c-1.2,4.337-2.877,8.282-5.155,11.668c-15.278,21.134-89.197,25.521-89.197,25.521s-72.485,0.634-87.763-20.5
            c-2.278-3.386-3.955-7.331-5.155-11.668l0,37.699c0,3.784,1.416,7.275,3.713,9.17c17.391,14.346,50.523,20.274,88.542,20.274
            c39.269,0,73.329-6.323,90.21-21.715c2.115-1.928,3.372-5.289,3.372-8.869L392.93,445.527z"
          ></path>
          <path
            id="XMLID_950_"
            style={{
              fill: "url(#XMLID_2ak_)",
              stroke: "#9DA2A5",
              strokeMiterlimit: 10,
            }}
            d="M341.664,513.902
            c1.772,4.059-0.333,6.955-3.92,9.554c-3.704,2.684-12.693,7.653-19.336,10.553c-6.644,2.9-16.399,6.114-20.885,7.005
            c-4.344,0.863-7.899,0.438-9.671-3.621l-10.415-23.858c0,0,13.336-3.639,27.707-9.913c15.472-6.754,26.128-13.594,26.128-13.594
            L341.664,513.902z"
          ></path>
          <linearGradient
            id="XMLID_2aHoodie_"
            gradientUnits="userSpaceOnUse"
            x1="300.7049"
            y1="517.6899"
            x2="300.7049"
            y2="445.5266"
          >
            <stop offset="0" style={{ stopColor: "#F3F5F8" }}></stop>
            <stop offset="1" style={{ stopColor: "#F3F5F8" }}></stop>
          </linearGradient>
        </g>
      </svg>
    </>
  );
};

export default DefaultKnitBaceRight;
