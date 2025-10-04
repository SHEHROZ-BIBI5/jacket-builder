// src/svg/Body.jsx
import React from "react";
import RightChestEmb from "../emb/RightChestEmb"; // <-- correct import

const Body = ({ color, embroidery }) => {
  return (
    <g id="VARSITY-FRONT-BODY">
      {/* Body Gradient */}
      <linearGradient
        id="body_1_"
        gradientUnits="userSpaceOnUse"
        x1="300.0184"
        y1="517.6903"
        x2="300.0184"
        y2="100.4642"
      >
        <stop offset="0" stopColor={color} />
        <stop offset="1" stopColor={color} />
      </linearGradient>

      {/* Jacket Body */}
      <path
        id="body"
        style={{
          fill: "url(#body_1_)",
          stroke: "#9DA2A5",
          strokeWidth: 1,
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
        d="M430.268,357.966c3-16-4.75-62-4.75-62
           c11.494-54.807,37.599-123.714,51-143.5
           c-35.5-53-176.5-52-176.5-52s-141-1-176.5,52
           c13.401,19.786,39.506,88.693,51,143.5
           c0,0-7.75,46-4.75,62s-25.5,77.5,1,104.25
           c15.966,14.997,74.348,19.032,106.913,20.111v35.117
           c6.985,0.168,14.134,0.247,21.419,0.247
           c7.924,0,15.689-0.095,23.254-0.301v-35.063
           c32.565-1.079,90.947-5.114,106.913-20.111
           C455.768,435.466,427.268,373.966,430.268,357.966z"
      />

      {/* Right Chest Embroidery */}
      {embroidery?.rightChest && <RightChestEmb embroidery={embroidery} />}
    </g>
  );
};

export default Body;
