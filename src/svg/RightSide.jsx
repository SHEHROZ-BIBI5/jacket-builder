import React from "react";

const RightSide = ({ colors }) => {
  const bodyColor = colors?.body || "#F3F5F8";
  const sleevesColor = colors?.sleeves || "#F3F5F8";
  const knitColor = colors?.knit || "#F3F5F8";

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
      <g id="VARSITY-RIGHT-BODY">
        <linearGradient
          id="XMLID_2aaa_"
          gradientUnits="userSpaceOnUse"
          x1="204.568"
          y1="291.5907"
          x2="398.5745"
          y2="291.5907"
        >
          <stop offset="0" style={{ stopColor: bodyColor }}></stop>
          <stop offset="1" style={{ stopColor: bodyColor }}></stop>
        </linearGradient>
        <path
          id="XMLID_953_"
          style={{
            fill: "url(#XMLID_2aaa_)",
            stroke: "#999999",
            strokeMiterlimit: 10,
          }}
          d="M205.527,425.266
            c3.512-10.757,8.431-29.952,5.428-41.145c-3.003-11.196,0-17.078,0-17.078s3.463-41.326,2.952-55.113
            c-0.607-16.401-8.345-65.113-8.345-65.113s-8.676-97.491,38.447-143.381c6.541-6.37,36.081-1.619,55.315,5.939
            c38.668,15.196,50.157,18.304,50.157,18.304s3.181,17.519,18.75,45.789c15.57,28.274,26.429,39.543,29.502,97.316
            c3.073,57.774-3.268,147.329-3.268,154.923c0,7.898-0.572,14.292-1.668,19.82c-1.2,4.337-2.877,8.282-5.155,11.668
            c-15.278,21.134-89.197,25.521-89.197,25.521s-72.485,0.634-87.763-20.5c-2.278-3.386-3.955-7.331-5.155-11.667
            C204.551,440.376,203.977,430.015,205.527,425.266z"
        ></path>
      </g>
    </svg>
  );
};

export default RightSide;
