import React from "react";

const HoodCollarBack = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <defs>
        <linearGradient
          id="XMLID_211x_"
          gradientUnits="userSpaceOnUse"
          x1="201.0311"
          y1="125.4123"
          x2="410.9651"
          y2="125.4123"
        >
          <stop offset="0" stopColor={color || "#F3F5F8"}></stop>
          <stop offset="1" stopColor={color || "#F3F5F8"}></stop>
        </linearGradient>
      </defs>

      <g id="HOODIE-BACK-COLLAR">
        <path
          style={{
            fill: color ? `url(#XMLID_211x_)` : "url(#XMLID_211x_)",
            stroke: "#9DA2A5",
            strokeMiterlimit: 10,
          }}
          d="M394.396,68.241 c7.256-1.201,9.85,1.868,9.85,16.5c5.317,2.465,8.825,3.885,5.295,14.127c0,0,0.232,8.71-1.454,13.444 c-6.31,17.716-25.661,38.855-43.468,58.16c-22.341,24.224-58.623,21.194-58.623,21.194s-36.278,3.031-58.623-21.194 c-17.804-19.306-37.154-40.444-43.464-58.16c-1.686-4.733-1.454-13.444-1.454-13.444c-3.53-10.242-0.022-11.662,5.295-14.127 c0-14.63,2.594-17.7,9.848-16.5c1.811,0.299,3.907,0.861,6.332,1.58c-0.533-8.108,7.671-13.452,21.585-9.393 c36.162,10.55,84.804,10.55,120.966,0c13.914-4.06,22.118,1.285,21.585,9.393C390.49,69.102,392.586,68.541,394.396,68.241z"
        ></path>
      </g>
    </svg>
  );
};

export default HoodCollarBack;
