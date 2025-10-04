import React from "react";

const RightHood = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <g id="HOODIE-RIGHT-COLLAR">
        <path
          style={{
            fill: color || "url(#XMLID_2aHoodie_)", // default color waise hi
            stroke: "#9DA2A5",
            strokeMiterlimit: 10,
          }}
          d="M349.579,127.678 c0,0,13.555-17.403-9.175-31.642s-39.208-29.457-75.94-34.978s-55.432-0.883-73.231,28.478c-17.964,14.733-23.321,54.987-13,63.5 c10.321,8.513-18.019,24.501,6.064,37.44c1.806,10.428,7.398,23.659,16.442,17.952c4.108-2.948,3.83-12.108,6.187-22.395 c4.639-20.24,23.576-64.896,52.472-77.521C284.529,97.533,318.991,119.23,349.579,127.678z"
        ></path>
      </g>
    </svg>
  );
};

export default RightHood;
