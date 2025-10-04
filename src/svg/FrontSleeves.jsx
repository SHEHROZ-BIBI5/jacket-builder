import React from "react";

const FrontSleeves = ({ color }) => {
  const gradientIdLeft = "sleeveGradientLeft";
  const gradientIdRight = "sleeveGradientRight";

  return (
    <g id="VARSITY-FRONT-SLEEVES">
      {/* Left sleeve */}
      <linearGradient
        id={gradientIdLeft}
        gradientUnits="userSpaceOnUse"
        x1="54.4117"
        y1="330.6208"
        x2="173.5883"
        y2="330.6208"
      >
        <stop offset="0" stopColor={color} />
        <stop offset="1" stopColor={color} />
      </linearGradient>
      <path
        style={{
          fill: `url(#${gradientIdLeft})`,
          stroke: "#9DA2A5",
          strokeWidth: 1,
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
        d="M173.588,291.651 c-11.917-54.049-37.015-119.906-50.067-139.181 
           c-12.482,23.708-29.26,64.057-49.003,132.163 
           c0,0-18.754,45.535-17,59.667 
           c1.663,13.404-7.347,32.333-0.507,66 
           c6.84,33.667,10.84,72.667,32.507,95.667 
           c0.866,0.92,2.562,2.807,2.562,2.807 
           s13.725-1.641,28.862-5.736 
           c16.296-4.408,27.841-9.609,27.841-9.609 
           s1.163-27.268-3.265-52.795 
           c-5.667-32.667-7-65.667-3-76.333 
           C145.584,356.124,164.478,317.911,173.588,291.651z"
      />

      {/* Right sleeve */}
      <linearGradient
        id={gradientIdRight}
        gradientUnits="userSpaceOnUse"
        x1="426.4117"
        y1="330.6297"
        x2="545.5883"
        y2="330.6297"
      >
        <stop offset="0" stopColor={color} />
        <stop offset="1" stopColor={color} />
      </linearGradient>
      <path
        style={{
          fill: `url(#${gradientIdRight})`,
          stroke: "#9DA2A5",
          strokeWidth: 1,
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
        d="M426.412,291.651 
           c11.917-54.049,37.015-119.906,50.067-139.181 
           c12.482,23.708,29.26,64.057,49.003,132.163 
           c0,0,18.754,45.535,17,59.667 
           c-1.663,13.404,7.347,32.333,0.507,66 
           c-6.84,33.667-10.84,72.667-32.507,95.667 
           c-0.866,0.92-1.72,1.866-2.567,2.824 
           c0,0-13.721-1.659-28.857-5.754 
           c-16.296-4.408-27.843-9.601-27.843-9.601 
           c-0.5-7.447-1.161-27.275,3.267-52.803 
           c5.667-32.667,7-65.667,3-76.333 
           C454.416,356.124,435.522,317.911,426.412,291.651z"
      />
    </g>
  );
};

export default FrontSleeves;
