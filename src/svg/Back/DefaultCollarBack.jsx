import React from "react";

const DefaultCollarBack = ({ color = "#F3F5F8" }) => {
  return (
    <g id="VARSITY-BACK-KNIT">
      <defs>
        <linearGradient
          id="knitBackGradient"
          gradientUnits="userSpaceOnUse"
          x1="300"
          y1="109.3398"
          x2="300"
          y2="58.0376"
        >
          {/* <stop offset="0" stopColor="#F3F5F8" />
          <stop offset="1" stopColor="#F3F5F8" /> */}
          <stop offset="0" stopColor={color} />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>

      <path
        d="M358.852,81.499 
           c-3.803-10.828-9.349-17.137-22.924-20.447
           c-16.364-3.998-55.672-4.029-72.039-0.031
           c-13.572,3.309-19.118,9.619-22.924,20.449
           c-3.232,9.202-5.865,22.648-5.865,22.648
           s36.43,5.222,66.832,5.222
           c30.402,0,62.968-5.222,62.968-5.222
           S362.088,90.704,358.852,81.499z"
        style={{
          fill: "url(#knitBackGradient)",
          stroke: "#9DA2A5",
          strokeWidth: 1,
          strokeMiterlimit: 10,
        }}
      />
    </g>
  );
};

export default DefaultCollarBack;
