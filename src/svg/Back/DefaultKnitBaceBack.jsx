import React from "react";

const DefaultKnitBaceBack = ({ color = "#F3F5F8" }) => {
  return (
    <g id="VARSITY-BACK-KNIT">
      <linearGradient
        id="knitBackGradient"
        gradientUnits="userSpaceOnUse"
        x1="300"
        y1="109.3398"
        x2="300"
        y2="58.0376"
      >
        <stop offset="0" stopColor={color} />
        <stop offset="1" stopColor={color} />
      </linearGradient>

      <path
        style={{
          fill: "url(#knitBackGradient)",
          stroke: "#9DA2A5",
          strokeMiterlimit: 10,
        }}
        d="M148.802,493.435l6.772,25.134
          c1.156,4.275-1.351,6.83-5.28,8.874c-4.058,2.111-13.679,5.706-20.677,7.599c-6.998,1.893-17.119,3.639-21.688,3.862
          c-4.424,0.216-7.878-0.727-9.034-5.002l-6.798-25.129c0,0,13.725-1.641,28.862-5.736
          C137.255,498.628,148.802,493.435,148.802,493.435z"
      />
      <path
        style={{
          fill: "url(#knitBackGradient)",
          stroke: "#9DA2A5",
          strokeMiterlimit: 10,
        }}
        d="M451.231,493.435l-6.772,25.134
          c-1.156,4.275,1.351,6.83,5.28,8.874c4.058,2.111,13.679,5.706,20.677,7.599c6.998,1.893,17.119,3.639,21.688,3.862
          c4.424,0.216,7.878-0.727,9.034-5.002l6.793-25.109c0,0-13.721-1.661-28.857-5.756
          C462.778,498.628,451.231,493.435,451.231,493.435z"
      />
      <path
        style={{
          fill: "url(#knitBackGradient)",
          stroke: "#9DA2A5",
          strokeMiterlimit: 10,
        }}
        d="M300.037,482.716
          c0,0-104.349,0.617-128.447-19.798v27.329c0,3.784,1.957,7.275,5.132,9.17c24.04,14.346,69.841,18.274,122.397,18.274
          c54.284,0,101.367-4.323,124.703-19.715c2.924-1.928,4.661-5.289,4.661-8.869v-26.188
          C404.386,483.332,300.037,482.716,300.037,482.716z"
      />
    </g>
  );
};

export default DefaultKnitBaceBack;
