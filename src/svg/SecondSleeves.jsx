import React from "react";

const SecondSleeves = ({ color }) => {
  const leftGradientId = "raglanLeftGradient";
  const rightGradientId = "raglanRightGradient";

  return (
    <g id="RAGLAN-SLEEVES-FRONT">
      {/* Left sleeve */}
      <linearGradient
        id={leftGradientId}
        gradientUnits="userSpaceOnUse"
        x1="54.4117"
        y1="305.7434"
        x2="255.9451"
        y2="305.7434"
      >
        <stop offset="0" stopColor={color} />
        <stop offset="1" stopColor={color} />
      </linearGradient>
      <path
        style={{
          fill: `url(#${leftGradientId})`,
          stroke: "#9DA2A5",
          strokeMiterlimit: 10,
        }}
        d="M255.945,102.715
          c-44.514,4.164-109.833,16.02-132.427,49.751l0.003,0.004
          c-12.482,23.708-29.26,64.057-49.003,132.163c0,0-18.754,45.535-17,59.667
          c1.663,13.404-7.347,32.333-0.507,66c6.84,33.667,10.84,72.667,32.507,95.667
          c0.836,0.887,2.562,2.807,2.562,2.807
          s13.725-1.641,28.862-5.736c16.296-4.408,27.841-9.609,27.841-9.609
          s1.163-27.268-3.265-52.795
          c-5.667-32.667-7-65.667-3-76.333
          c2.632-7.018,16.926-36.169,26.684-60.893
          c1.61-4.079,4.387-11.755,4.387-11.755
          s-7.578-52.209,12.887-104.935
          C206.898,134.099,255.742,102.845,255.945,102.715z"
      />

      {/* Right sleeve */}
      <linearGradient
        id={rightGradientId}
        gradientUnits="userSpaceOnUse"
        x1="344.0549"
        y1="305.7434"
        x2="545.5882"
        y2="305.7434"
      >
        <stop offset="0" stopColor={color} />
        <stop offset="1" stopColor={color} />
      </linearGradient>
      <path
        style={{
          fill: `url(#${rightGradientId})`,
          stroke: "#9DA2A5",
          strokeMiterlimit: 10,
        }}
        d="M344.055,102.715 c44.514,4.164,109.833,16.02,132.427,49.751l-0.003,0.004c12.482,23.708,29.26,64.057,49.003,132.163c0,0,18.754,45.535,17,59.667 c-1.663,13.404,7.347,32.333,0.507,66c-6.84,33.667-10.84,72.667-32.507,95.667c-0.866,0.92-2.562,2.807-2.562,2.807 s-13.725-1.641-28.862-5.736c-16.296-4.408-27.841-9.609-27.841-9.609s-0.091-1.408-0.128-2.12 c-0.449-8.68-0.664-27.285,3.393-50.675c5.667-32.667,7-65.667,3-76.333c-2.632-7.018-16.926-36.169-26.684-60.893 c-1.61-4.079-4.387-11.755-4.387-11.755s7.578-52.209-12.887-104.935C393.102,134.099,344.258,102.845,344.055,102.715z"
      />
    </g>
  );
};

export default SecondSleeves;
