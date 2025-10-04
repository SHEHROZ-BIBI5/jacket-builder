import React from "react";

// یہ component hoodie کے front collar کا SVG design دکھاتا ہے
const HoodieFrontCollarBg = ({ color = "#B6B8BA" }) => (
  <svg
    id="HOODIE-FRONT-COLLAR-BG"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    className="w-full h-full"
  >
    {" "}
    {/* Light gradient for the collar */}
    <linearGradient
      id="XMLID_4_"
      gradientUnits="userSpaceOnUse"
      x1="300.0184"
      y1="120.8423"
      x2="300.0184"
      y2="64.1338"
    >
      {/* //   <stop offset="0" style={{ stopColor: color }} />
    //   <stop offset="1" style={{ stopColor: color }} /> */}
      <stop offset="0" style={{ stopColor: color, stopOpacity: 1 }} />
      <stop offset="1" style={{ stopColor: color, stopOpacity: 0.6 }} />{" "}
      {/* neeche halka shadow */}
    </linearGradient>
    {/* Main collar path with gradient */}
    <path
      id="XMLID_33_"
      style={{ fill: "url(#XMLID_4_)" }}
      d="M300.018,120.842c0,0,4.304-4.798,13.16-9.254c6.221-3.13,35.507-8.74,47.166-19.278c8.623-7.076,12.694-14.173,18.809-19.112c0,0,18.609-10.904-30.672-8.793c-6.792,0.291-90.133,0.291-96.925,0c-49.281-2.112-30.672,8.793-30.672,8.793c6.115,4.939,10.186,12.036,18.809,19.112c11.659,10.538,40.945,16.148,47.166,19.278C295.715,116.045,300.018,120.842,300.018,120.842"
    ></path>
    {/* Darker path for shadow/3D effect */}
    <path
      id="XMLID_1_"
      style={{ fill: color }} // ✅ yahan prop use karo
      d="M300.018,96.44c-31.241,0-62.482-5.899-60.326-4.13c11.659,10.538,40.945,16.148,47.166,19.278c8.856,4.457,13.16,9.254,13.16,9.254s4.304-4.798,13.16-9.254c6.221-3.13,35.507-8.74,47.166-19.278C362.5,90.541,331.259,96.44,300.018,96.44z"
      opacity="1"
    ></path>
  </svg>
);

const HoodieFrontCollarB = () => {
  return <HoodieFrontCollarBg />;
};

export default HoodieFrontCollarBg;
