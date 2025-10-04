// import React from "react";

// const DefaultSleevesLeft = ({ color }) => {
//   const sleevesColor = color || "#F3F5F8";

//   return (
//     <svg
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       x="0px"
//       y="0px"
//       viewBox="0 0 600 600"
//       width="100%"
//       height="600px"
//       style={{ enableBackground: "new 0 0 600 600" }}
//       xmlSpace="preserve"
//     >
//       <g id="VARSITY-LEFT-SLEEVES">
//         <linearGradient
//           id="XMLID_2x_"
//           gradientUnits="userSpaceOnUse"
//           x1="268.7261"
//           y1="333.0022"
//           x2="398.5745"
//           y2="333.0022"
//         >
//           {/* <stop offset="0" style={{ stopColor: sleevesColor }}></stop>
//           <stop offset="1" style={{ stopColor: sleevesColor }}></stop> */}
//           <stop offset="0" style={{ stopColor: sleevesColor }}></stop>
//           <stop offset="1" style={{ stopColor: sleevesColor }}></stop>
//         </linearGradient>
//         <path
//           id="XMLID_1310_"
//           style={{
//             fill: "url(#XMLID_2x_)",
//             stroke: "#999999",
//             strokeMiterlimit: 10,
//           }}
//           d="M268.726,490.035
//             c-0.003-0.091,3.381-21.935,8.53-33.05c10.233-22.09,26.157-43.948,27.487-59.731c2.006-23.794,10.042-35.475,11.173-51.553
//             c2.074-29.492-34.715-97.994-12.92-159.088c12.624-30.243,39.202-34.143,39.202-34.143s30.567,3.021,44.513,40.466
//             c13.946,37.445,11.737,59.184,11.737,59.184s-1.194,19.933-1.15,26.485c0.107,15.914-4.879,48.082-4.378,67.098
//             c1.788,14.602-0.438,23.347-2.657,29.097c-2.774,7.18-6.218,15.977-6.688,28.481c-0.846,22.517-7.599,23.359-14.635,40.529
//             c-7.036,17.167-31.329,54.491-36.395,60.684c-3.948,4.825-9.979,9.043-9.979,9.043s-16.662-5.091-27.707-9.913
//             C280.081,497.171,268.726,490.035,268.726,490.035z"
//         ></path>
//       </g>
//       <linearGradient
//         id="XMLID_2aHoodie_"
//         gradientUnits="userSpaceOnUse"
//         x1="300.7049"
//         y1="517.6899"
//         x2="300.7049"
//         y2="445.5266"
//       >
//         <stop offset="0" style={{ stopColor: sleevesColor }}></stop>
//         <stop offset="1" style={{ stopColor: sleevesColor }}></stop>
//       </linearGradient>
//     </svg>
//   );
// };

// export default DefaultSleevesLeft;

import React from "react";

const DefaultSleevesLeft = ({ color }) => {
  const sleevesColor = color || "#F3F5F8";

  return (
    <g id="VARSITY-LEFT-SLEEVES">
      <linearGradient
        id="leftSleeveGradient"
        gradientUnits="userSpaceOnUse"
        x1="268.7261"
        y1="333.0022"
        x2="398.5745"
        y2="333.0022"
      >
        <stop offset="0" stopColor={sleevesColor} />
        <stop offset="1" stopColor={sleevesColor} />
      </linearGradient>

      <path
        id="XMLID_1310_"
        style={{
          fill: "url(#leftSleeveGradient)",
          stroke: "#999999",
          strokeMiterlimit: 10,
        }}
        d="M268.726,490.035
            c-0.003-0.091,3.381-21.935,8.53-33.05c10.233-22.09,26.157-43.948,27.487-59.731c2.006-23.794,10.042-35.475,11.173-51.553
            c2.074-29.492-34.715-97.994-12.92-159.088c12.624-30.243,39.202-34.143,39.202-34.143s30.567,3.021,44.513,40.466
            c13.946,37.445,11.737,59.184,11.737,59.184s-1.194,19.933-1.15,26.485c0.107,15.914-4.879,48.082-4.378,67.098
            c1.788,14.602-0.438,23.347-2.657,29.097c-2.774,7.18-6.218,15.977-6.688,28.481c-0.846,22.517-7.599,23.359-14.635,40.529
            c-7.036,17.167-31.329,54.491-36.395,60.684c-3.948,4.825-9.979,9.043-9.979,9.043s-16.662-5.091-27.707-9.913
            C280.081,497.171,268.726,490.035,268.726,490.035z"
      />
    </g>
  );
};

export default DefaultSleevesLeft;
