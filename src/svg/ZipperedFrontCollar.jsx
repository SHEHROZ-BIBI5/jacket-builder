import React from "react";

// A single component to contain all parts of the hoodie design.
const ZipperedFrontCollar = ({ color = "#F3F5F8" }) => {
  return (
    <svg
      id="HOODIE-SVG"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      className="w-full h-full"
    >
      {/* Group for the main collar background design */}
      <g id="HOODIE-FRONT-COLLAR-BG">
        {/* Define a linear gradient for the light fill of the collar */}
        <linearGradient
          id="XMLID_4_"
          gradientUnits="userSpaceOnUse"
          x1="300.0184"
          y1="120.8423"
          x2="300.0184"
          y2="64.1338"
        >
          <stop offset="0" style={{ stopColor: color }} />
          <stop offset="1" style={{ stopColor: color }} />
          {/* <stop offset="0" style={{ stopColor: "#F3F5F8" }}></stop>
          <stop offset="1" style={{ stopColor: "#F3F5F8" }}></stop> */}
        </linearGradient>
      </g>

      {/* Group for the front collar design */}
      <g id="HOODIE-FRONT-COLLAR">
        <linearGradient
          id="XMLID_24_"
          gradientUnits="userSpaceOnUse"
          x1="205.33"
          y1="89.9399"
          x2="394.7068"
          y2="89.9399"
        >
          {/* <stop offset="0" style={{ stopColor: "#F3F5F8" }}></stop>
          <stop offset="1" style={{ stopColor: "#F3F5F8" }}></stop> */}
          <stop offset="0" style={{ stopColor: color }} />
          <stop offset="1" style={{ stopColor: color }} />
        </linearGradient>
      </g>

      {/* Group for the zippered front collar design */}
      <g id="ZIPPERED-FRONT-COLLAR">
        <linearGradient
          id="XMLID_26_"
          gradientUnits="userSpaceOnUse"
          x1="138.7857"
          y1="97.0178"
          x2="461.2512"
          y2="97.0178"
        >
          {/* <stop offset="0" style={{ stopColor: "#F3F5F8" }}></stop>
          <stop offset="1" style={{ stopColor: "#F3F5F8" }}></stop> */}
          <stop offset="0" style={{ stopColor: color }} />
          <stop offset="1" style={{ stopColor: color }} />
        </linearGradient>
        <path
          id="XMLID_53_"
          style={{
            fill: "url(#XMLID_26_)",
            stroke: "#9DA2A5",
            strokeMiterlimit: 10,
          }}
          d="M379.598,97.154c0,0-4.684-12.076-13.31-20.948c-7.049-7.251-25.899-17.166-69.335-17.166c-43.435,0-56.157,9.915-63.206,17.166c-8.626,8.872-13.31,20.948-13.31,20.948c-31.792-0.493-92.909,40.867-79.849,37.664c13.183-3.232,36.722-18.739,64.818-20.218c28.096-1.479,32.037-3.204,51.013,8.133c18.975,11.337,68.223,11.337,87.198,0c18.975-11.337,22.917-9.611,51.013-8.133c28.096,1.479,51.636,16.986,64.819,20.218C472.509,138.022,411.39,96.662,379.598,97.154z M342.268,87.037c-12.092,8.328-39.777,28.035-40.171,39.884c-0.016,0.517-4.111,0.481-4.135-0.071c-0.545-11.857-28.136-31.479-40.194-39.786c-3.764-2.59-13.786-7.523-4.025-13.449c17.402-9.136,75.146-9.164,92.549-0.03C356.054,79.512,346.033,84.444,342.268,87.037z"
        ></path>

        <path
          id="XMLID_53_"
          style={{
            fill: "url(#XMLID_26_)",
            stroke: "#9DA2A5",
            strokeMiterlimit: 10,
          }}
          d="M379.598,97.154c0,0-4.684-12.076-13.31-20.948c-7.049-7.251-25.899-17.166-69.335-17.166c-43.435,0-56.157,9.915-63.206,17.166c-8.626,8.872-13.31,20.948-13.31,20.948c-31.792-0.493-92.909,40.867-79.849,37.664c13.183-3.232,36.722-18.739,64.818-20.218c28.096-1.479,32.037-3.204,51.013,8.133c18.975,11.337,68.223,11.337,87.198,0c18.975-11.337,22.917-9.611,51.013-8.133c28.096,1.479,51.636,16.986,64.819,20.218C472.509,138.022,411.39,96.662,379.598,97.154z M342.268,87.037c-12.092,8.328-39.777,28.035-40.171,39.884c-0.016,0.517-4.111,0.481-4.135-0.071c-0.545-11.857-28.136-31.479-40.194-39.786c-3.764-2.59-13.786-7.523-4.025-13.449c17.402-9.136,75.146-9.164,92.549-0.03C356.054,79.512,346.033,84.444,342.268,87.037z"
        ></path>
      </g>
    </svg>
  );
};

export default ZipperedFrontCollar;
