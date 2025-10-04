import HoodieFrontCollarBg from "./HoodieFrontCollarBg";

// // A single component to contain all parts of the hoodie design.
// const HoodieFrontCollar = ({ color }) => {
//   return (
//     <svg
//       id="HOODIE-SVG"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 600 600"
//       className="w-full h-full"
//     >
//       {/* Group for the main collar background design */}
//       {/* <g id="HOODIE-FRONT-COLLAR-BG"> */}
//       {/* Define a linear gradient for the light fill of the collar */}
//       {/* <linearGradient
//           id="XMLID_4_"
//           gradientUnits="userSpaceOnUse"
//           x1="300.0184"
//           y1="120.8423"
//           x2="300.0184"
//           y2="64.1338"
//         >
//           <stop offset="0" style={{ stopColor: "#B6B8BA" }}></stop>
//           <stop offset="1" style={{ stopColor: "#F3F5F8" }}></stop>
//         </linearGradient> */}

//       {/* The main path of the collar, filled with the gradient */}
//       {/* <path
//           id="XMLID_33_"
//           style={{ fill: "url(#XMLID_4_)" }}
//           d="M300.018,120.842c0,0,4.304-4.798,13.16-9.254c6.221-3.13,35.507-8.74,47.166-19.278c8.623-7.076,12.694-14.173,18.809-19.112c0,0,18.609-10.904-30.672-8.793c-6.792,0.291-90.133,0.291-96.925,0c-49.281-2.112-30.672,8.793-30.672,8.793c6.115,4.939,10.186,12.036,18.809,19.112c11.659,10.538,40.945,16.148,47.166,19.278C295.715,116.045,300.018,120.842,300.018,120.842"
//         ></path> */}

//       {/* A darker path to create a shadow or layered effect */}
//       {/* <path
//           id="XMLID_1_"
//           style={{ fill: "#9DA2A5" }}
//           d="M300.018,96.44c-31.241,0-62.482-5.899-60.326-4.13c11.659,10.538,40.945,16.148,47.166,19.278c8.856,4.457,13.16,9.254,13.16,9.254s4.304-4.798,13.16-9.254c6.221-3.13,35.507-8.74,47.166-19.278C362.5,90.541,331.259,96.44,300.018,96.44z"
//           opacity="1"
//         ></path>
//       </g> */}

//       {/* Group for the front collar design */}
//       <g id="HOODIE-FRONT-COLLAR">
//         <linearGradient
//           id="XMLID_24_"
//           gradientUnits="userSpaceOnUse"
//           x1="205.33"
//           y1="89.9399"
//           x2="394.7068"
//           y2="89.9399"
//         >
//           <stop offset="0" style={{ stopColor: "#F3F5F8" }}></stop>
//           <stop offset="1" style={{ stopColor: "#F3F5F8" }}></stop>
//         </linearGradient>
//         <path
//           id="XMLID_1641_"
//           style={{
//             fill: "url(#XMLID_24_)",
//             stroke: "#9DA2A5",
//             strokeMiterlimit: 10,
//           }}
//           d="M374.654,59.498c6.952,0.613,17.994,2.249,18.608,19.221c0,0-1.019,8.698,0,17.177c1.671,13.905,11.45,18.288-56.233,21.266c-7.802,0.343-16.607,3.66-26.583,3.681h-10.429c0,0,4.304-4.798,13.16-9.254c6.221-3.13,35.507-8.74,47.166-19.278c8.623-7.076,12.694-14.173,18.809-19.112c0,0,18.609-10.904-30.672-8.793c-6.792,0.291-90.133,0.291-96.925,0c-49.281-2.112-30.672,8.793-30.672,8.793c6.115,4.939,10.186,12.036,18.809,19.112c11.659,10.538,40.945,16.148,47.166,19.278c8.856,4.456,13.16,9.254,13.16,9.254H289.59c-9.976-0.021-18.781-3.337-26.583-3.681c-67.682-2.978-57.904-7.361-56.233-21.266c1.019-8.478,0-17.177,0-17.177c0.613-16.972,11.656-18.608,18.608-19.221C232.335,58.884,367.702,58.884,374.654,59.498z"
//         ></path>
//       </g>
//       <HoodieFrontCollarBg />
//     </svg>
//   );
// };

// export default HoodieFrontCollar;

import React from "react";

const HoodieFrontCollar = ({ color }) => {
  return (
    <svg
      id="HOODIE-SVG"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      className="w-full h-full"
    >
      <g id="HOODIE-FRONT-COLLAR">
        <linearGradient
          id="XMLID_24_"
          gradientUnits="userSpaceOnUse"
          x1="205.33"
          y1="89.9399"
          x2="394.7068"
          y2="89.9399"
        >
          <stop offset="0" style={{ stopColor: color || "#F3F5F8" }}></stop>
          <stop offset="1" style={{ stopColor: color || "#F3F5F8" }}></stop>
        </linearGradient>
        <path
          style={{
            fill: "url(#XMLID_24_)",
            stroke: "#9DA2A5",
            strokeMiterlimit: 10,
          }}
          d="M374.654,59.498c6.952,0.613,17.994,2.249,18.608,19.221c0,0-1.019,8.698,0,17.177c1.671,13.905,11.45,18.288-56.233,21.266c-7.802,0.343-16.607,3.66-26.583,3.681h-10.429c0,0,4.304-4.798,13.16-9.254c6.221-3.13,35.507-8.74,47.166-19.278c8.623-7.076,12.694-14.173,18.809-19.112c0,0,18.609-10.904-30.672-8.793c-6.792,0.291-90.133,0.291-96.925,0c-49.281-2.112-30.672,8.793-30.672,8.793c6.115,4.939,10.186,12.036,18.809,19.112c11.659,10.538,40.945,16.148,47.166,19.278c8.856,4.456,13.16,9.254,13.16,9.254H289.59c-9.976-0.021-18.781-3.337-26.583-3.681c-67.682-2.978-57.904-7.361-56.233-21.266c1.019-8.478,0-17.177,0-17.177c0.613-16.972,11.656-18.608,18.608-19.221C232.335,58.884,367.702,58.884,374.654,59.498z"
        ></path>
      </g>
      <HoodieFrontCollarBg />
    </svg>
  );
};

export default HoodieFrontCollar;
