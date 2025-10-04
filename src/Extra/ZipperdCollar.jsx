import React from "react";

const ZipperdCollar = () => {
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
          <stop offset="0" style={{ stopColor: "#B6B8BA" }}></stop>
          <stop offset="1" style={{ stopColor: "#F3F5F8" }}></stop>
        </linearGradient>

        {/* The main path of the collar, filled with the gradient */}
        {/* <path
          id="XMLID_33_"
          style={{ fill: "url(#XMLID_4_)" }}
          d="M300.018,120.842c0,0,4.304-4.798,13.16-9.254c6.221-3.13,35.507-8.74,47.166-19.278c8.623-7.076,12.694-14.173,18.809-19.112c0,0,18.609-10.904-30.672-8.793c-6.792,0.291-90.133,0.291-96.925,0c-49.281-2.112-30.672,8.793-30.672,8.793c6.115,4.939,10.186,12.036,18.809,19.112c11.659,10.538,40.945,16.148,47.166,19.278C295.715,116.045,300.018,120.842,300.018,120.842"
        ></path>

        {/* A darker path to create a shadow or layered effect */}
        {/* <path
          id="XMLID_1_"
          style={{ fill: "#9DA2A5" }}
          d="M300.018,96.44c-31.241,0-62.482-5.899-60.326-4.13c11.659,10.538,40.945,16.148,47.166,19.278c8.856,4.457,13.16,9.254,13.16,9.254s4.304-4.798,13.16-9.254c6.221-3.13,35.507-8.74,47.166-19.278C362.5,90.541,331.259,96.44,300.018,96.44z"
          opacity="1"
        ></path> */}
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
          <stop offset="0" style={{ stopColor: "#F3F5F8" }}></stop>
          <stop offset="1" style={{ stopColor: "#F3F5F8" }}></stop>
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
          <stop offset="0" style={{ stopColor: "#F3F5F8" }}></stop>
          <stop offset="1" style={{ stopColor: "#F3F5F8" }}></stop>
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

export default ZipperdCollar;






img:is([sizes="auto" i],[sizes^="auto," i]) {
    contain-intrinsic-size: 3000px 1500px
}

img.wp-smiley,img.emoji {
    display: inline !important;
    border: none !important;
    box-shadow: none !important;
    height: 1em !important;
    width: 1em !important;
    margin: 0 .07em !important;
    vertical-align: -.1em !important;
    background: 0 0 !important;
    padding: 0 !important
}

@charset "UTF-8";.wp-block-archives {
    box-sizing: border-box
}

 
:root :where(.wp-block-cover h1:not(.has-text-color)),:root :where(.wp-block-cover h2:not(.has-text-color)),:root :where(.wp-block-cover h3:not(.has-text-color)),:root :where(.wp-block-cover h4:not(.has-text-color)),:root :where(.wp-block-cover h5:not(.has-text-color)),:root :where(.wp-block-cover h6:not(.has-text-color)),:root :where(.wp-block-cover p:not(.has-text-color)) {
    color: inherit
}
 
@media not (prefers-reduced-motion) {
    .wp-block-navigation__responsive-container.is-menu-open {
        animation: overlay-menu__fade-in-animation .1s ease-out;
        animation-fill-mode: forwards
    }
}
@-webkit-keyframes a {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes a {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.mejs-controls {
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 40px;
    left: 0;
    list-style-type: none;
    margin: 0;
    padding: 0 10px;
    position: absolute;
    width: 100%;
    z-index: 3
}

.mejs-controls:not([style*="display: none"]) {
    background: rgba(255,0,0,.7);
    background: -webkit-linear-gradient(transparent,rgba(0,0,0,.35));
    background: linear-gradient(transparent,rgba(0,0,0,.35))
}

.mejs-button,.mejs-time,.mejs-time-rail {
    font-size: 10px;
    height: 40px;
    line-height: 10px;
    margin: 0;
    width: 32px
}

.mejs-button>button {
    background: transparent url(//novojackets.com/wp-includes/js/mediaelement/mejs-controls.svg);
    border: 0;
    cursor: pointer;
    display: block;
    font-size: 0;
    height: 20px;
    line-height: 0;
    margin: 10px 6px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-decoration: none;
    width: 20px
}

.mejs-button>button:focus {
    outline: 1px dotted #999
}

.mejs-container-keyboard-inactive [role=slider],.mejs-container-keyboard-inactive [role=slider]:focus,.mejs-container-keyboard-inactive a,.mejs-container-keyboard-inactive a:focus,.mejs-container-keyboard-inactive button,.mejs-container-keyboard-inactive button:focus {
    outline: 0
}

.mejs-time {
    box-sizing: content-box;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    height: 24px;
    overflow: hidden;
    padding: 16px 6px 0;
    text-align: center;
    width: auto
}

.mejs-play>button {
    background-position: 0 0
}

.mejs-pause>button {
    background-position: -20px 0
}

.mejs-replay>button {
    background-position: -160px 0
}

.mejs-time-rail {
    direction: ltr;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 40px;
    margin: 0 10px;
    padding-top: 10px;
    position: relative
}

.mejs-time-buffering,.mejs-time-current,.mejs-time-float,.mejs-time-float-corner,.mejs-time-float-current,.mejs-time-hovered,.mejs-time-loaded,.mejs-time-marker,.mejs-time-total {
    border-radius: 2px;
    cursor: pointer;
    display: block;
    height: 10px;
    position: absolute
}

.mejs-time-total {
    background: hsla(0,0%,100%,.3);
    margin: 5px 0 0;
    width: 100%
}

.mejs-time-buffering {
    -webkit-animation: b 2s linear infinite;
    animation: b 2s linear infinite;
    background: -webkit-linear-gradient(135deg,hsla(0,0%,100%,.4) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.4) 0,hsla(0,0%,100%,.4) 75%,transparent 0,transparent);
    background: linear-gradient(-45deg,hsla(0,0%,100%,.4) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.4) 0,hsla(0,0%,100%,.4) 75%,transparent 0,transparent);
    background-size: 15px 15px;
    width: 100%
}

@-webkit-keyframes b {
    0% {
        background-position: 0 0
    }

    to {
        background-position: 30px 0
    }
}

@keyframes b {
    0% {
        background-position: 0 0
    }

    to {
        background-position: 30px 0
    }
}

.mejs-time-loaded {
    background: hsla(0,0%,100%,.3)
}

.mejs-time-current,.mejs-time-handle-content {
    background: hsla(0,0%,100%,.9)
}

.mejs-time-hovered {
    background: hsla(0,0%,100%,.5);
    z-index: 10
}

.mejs-time-hovered.negative {
    background: rgba(0,0,0,.2)
}

.mejs-time-buffering,.mejs-time-current,.mejs-time-hovered,.mejs-time-loaded {
    left: 0;
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transition: all .15s ease-in;
    transition: all .15s ease-in;
    width: 100%
}

.mejs-time-buffering {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1)
}

.mejs-time-hovered {
    -webkit-transition: height .1s cubic-bezier(.44,0,1,1);
    transition: height .1s cubic-bezier(.44,0,1,1)
}

.mejs-time-hovered.no-hover {
    -webkit-transform: scaleX(0)!important;
    -ms-transform: scaleX(0)!important;
    transform: scaleX(0)!important
}

.mejs-time-handle,.mejs-time-handle-content {
    border: 4px solid transparent;
    cursor: pointer;
    left: 0;
    position: absolute;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    z-index: 11
}

.mejs-time-handle-content {
    border: 4px solid hsla(0,0%,100%,.9);
    border-radius: 50%;
    height: 10px;
    left: -7px;
    top: -4px;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    width: 10px
}

.mejs-time-rail .mejs-time-handle-content:active,.mejs-time-rail .mejs-time-handle-content:focus,.mejs-time-rail:hover .mejs-time-handle-content {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
}

.mejs-time-float {
    background: #eee;
    border: 1px solid #333;
    bottom: 100%;
    color: #111;
    display: none;
    height: 17px;
    margin-bottom: 9px;
    position: absolute;
    text-align: center;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 36px
}

.mejs-time-float-current {
    display: block;
    left: 0;
    margin: 2px;
    text-align: center;
    width: 30px
}

.mejs-time-float-corner {
    border: 5px solid #eee;
    border-color: #eee transparent transparent;
    border-radius: 0;
    display: block;
    height: 0;
    left: 50%;
    line-height: 0;
    position: absolute;
    top: 100%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 0
}

.mejs-long-video .mejs-time-float {
    margin-left: -23px;
    width: 64px
}

.mejs-long-video .mejs-time-float-current {
    width: 60px
}

.mejs-broadcast {
    color: #fff;
    height: 10px;
    position: absolute;
    top: 15px;
    width: 100%
}

.mejs-fullscreen-button>button {
    background-position: -80px 0
}

.mejs-unfullscreen>button {
    background-position: -100px 0
}

.mejs-mute>button {
    background-position: -60px 0
}

.mejs-unmute>button {
    background-position: -40px 0
}

.mejs-volume-button {
    position: relative
}

.mejs-volume-button>.mejs-volume-slider {
    -webkit-backface-visibility: hidden;
    background: rgba(50,50,50,.7);
    border-radius: 0;
    bottom: 100%;
    display: none;
    height: 115px;
    left: 50%;
    margin: 0;
    position: absolute;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 25px;
    z-index: 1
}

.mejs-volume-button:hover {
    border-radius: 0 0 4px 4px
}

.mejs-volume-total {
    background: hsla(0,0%,100%,.5);
    height: 100px;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 8px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 2px
}

.mejs-volume-current {
    left: 0;
    margin: 0;
    width: 100%
}

.mejs-volume-current,.mejs-volume-handle {
    background: hsla(0,0%,100%,.9);
    position: absolute
}

.mejs-volume-handle {
    border-radius: 1px;
    cursor: ns-resize;
    height: 6px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 16px
}

.mejs-horizontal-volume-slider {
    display: block;
    height: 36px;
    position: relative;
    vertical-align: middle;
    width: 56px
}

.mejs-horizontal-volume-total {
    background: rgba(50,50,50,.8);
    height: 8px;
    top: 16px;
    width: 50px
}

.mejs-horizontal-volume-current,.mejs-horizontal-volume-total {
    border-radius: 2px;
    font-size: 1px;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute
}

.mejs-horizontal-volume-current {
    background: hsla(0,0%,100%,.8);
    height: 100%;
    top: 0;
    width: 100%
}

.mejs-horizontal-volume-handle {
    display: none
}

.mejs-captions-button,.mejs-chapters-button {
    position: relative
}

.mejs-captions-button>button {
    background-position: -140px 0
}

.mejs-chapters-button>button {
    background-position: -180px 0
}

.mejs-captions-button>.mejs-captions-selector,.mejs-chapters-button>.mejs-chapters-selector {
    background: rgba(50,50,50,.7);
    border: 1px solid transparent;
    border-radius: 0;
    bottom: 100%;
    margin-right: -43px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 50%;
    visibility: visible;
    width: 86px
}

.mejs-chapters-button>.mejs-chapters-selector {
    margin-right: -55px;
    width: 110px
}

.mejs-captions-selector-list,.mejs-chapters-selector-list {
    list-style-type: none!important;
    margin: 0;
    overflow: hidden;
    padding: 0
}

.mejs-captions-selector-list-item,.mejs-chapters-selector-list-item {
    color: #fff;
    cursor: pointer;
    display: block;
    list-style-type: none!important;
    margin: 0 0 6px;
    overflow: hidden;
    padding: 0
}

.mejs-captions-selector-list-item:hover,.mejs-chapters-selector-list-item:hover {
    background-color: #c8c8c8!important;
    background-color: hsla(0,0%,100%,.4)!important
}

.mejs-captions-selector-input,.mejs-chapters-selector-input {
    clear: both;
    float: left;
    left: -1000px;
    margin: 3px 3px 0 5px;
    position: absolute
}

.mejs-captions-selector-label,.mejs-chapters-selector-label {
    cursor: pointer;
    float: left;
    font-size: 10px;
    line-height: 15px;
    padding: 4px 10px 0;
    width: 100%
}

.mejs-captions-selected,.mejs-chapters-selected {
    color: #21f8f8
}

.mejs-captions-translations {
    font-size: 10px;
    margin: 0 0 5px
}

.mejs-captions-layer {
    bottom: 0;
    color: #fff;
    font-size: 16px;
    left: 0;
    line-height: 20px;
    position: absolute;
    text-align: center
}

.mejs-captions-layer a {
    color: #fff;
    text-decoration: underline
}

.mejs-captions-layer[lang=ar] {
    font-size: 20px;
    font-weight: 400
}

.mejs-captions-position {
    bottom: 15px;
    left: 0;
    position: absolute;
    width: 100%
}

.mejs-captions-position-hover {
    bottom: 35px
}

.mejs-captions-text,.mejs-captions-text * {
    background: hsla(0,0%,8%,.5);
    box-shadow: 5px 0 0 hsla(0,0%,8%,.5),-5px 0 0 hsla(0,0%,8%,.5);
    padding: 0;
    white-space: pre-wrap
}

.mejs-container.mejs-hide-cues video::-webkit-media-text-track-container {
    display: none
}

.mejs-overlay-error {
    position: relative
}

.mejs-overlay-error>img {
    left: 0;
    max-width: 100%;
    position: absolute;
    top: 0;
    z-index: -1
}

.mejs-cannotplay,.mejs-cannotplay a {
    color: #fff;
    font-size: .8em
}

.mejs-cannotplay {
    position: relative
}

.mejs-cannotplay a,.mejs-cannotplay p {
    display: inline-block;
    padding: 0 15px;
    width: 100%
}

.mejs-container {
    clear: both;
    max-width: 100%
}

.mejs-container * {
    font-family: Helvetica,Arial
}

.mejs-container,.mejs-container .mejs-controls,.mejs-embed,.mejs-embed body {
    background: #222
}

.mejs-time {
    font-weight: 400;
    word-wrap: normal
}

.mejs-controls a.mejs-horizontal-volume-slider {
    display: table
}

.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,.mejs-controls .mejs-time-rail .mejs-time-loaded {
    background: #fff
}

.mejs-controls .mejs-time-rail .mejs-time-current {
    background: #0073aa
}

.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total,.mejs-controls .mejs-time-rail .mejs-time-total {
    background: rgba(255,255,255,.33)
}

.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total,.mejs-controls .mejs-time-rail span {
    border-radius: 0
}

.mejs-overlay-loading {
    background: 0 0
}

.mejs-controls button:hover {
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none
}

.me-cannotplay {
    width: auto!important
}

.media-embed-details .wp-audio-shortcode {
    display: inline-block;
    max-width: 400px
}

.audio-details .embed-media-settings {
    overflow: visible
}

.media-embed-details .embed-media-settings .setting span:not(.button-group) {
    max-width: 400px;
    width: auto
}

.media-embed-details .embed-media-settings .checkbox-setting span {
    display: inline-block
}

.media-embed-details .embed-media-settings {
    padding-top: 0;
    top: 28px
}

.media-embed-details .instructions {
    padding: 16px 0;
    max-width: 600px
}

.media-embed-details .setting .remove-setting,.media-embed-details .setting p {
    color: #a00;
    font-size: 10px;
    text-transform: uppercase
}

.media-embed-details .setting .remove-setting {
    padding: 5px 0
}

.media-embed-details .setting a:hover {
    color: #dc3232
}

.media-embed-details .embed-media-settings .checkbox-setting {
    float: none;
    margin: 0 0 10px
}

.wp-video {
    max-width: 100%;
    height: auto
}

.wp_attachment_holder .wp-audio-shortcode,.wp_attachment_holder .wp-video {
    margin-top: 18px
}

.wp-video-shortcode video,video.wp-video-shortcode {
    max-width: 100%;
    display: inline-block
}

.video-details .wp-video-holder {
    width: 100%;
    max-width: 640px
}

.wp-playlist {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 12px 0 18px;
    font-size: 14px;
    line-height: 1.5
}

.wp-admin .wp-playlist {
    margin: 0 0 18px
}

.wp-playlist video {
    display: inline-block;
    max-width: 100%
}

.wp-playlist audio {
    display: none;
    max-width: 100%;
    width: 400px
}

.wp-playlist .mejs-container {
    margin: 0;
    max-width: 100%
}

.wp-playlist .mejs-controls .mejs-button button {
    outline: 0
}

.wp-playlist-light {
    background: #fff;
    color: #000
}

.wp-playlist-dark {
    color: #fff;
    background: #000
}

.wp-playlist-caption {
    display: block;
    max-width: 88%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.5
}

.wp-playlist-item .wp-playlist-caption {
    text-decoration: none;
    color: #000;
    max-width: -webkit-calc(100% - 40px);
    max-width: calc(100% - 40px)
}

.wp-playlist-item-meta {
    display: block;
    font-size: 14px;
    line-height: 1.5
}

.wp-playlist-item-title {
    font-size: 14px;
    line-height: 1.5
}

.wp-playlist-item-album {
    font-style: italic;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.wp-playlist-item-artist {
    font-size: 12px;
    text-transform: uppercase
}

.wp-playlist-item-length {
    position: absolute;
    right: 3px;
    top: 0;
    font-size: 14px;
    line-height: 1.5
}

.rtl .wp-playlist-item-length {
    left: 3px;
    right: auto
}

.wp-playlist-tracks {
    margin-top: 10px
}

.wp-playlist-item {
    position: relative;
    cursor: pointer;
    padding: 0 3px;
    border-bottom: 1px solid #ccc
}

.wp-playlist-item:last-child {
    border-bottom: 0
}

.wp-playlist-light .wp-playlist-caption {
    color: #333
}

.wp-playlist-dark .wp-playlist-caption {
    color: #ddd
}

.wp-playlist-playing {
    font-weight: 700;
    background: #f7f7f7
}

.wp-playlist-light .wp-playlist-playing {
    background: #fff;
    color: #000
}

.wp-playlist-dark .wp-playlist-playing {
    background: #000;
    color: #fff
}

.wp-playlist-current-item {
    overflow: hidden;
    margin-bottom: 10px;
    height: 60px
}

.wp-playlist .wp-playlist-current-item img {
    float: left;
    max-width: 60px;
    height: auto;
    margin-right: 10px;
    padding: 0;
    border: 0
}

.rtl .wp-playlist .wp-playlist-current-item img {
    float: right;
    margin-left: 10px;
    margin-right: 0
}

.wp-playlist-current-item .wp-playlist-item-artist,.wp-playlist-current-item .wp-playlist-item-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.wp-audio-playlist .me-cannotplay span {
    padding: 5px 15px
}

.jetpack-sharing-buttons__services-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0;
    list-style-type: none;
    margin: 5px;
    padding: 0
}

.jetpack-sharing-buttons__services-list.has-small-icon-size {
    font-size: 12px
}

.jetpack-sharing-buttons__services-list.has-normal-icon-size {
    font-size: 16px
}

.jetpack-sharing-buttons__services-list.has-large-icon-size {
    font-size: 24px
}

.jetpack-sharing-buttons__services-list.has-huge-icon-size {
    font-size: 36px
}

@media print {
    .jetpack-sharing-buttons__services-list {
        display: none!important
    }
}

.editor-styles-wrapper .wp-block-jetpack-sharing-buttons {
    gap: 0;
    padding-inline-start:0}

ul.jetpack-sharing-buttons__services-list.has-background {
    padding: 1.25em 2.375em
}

:root {
    --wp--preset--aspect-ratio--square: 1;
    --wp--preset--aspect-ratio--4-3: 4/3;
    --wp--preset--aspect-ratio--3-4: 3/4;
    --wp--preset--aspect-ratio--3-2: 3/2;
    --wp--preset--aspect-ratio--2-3: 2/3;
    --wp--preset--aspect-ratio--16-9: 16/9;
    --wp--preset--aspect-ratio--9-16: 9/16;
    --wp--preset--color--black: #000;
    --wp--preset--color--cyan-bluish-gray: #abb8c3;
    --wp--preset--color--white: #fff;
    --wp--preset--color--pale-pink: #f78da7;
    --wp--preset--color--vivid-red: #cf2e2e;
    --wp--preset--color--luminous-vivid-orange: #ff6900;
    --wp--preset--color--luminous-vivid-amber: #fcb900;
    --wp--preset--color--light-green-cyan: #7bdcb5;
    --wp--preset--color--vivid-green-cyan: #00d084;
    --wp--preset--color--pale-cyan-blue: #8ed1fc;
    --wp--preset--color--vivid-cyan-blue: #0693e3;
    --wp--preset--color--vivid-purple: #9b51e0;
    --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,#9b51e0 100%);
    --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,#7adcb4 0%,#00d082 100%);
    --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
    --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,#cf2e2e 100%);
    --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,#eee 0%,#a9b8c3 100%);
    --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,#4aeadc 0%,#9778d1 20%,#cf2aba 40%,#ee2c82 60%,#fb6962 80%,#fef84c 100%);
    --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,#ffceec 0%,#9896f0 100%);
    --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,#fecda5 0%,#fe2d2d 50%,#6b003e 100%);
    --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,#ffcb70 0%,#c751c0 50%,#4158d0 100%);
    --wp--preset--gradient--pale-ocean: linear-gradient(135deg,#fff5cb 0%,#b6e3d4 50%,#33a7b5 100%);
    --wp--preset--gradient--electric-grass: linear-gradient(135deg,#caf880 0%,#71ce7e 100%);
    --wp--preset--gradient--midnight: linear-gradient(135deg,#020381 0%,#2874fc 100%);
    --wp--preset--font-size--small: 13px;
    --wp--preset--font-size--medium: 20px;
    --wp--preset--font-size--large: 36px;
    --wp--preset--font-size--x-large: 42px;
    --wp--preset--spacing--20: .44rem;
    --wp--preset--spacing--30: .67rem;
    --wp--preset--spacing--40: 1rem;
    --wp--preset--spacing--50: 1.5rem;
    --wp--preset--spacing--60: 2.25rem;
    --wp--preset--spacing--70: 3.38rem;
    --wp--preset--spacing--80: 5.06rem;
    --wp--preset--shadow--natural: 6px 6px 9px rgba(0,0,0,.2);
    --wp--preset--shadow--deep: 12px 12px 50px rgba(0,0,0,.4);
    --wp--preset--shadow--sharp: 6px 6px 0px rgba(0,0,0,.2);
    --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255,255,255,1),6px 6px rgba(0,0,0,1);
    --wp--preset--shadow--crisp: 6px 6px 0px rgba(0,0,0,1)
}

:where(.is-layout-flex) {
    gap: .5em
}

:where(.is-layout-grid) {
    gap: .5em
}

body .is-layout-flex {
    display: flex
}

.is-layout-flex {
    flex-wrap: wrap;
    align-items: center
}

.is-layout-flex>:is(*,div) {
    margin: 0
}

body .is-layout-grid {
    display: grid
}

.is-layout-grid>:is(*,div) {
    margin: 0
}

:where(.wp-block-columns.is-layout-flex) {
    gap: 2em
}

:where(.wp-block-columns.is-layout-grid) {
    gap: 2em
}

:where(.wp-block-post-template.is-layout-flex) {
    gap: 1.25em
}

:where(.wp-block-post-template.is-layout-grid) {
    gap: 1.25em
}

.has-black-color {
    color: var(--wp--preset--color--black) !important
}

.has-cyan-bluish-gray-color {
    color: var(--wp--preset--color--cyan-bluish-gray) !important
}

.has-white-color {
    color: var(--wp--preset--color--white) !important
}

.has-pale-pink-color {
    color: var(--wp--preset--color--pale-pink) !important
}

.has-vivid-red-color {
    color: var(--wp--preset--color--vivid-red) !important
}

.has-luminous-vivid-orange-color {
    color: var(--wp--preset--color--luminous-vivid-orange) !important
}

.has-luminous-vivid-amber-color {
    color: var(--wp--preset--color--luminous-vivid-amber) !important
}

.has-light-green-cyan-color {
    color: var(--wp--preset--color--light-green-cyan) !important
}

.has-vivid-green-cyan-color {
    color: var(--wp--preset--color--vivid-green-cyan) !important
}

.has-pale-cyan-blue-color {
    color: var(--wp--preset--color--pale-cyan-blue) !important
}

.has-vivid-cyan-blue-color {
    color: var(--wp--preset--color--vivid-cyan-blue) !important
}

.has-vivid-purple-color {
    color: var(--wp--preset--color--vivid-purple) !important
}

.has-black-background-color {
    background-color: var(--wp--preset--color--black) !important
}

.has-cyan-bluish-gray-background-color {
    background-color: var(--wp--preset--color--cyan-bluish-gray) !important
}

.has-white-background-color {
    background-color: var(--wp--preset--color--white) !important
}

.has-pale-pink-background-color {
    background-color: var(--wp--preset--color--pale-pink) !important
}

.has-vivid-red-background-color {
    background-color: var(--wp--preset--color--vivid-red) !important
}

.has-luminous-vivid-orange-background-color {
    background-color: var(--wp--preset--color--luminous-vivid-orange) !important
}

.has-luminous-vivid-amber-background-color {
    background-color: var(--wp--preset--color--luminous-vivid-amber) !important
}

.has-light-green-cyan-background-color {
    background-color: var(--wp--preset--color--light-green-cyan) !important
}

.has-vivid-green-cyan-background-color {
    background-color: var(--wp--preset--color--vivid-green-cyan) !important
}

.has-pale-cyan-blue-background-color {
    background-color: var(--wp--preset--color--pale-cyan-blue) !important
}

.has-vivid-cyan-blue-background-color {
    background-color: var(--wp--preset--color--vivid-cyan-blue) !important
}

.has-vivid-purple-background-color {
    background-color: var(--wp--preset--color--vivid-purple) !important
}

.has-black-border-color {
    border-color: var(--wp--preset--color--black) !important
}

.has-cyan-bluish-gray-border-color {
    border-color: var(--wp--preset--color--cyan-bluish-gray) !important
}

.has-white-border-color {
    border-color: var(--wp--preset--color--white) !important
}

.has-pale-pink-border-color {
    border-color: var(--wp--preset--color--pale-pink) !important
}

.has-vivid-red-border-color {
    border-color: var(--wp--preset--color--vivid-red) !important
}

.has-luminous-vivid-orange-border-color {
    border-color: var(--wp--preset--color--luminous-vivid-orange) !important
}

.has-luminous-vivid-amber-border-color {
    border-color: var(--wp--preset--color--luminous-vivid-amber) !important
}

.has-light-green-cyan-border-color {
    border-color: var(--wp--preset--color--light-green-cyan) !important
}

.has-vivid-green-cyan-border-color {
    border-color: var(--wp--preset--color--vivid-green-cyan) !important
}

.has-pale-cyan-blue-border-color {
    border-color: var(--wp--preset--color--pale-cyan-blue) !important
}

.has-vivid-cyan-blue-border-color {
    border-color: var(--wp--preset--color--vivid-cyan-blue) !important
}

.has-vivid-purple-border-color {
    border-color: var(--wp--preset--color--vivid-purple) !important
}

.has-vivid-cyan-blue-to-vivid-purple-gradient-background {
    background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important
}

.has-light-green-cyan-to-vivid-green-cyan-gradient-background {
    background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important
}

.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
    background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important
}

.has-luminous-vivid-orange-to-vivid-red-gradient-background {
    background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important
}

.has-very-light-gray-to-cyan-bluish-gray-gradient-background {
    background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important
}

.has-cool-to-warm-spectrum-gradient-background {
    background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important
}

.has-blush-light-purple-gradient-background {
    background: var(--wp--preset--gradient--blush-light-purple) !important
}

.has-blush-bordeaux-gradient-background {
    background: var(--wp--preset--gradient--blush-bordeaux) !important
}

.has-luminous-dusk-gradient-background {
    background: var(--wp--preset--gradient--luminous-dusk) !important
}

.has-pale-ocean-gradient-background {
    background: var(--wp--preset--gradient--pale-ocean) !important
}

.has-electric-grass-gradient-background {
    background: var(--wp--preset--gradient--electric-grass) !important
}

.has-midnight-gradient-background {
    background: var(--wp--preset--gradient--midnight) !important
}

.has-small-font-size {
    font-size: var(--wp--preset--font-size--small) !important
}

.has-medium-font-size {
    font-size: var(--wp--preset--font-size--medium) !important
}

.has-large-font-size {
    font-size: var(--wp--preset--font-size--large) !important
}

.has-x-large-font-size {
    font-size: var(--wp--preset--font-size--x-large) !important
}

:where(.wp-block-post-template.is-layout-flex) {
    gap: 1.25em
}

:where(.wp-block-post-template.is-layout-grid) {
    gap: 1.25em
}

:where(.wp-block-columns.is-layout-flex) {
    gap: 2em
}

:where(.wp-block-columns.is-layout-grid) {
    gap: 2em
}

































:root :where(.wp-block-pullquote) {
    font-size: 1.5em;
    line-height: 1.6
}
  .builder-tool-wrap {
    display: none;
    margin-bottom: 40px
}

.builder-tool-wrap .error-messages {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%
}

.builder-tool-wrap .error-messages .single-error {
    background-color: hsla(5,70%,94%,.8);
    border: 1px solid #8b1820;
    color: #8b1820;
    font-size: 12px;
    font-weight: 600;
    line-height: 25px;
    margin-bottom: 5px;
    padding: 0 10px
}

.builder-tool-wrap .display-area {
    width: 65.84906%;
    float: left;
    position: relative
}

.builder-tool-wrap .display-area:before {
    content: " ";
    background-image: url(//novojackets.com/wp-content/themes/novoTheme/images/design_application/shadow.png);
    background-position: 100% 0;
    background-repeat: repeat-y;
    position: absolute;
    width: 16px;
    height: 100%;
    top: 0;
    right: 0
}

.builder-tool-wrap .display-area .views {
    background-color: #f3f5f8;
    margin-bottom: -93px;
    padding-bottom: 70px;
    position: relative
}

.builder-tool-wrap .display-area .views .view {
    opacity: 0;
    position: absolute;
    left: -9999px;
    top: -9999px
}

.builder-tool-wrap .display-area .views .view.active {
    opacity: 1;
    position: static;
    left: auto;
    top: auto
}

.builder-tool-wrap .display-area .views .view svg {
    display: block;
    width: 600px;
    height: auto;
    margin: 0 auto
}

.builder-tool-wrap .display-area .views .view svg g.letters.staggered[char-count="3"] {
    transform: translateY(-10px)
}

.builder-tool-wrap .display-area .views .view svg g.letters.staggered[char-count="2"] {
    transform: translateY(-5px)
}

.builder-tool-wrap .display-area .view_angle {
    text-align: center;
    margin-bottom: 11px;
    position: relative
}

.builder-tool-wrap .display-area .view_angle .single-angle {
    background-color: #fff;
    border-bottom: 2px solid transparent;
    display: inline-block;
    width: 60px;
    width: 54px;
    overflow: hidden;
    padding: 6px 0 0;
    margin-right: -2px;
    opacity: .5
}

.builder-tool-wrap .display-area .view_angle .single-angle img {
    height: 36px
}

.builder-tool-wrap .display-area .view_angle .single-angle.active {
    border-color: #e1b433;
    opacity: 1
}

.builder-tool-wrap .jbuilder-extra-info {
    margin-top: 18px;
    width: 100%
}

.builder-tool-wrap .jbuilder-extra-info:before {
    content: "";
    background-image: none;
    display: none
}

.builder-tool-wrap .customization-area {
    width: 32.07547%;
    margin-left: 2.07547%;
    float: left
}

.builder-tool-wrap .customization-area .jacket-price-wrap {
    background-color: #002766;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    padding: 20px 10px
}

.builder-tool-wrap .customization-area .jacket-price-wrap span {
    display: inline-block
}

.builder-tool-wrap .customization-area .jacket-price-wrap span.discount_price_active {
    text-decoration: line-through;
    margin-right: 5px
}

.builder-tool-wrap .customization-area .single-control {
    border-bottom: 1px solid #c2c7cf
}

.builder-tool-wrap .customization-area .single-control .single-control-header {
    font-size: 12px;
    font-weight: 700;
    padding: 18px 0
}

.builder-tool-wrap .customization-area .single-control .single-control-header .toggle_section {
    display: block
}

.builder-tool-wrap .customization-area .single-control .single-control-header .toggle_section span.section_title {
    color: #545c67;
    padding-top: 3px
}

.builder-tool-wrap .customization-area .single-control .single-control-header .toggle_section span.dashicons {
    border: 1px solid #d9dee7;
    border-radius: 50%;
    color: #d9dee7;
    float: right;
    width: 24px;
    height: 24px;
    display: block;
    text-align: center;
    font-size: 15px;
    line-height: 23px
}

.builder-tool-wrap .customization-area .single-control .single-control-header .toggle_section span.dashicons-plus {
    line-height: 25px
}

.builder-tool-wrap .customization-area .single-control .single-control-header .toggle_section:hover span.dashicons,.builder-tool-wrap .customization-area .single-control .single-control-header .toggle_section:hover span.section_title {
    color: #002766
}

.builder-tool-wrap .customization-area .single-control .single-control-content {
    display: none
}

.builder-tool-wrap .customization-area .single-control.open {
    border-bottom: 0
}

.builder-tool-wrap .customization-area .single-control.open .single-control-header span.dashicons,.builder-tool-wrap .customization-area .single-control.open .single-control-header span.section_title {
    color: #002766
}

.builder-tool-wrap .customization-area .single-control.open .single-control-content {
    display: block
}

.builder-tool-wrap .customization-area .single-control.open .toggle_section span.section_title {
    color: #002766
}

.builder-tool-wrap .customization-area .controls .single-control:last-child {
    border-bottom: 0;
    padding-bottom: 0
}

.builder-tool-wrap .customization-area .radio-control-wrap .single-radio-control:last-child,.builder-tool-wrap .customization-area .radio-control-wrap .single-radio-control:nth-last-child(2) {
    margin-bottom: 0
}

.builder-tool-wrap .customization-area .radio-control-wrap .single-radio-control:nth-child(2n) {
    margin-right: 0
}

.builder-tool-wrap .customization-area .select_box_control {
    background-image: url(//novojackets.com/wp-content/themes/novoTheme/images/selectArrow.png);
    background-repeat: no-repeat;
    background-position: 95% 50%;
    color: #545c67;
    font-size: 12px;
    border-radius: 0;
    padding: 10px 13px;
    margin-bottom: 10px;
    text-transform: uppercase;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.builder-tool-wrap .customization-area .colors-control-wrap .color-control {
    width: 20.58824%;
    margin-left: 5.88235%;
    margin-bottom: 7px;
    float: left;
    display: block
}

.builder-tool-wrap .customization-area .colors-control-wrap .color-control:first-child,.builder-tool-wrap .customization-area .colors-control-wrap .color-control:nth-child(4n+1) {
    margin-left: 0
}

.builder-tool-wrap .customization-area .colors-control-wrap {
    position: relative
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_show {
    background-color: transparent;
    border: 1px solid #c6cad2;
    color: #545c67;
    cursor: pointer;
    display: block;
    width: 100%;
    height: 34px;
    line-height: 34px;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_show.not_none_box_show {
    color: #fff
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_show.not_none_box_show[style="background-color: #FFFFFF"],.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_show.not_none_box_show[style="background-color: #ffffff"] {
    color: #000
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection {
    background-color: #fff;
    display: none;
    width: 340px;
    position: absolute;
    border: 1px solid #c6cad2;
    padding: 20px;
    z-index: 99;
    top: 42px;
    left: 0
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection:before {
    background-image: url(//novojackets.com/wp-content/themes/novoTheme/images/arrow_up.png);
    content: " ";
    display: block;
    left: 24px;
    top: -12px;
    width: 21px;
    height: 12px;
    position: absolute
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_header {
    line-height: 1;
    margin-bottom: 12px
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_header .color_selection_label {
    color: #545c67;
    font-size: 12px
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_header .close-color-box {
    float: right;
    margin-top: -3px
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap {
    float: left;
    margin: 0 0 8px 8px;
    display: block
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap:first-child,.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap:nth-child(4n+1) {
    margin-left: 0
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap .color_box {
    color: #fff;
    width: 68px;
    height: 40px;
    line-height: 1;
    display: block;
    border: 1px solid #d9dee7;
    text-align: center;
    font-size: 10px;
    text-transform: capitalize;
    padding-top: 14px
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap .color_box.cream_box,.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap .color_box.gold_box,.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap .color_box.sky_box,.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap .color_box.white_box,.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap .color_box.yellow_box {
    color: #000
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap.active .color_box {
    padding-top: 4px
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .color_selection .color_selection_content .color_box_wrap.active .color_box:before {
    content: "\f00c";
    display: block;
    font-family: FontAwesome;
    font-size: 12px;
    line-height: 1;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-bottom: 4px
}

.builder-tool-wrap .customization-area .colors-control-wrap .single_color_selector .single_color_selector_label {
    color: #545c67;
    font-size: 11px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    margin-top: 7px
}

.builder-tool-wrap .customization-area .colors-control-wrap .color-control:nth-child(2) .single_color_selector .color_selection:before,.builder-tool-wrap .customization-area .colors-control-wrap .color-control:nth-child(6) .single_color_selector .color_selection:before {
    left: 114px
}

.builder-tool-wrap .customization-area .colors-control-wrap .color-control:nth-child(3) .single_color_selector .color_selection:before,.builder-tool-wrap .customization-area .colors-control-wrap .color-control:nth-child(7) .single_color_selector .color_selection:before {
    left: 206px
}

.builder-tool-wrap .customization-area .colors-control-wrap .color-control:nth-child(4) .single_color_selector .color_selection:before,.builder-tool-wrap .customization-area .colors-control-wrap .color-control:nth-child(8) .single_color_selector .color_selection:before {
    left: 295px
}

.builder-tool-wrap .customization-area .colors-control-wrap .color-control:nth-child(n+5) .single_color_selector .color_selection {
    top: 100px
}

.builder-tool-wrap .customization-area .jacket-size-control-content .radio-control-wrap {
    margin-bottom: 10px
}

.builder-tool-wrap .customization-area .jacket-size-control-content .buttons_wrap {
    margin-top: 10px;
    margin-bottom: 15px
}

.builder-tool-wrap .customization-area .jacket-size-control-content .buttons_wrap a {
    width: 100%;
    display: block;
    text-align: center
}

.builder-tool-wrap .customization-area .jacket-size-control-content .measurement-table-wrap {
    font-size: 12px;
    color: #545c67;
    line-height: 1.83333
}

.builder-tool-wrap .customization-area .jacket-size-control-content .measurement-table-wrap p {
    margin-bottom: 15px
}

.builder-tool-wrap .customization-area .jacket-size-control-content .measurement-table-wrap table {
    border: 1px solid #c9ced5;
    margin-bottom: 0
}

.builder-tool-wrap .customization-area .jacket-size-control-content .measurement-table-wrap table tr td {
    border-right: 1px solid #c9ced5;
    text-align: center;
    width: 50px
}

.builder-tool-wrap .customization-area .jacket-size-control-content .measurement-table-wrap table tr td:last-child {
    border-right: 0
}

.builder-tool-wrap .customization-area .jacket-size-control-content .measurement-table-wrap table tr td.size_name {
    padding: 0 16px;
    text-align: left;
    width: auto
}

.builder-tool-wrap .customization-area .jacket-size-control-content .measurement-table-wrap table tr td input {
    background-color: transparent;
    border: 1px solid #dc4658;
    color: #545c67;
    line-height: 1.83333;
    font-size: 12px;
    padding: 0;
    text-align: center
}

.builder-tool-wrap .customization-area .jacket-size-control-content .measurement-table-wrap table.custom_sizing_active td {
    padding: 0
}

.builder-tool-wrap .customization-area .jacket-size-control-content .measurement-table-wrap table.custom_sizing_active td input {
    line-height: 2.75
}

.builder-tool-wrap .customization-area .single-sub-control {
    margin-bottom: 2px
}

.builder-tool-wrap .customization-area .single-sub-control a.toggle_sub_control {
    background-image: url(//novojackets.com/wp-content/themes/novoTheme/images/design_application/tick.png);
    background-repeat: no-repeat;
    background-position: 13px -66px;
    background-color: #f3f5f8;
    color: #545c67;
    cursor: pointer;
    font-size: 12px;
    display: block;
    min-height: 48px;
    padding: 14px 12px 15px 42px;
    text-transform: uppercase;
    transition: none
}

.builder-tool-wrap .customization-area .single-sub-control a.toggle_sub_control.active {
    background-color: #545c67;
    background-position: 13px 14px;
    color: #fff;
    width: 85.5%;
    float: left;
    padding-bottom: 7px
}

.builder-tool-wrap .customization-area .single-sub-control a.toggle_sub_control:after {
    content: "\f0d7";
    color: #c6cbd2;
    display: block;
    float: right;
    font-family: FontAwesome;
    font-size: 16px;
    line-height: 1;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-bottom: 4px;
    margin-right: 5px
}

.builder-tool-wrap .customization-area .single-sub-control .delete_emb_button {
    background-color: #e5554e;
    color: #fff;
    display: block;
    float: right;
    text-align: center;
    width: 13.97059%;
    line-height: 48px
}

.builder-tool-wrap .customization-area .single-sub-control .delete_emb_button span {
    line-height: 48px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content {
    display: none
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs {
    padding-bottom: 10px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs a {
    background-color: #f3f5f8;
    color: #545c67;
    display: block;
    font-size: 12px;
    line-height: 45px;
    float: left;
    width: 31.76471%;
    text-align: center;
    text-transform: uppercase
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs a:nth-child(2) {
    margin-left: 2.35294%;
    margin-right: 2.35294%
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs a.active {
    background-color: #545c67;
    color: #fff
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs a:not(.active):hover {
    color: #002766
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs.back_bottom-control-tabs a,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs.back_middle-control-tabs a,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs.back_top-control-tabs a,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs.left_pocket-control-tabs a,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs.right_pocket-control-tabs a {
    width: 48.76471%
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs.back_bottom-control-tabs a:last-child,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs.back_middle-control-tabs a:last-child,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs.back_top-control-tabs a:last-child,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs.left_pocket-control-tabs a:last-child,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tabs.right_pocket-control-tabs a:last-child {
    margin-right: 0
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .sub-control-tab-content {
    padding-top: 10px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .single-line-input {
    margin-bottom: 20px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .single-line-input label {
    font-size: 12px;
    line-height: 1;
    color: #545c67;
    text-transform: uppercase;
    width: 19.70588%;
    display: block;
    float: left;
    padding-top: 19px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .single-line-input input,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .single-line-input select {
    width: 80.29412%;
    display: block;
    color: #545c67;
    float: left;
    font-size: 12px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .single-line-input .input_note {
    clear: both;
    margin-left: 19.70588%
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .letter-appearance-wrap {
    margin-bottom: 13px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .letter-appearance-wrap .buttons_wrap a.single-appearance-button {
    color: #545c67;
    display: block;
    float: left;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    width: 31.17647%;
    margin-right: 3.23529%
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .letter-appearance-wrap .buttons_wrap a.single-appearance-button:last-child {
    margin-right: 0
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .letter-appearance-wrap .buttons_wrap a.single-appearance-button span.appearance-icon {
    background-image: url(//novojackets.com/wp-content/themes/novoTheme/images/design_application/letter_appeance.png);
    background-repeat: no-repeat;
    background-position: 0 0;
    border: 1px solid #c6cbd2;
    display: block;
    width: 100%;
    height: 60px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .letter-appearance-wrap .buttons_wrap a.single-appearance-button span.appearance-icon.straight-icon {
    background-position: 50% 11px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .letter-appearance-wrap .buttons_wrap a.single-appearance-button span.appearance-icon.staggered-icon {
    background-position: 50% -70px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .letter-appearance-wrap .buttons_wrap a.single-appearance-button span.appearance-icon.interlocking-icon {
    background-position: 50% -158px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .letter-appearance-wrap .buttons_wrap a.single-appearance-button.active span.appearance-icon {
    background-color: #f3f5f8;
    border-color: #3bb18f
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .radio-control-wrap {
    margin-bottom: 19px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .colors-control-wrap {
    margin-bottom: 10px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .btn-blue {
    width: 100%
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .display_image_wrap,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .upload_image_wrap {
    margin-bottom: 19px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .display_image_wrap {
    border: 1px solid #c6cad2;
    padding: 15px;
    position: relative
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .display_image_wrap a.display_image_remove_button,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .display_image_wrap a.display_image_remove_button:active,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .display_image_wrap a.display_image_remove_button:focus {
    background-color: #ff8c8c;
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    line-height: 27px;
    text-transform: uppercase;
    position: absolute;
    padding: 0 8px;
    right: 5px;
    top: 5px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .display_image_wrap a.display_image_remove_button:active:hover,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .display_image_wrap a.display_image_remove_button:focus:hover,.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .display_image_wrap a.display_image_remove_button:hover {
    background-color: #000;
    color: #fff
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .radio-control-wrap {
    margin-bottom: 0
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .image-tab-content .input_last_note {
    margin-bottom: 19px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .buttons_wrap a.btn:first-child {
    margin-right: 6px
}

.builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .buttons_wrap a.btn:last-child {
    margin-right: 0
}

.builder-tool-wrap .customization-area .single-sub-control.open-sub-control a.toggle_sub_control:after {
    content: "\f335";
    font-family: dashicons;
    font-size: 22px;
    margin-right: 0
}

.builder-tool-wrap .customization-area .single-sub-control.open-sub-control .single-sub-control-content {
    display: block;
    padding: 10px 0
}

.builder-tool-wrap .customization-area .single-sub-control:hover a.toggle_sub_control {
    color: #002766
}

.builder-tool-wrap .customization-area .place_order_wrap {
    margin-top: 30px
}

.builder-tool-wrap .customization-area .place_order_wrap a {
    display: block;
    width: 100%;
    text-align: center
}

.builder-tool-wrap .special_instructions_wrap {
    background-color: #e4e7ea;
    border: 1px solid transparent;
    position: relative;
    margin-bottom: 0
}

.builder-tool-wrap .special_instructions_wrap:before {
    content: " ";
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #e4e7ea;
    position: absolute;
    top: -10px;
    left: 20px
}

.builder-tool-wrap .special_instructions_wrap.focused {
    background-color: #fff;
    border-color: #f3f5f8
}

.builder-tool-wrap .special_instructions_wrap.focused:before {
    content: "";
    display: none
}

.builder-tool-wrap .special_instructions_wrap textarea {
    background-color: transparent;
    border: 0;
    max-height: 75px;
    font-size: 12px;
    line-height: 1.83333;
    padding: 20px
}

.builder-tool-wrap .jbuilder-extra-info {
    padding-right: 22px
}

.builder-tool-wrap .measurement-info {
    margin-bottom: 20px
}

.builder-tool-wrap .measurement-info h5 {
    margin-bottom: 17px
}

.builder-tool-wrap .measurement-info .measurement-info-blocks .single-block {
    background-image: url(//novojackets.com/wp-content/themes/novoTheme/images/design_application/measuremnt-info.png);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-color: #f3f5f8;
    border-right: 1px solid #fff;
    float: left;
    width: 25%;
    min-height: 150px;
    text-align: center;
    padding-top: 98px
}

.builder-tool-wrap .measurement-info .measurement-info-blocks .single-block.chest-block {
    background-position: 50% -20px
}

.builder-tool-wrap .measurement-info .measurement-info-blocks .single-block.bottom-block {
    background-position: 50% -170px
}

.builder-tool-wrap .measurement-info .measurement-info-blocks .single-block.back-block {
    background-position: 50% -320px
}

.builder-tool-wrap .measurement-info .measurement-info-blocks .single-block.sleeve-block {
    background-position: 50% -470px
}

.builder-tool-wrap #jacket_size_chart h5 {
    margin-bottom: 15px
}

.builder-tool-wrap #jacket_size_chart .units_buttons_wrap .single-radio-control {
    width: 25%;
    margin-right: 1.47059%;
    margin-bottom: 15px
}

.builder-tool-wrap #jacket_size_chart .units_buttons_wrap .button-red {
    width: 47.05882%;
    text-align: center;
    padding-top: 14px;
    padding-bottom: 14px
}

.builder-tool-wrap #jacket_size_chart .size_chart_table {
    max-width: 100%
}

.builder-tool-wrap .jbuilder-extra-info .buttons_wrap a:first-child {
    margin-bottom: 20px
}

.home .home-header {
    margin-bottom: 27px
}

.home .home-header .homepage-slider {
    float: left;
    width: 66.03774%;
    position: relative
}

.home .home-header .homepage-slider .bx-wrapper .bx-viewport {
    padding: 0;
    border: 0;
    box-shadow: none;
    left: 0;
    transform: none
}

.home .home-header .homepage-slider .single-slide {
    position: relative
}

.home .home-header .homepage-slider .single-slide .slide-content {
    color: #fff;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    position: absolute;
    left: 62px;
    top: 260px
}

.home .home-header .homepage-slider .single-slide .slide-content h1 {
    color: #e1b433;
    font-size: 50px;
    line-height: 1;
    text-transform: uppercase
}

.home .home-header .homepage-slider .single-slide .slide-content p {
    margin: 0
}

.home .home-header .homepage-slider .bx-controls {
    bottom: 25px;
    position: absolute;
    right: 20px;
    z-index: 99
}

.home .home-header .homepage-slider .bx-controls a {
    background-image: none;
    background-color: hsla(0,0%,100%,.2);
    color: #fff;
    display: inline-block;
    width: 80px;
    line-height: 44px;
    text-align: center;
    margin-right: 1px
}

.home .home-header .homepage-slider .bx-controls a:last-child {
    margin-right: 0
}

.home .home-header .homepage-slider .bx-controls a span {
    line-height: 44px
}

.home .home-header .homepage-sidebanners {
    float: right;
    width: 32.07547%
}

.home .home-header .homepage-sidebanners .special_offer_banner {
    margin-bottom: 12px
}

.home .home-content {
    margin-bottom: 30px
}

.about .site-inner .about-section {
    margin: 0 auto
}

.about .site-inner .about-section .one-half {
    width: 50%;
    margin: 0
}

.about .site-inner .about-section .section-content {
    background-color: #f9f9f9;
    padding: 100px 50px;
    text-align: center
}

.about .site-inner .about-section .section-image {
    padding: 50px
}

.post-type-archive-product .content h1.page-title {
    float: left
}

.post-type-archive-product .content .novo-ordering-by {
    float: right
}

.post-type-archive-product .content .novo-ordering-by span {
    color: #545c67;
    font-size: 14px;
    margin: 0 9px
}

.post-type-archive-product .content .novo-ordering-by a {
    color: #545c67;
    font-size: 14px;
    margin: 0 12px;
    padding-bottom: 3px
}

.post-type-archive-product .content .novo-ordering-by a:last-child {
    margin-right: 0
}

.post-type-archive-product .content .novo-ordering-by a.active {
    color: #002766;
    border-bottom: 1px solid #e1b433
}

.single-product .product-image-slider-wrap {
    overflow: hidden;
    position: relative
}

.single-product .product-image-slider-wrap .product-image-slider {
    display: none
}

.single-product .product-image-slider-wrap .product-image-slider li {
    list-style-type: none;
    display: block;
    width: 768px;
    max-width: 100%;
    height: auto;
    float: left;
    opacity: .3;
    transition: opacity .4s ease-in-out 0s;
    -webkit-transition: opacity .4s ease-in-out 0s
}

.single-product .product-image-slider-wrap .product-image-slider li.slick-current {
    opacity: 1
}

.single-product .product-image-slider-wrap .product-image-slider img {
    width: 100%
}

.single-product .product-image-slider-wrap a.slick-arrow {
    color: #fff;
    position: absolute;
    top: 50%;
    display: block;
    width: 70px;
    height: 68px;
    margin-top: -34px;
    z-index: 99
}

.single-product .product-image-slider-wrap a.slick-arrow.slick-prev {
    left: 0
}

.single-product .product-image-slider-wrap a.slick-arrow.slick-next {
    right: 0
}

.single-product .product-image-slider-wrap a.slick-arrow span {
    font-size: 70px;
    display: block
}

.single-product .site-inner .product .images {
    width: 57.54717%;
    float: left;
    margin: 0
}

.single-product .site-inner .product .images .bxslider_slider_wrap {
    position: relative;
    display: none;
    margin-bottom: 20px
}

.single-product .site-inner .product .images .bxslider_slider_wrap .bx-wrapper {
    max-height: 460px
}

.single-product .site-inner .product .images .bxslider_slider_wrap .bx-controls-direction a {
    color: #fff;
    display: block;
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    line-height: 50px;
    margin-top: -25px
}

.single-product .site-inner .product .images .bxslider_slider_wrap .bx-controls-direction a.bx-prev {
    left: 0;
    text-align: left
}

.single-product .site-inner .product .images .bxslider_slider_wrap .bx-controls-direction a.bx-next {
    right: 0;
    text-align: right
}

.single-product .site-inner .product .images .bxslider_slider_wrap .bx-controls-direction a span {
    font-size: 50px;
    display: block
}

.single-product .site-inner .product .images .product-image-thumb li {
    border-bottom: 2px solid transparent;
    padding-bottom: 8px
}

.single-product .site-inner .product .images .product-image-thumb li.active {
    border-bottom: 2px solid #414142
}

.single-product .site-inner .product .summary {
    width: 40.56604%;
    float: right
}

.single-product .site-inner .product .product-title-wrap {
    margin-bottom: 5px
}

.single-product .site-inner .product .product-title-wrap h1.product_title {
    font-size: 23px
}

.single-product .site-inner .product .product-share-icons {
    float: none;
    margin-bottom: 10px
}

.single-product .site-inner .product .product-description-wrap {
    margin-bottom: 10px
}

.single-product .site-inner .product .product-description-wrap p:last-child {
    margin-bottom: 0
}

.single-product .site-inner .product .product-pricing-colors-wrap {
    border-top: 1px solid #f3f5f8;
    margin-bottom: 15px
}

.single-product .site-inner .product .product-pricing-colors-wrap .label {
    color: #545c67;
    font-size: 12px;
    line-height: 1;
    margin-bottom: 8px
}

.single-product .site-inner .product .product-pricing-colors-wrap>div {
    padding: 14px 0 10px
}

.single-product .site-inner .product .product-pricing-colors-wrap .pricing-wrap {
    float: left;
    width: 100%
}

.single-product .site-inner .product .product-pricing-colors-wrap .pricing-wrap>.actual-price {
    width: 51.5%
}

.single-product .site-inner .product .product-pricing-colors-wrap .pricing-wrap>.discounted-price {
    border-left: 1px solid #f3f5f8;
    padding-left: 15px;
    width: 48.5%
}

.single-product .site-inner .product .product-pricing-colors-wrap .pricing-wrap>div {
    float: left
}

.single-product .site-inner .product .product-pricing-colors-wrap .pricing-wrap>div .price {
    font-size: 36px;
    line-height: 1
}

.single-product .site-inner .product .product-pricing-colors-wrap .pricing-wrap>div.actual-price .price {
    color: #002766;
    text-decoration: line-through
}

.single-product .site-inner .product .product-pricing-colors-wrap .pricing-wrap>div.discounted-price .price {
    color: #dc4658
}

.single-product .site-inner .product .product-pricing-colors-wrap .colors-wrap {
    float: right;
    width: 100%
}

.single-product .site-inner .product .product-pricing-colors-wrap .colors-wrap .label {
    margin-bottom: 5px
}

.single-product .site-inner .product .product-pricing-colors-wrap .colors-wrap .color-code-wrap a {
    border: 6px solid transparent;
    display: block;
    float: left;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin-right: 11px
}

.single-product .site-inner .product .product-pricing-colors-wrap .colors-wrap .color-code-wrap a:first-child,.single-product .site-inner .product .product-pricing-colors-wrap .colors-wrap .color-code-wrap a:nth-child(11) {
    clear: both;
    margin-left: -6px
}

.single-product .site-inner .product .product-pricing-colors-wrap .colors-wrap .color-code-wrap a.active {
    border-color: #e4e7ec
}

.single-product .site-inner .product .product-pricing-colors-wrap .colors-wrap .color-code-wrap a span {
    border-radius: 6px;
    display: block;
    width: 25px;
    height: 25px;
    border: 1px solid transparent
}

.single-product .site-inner .product .product-pricing-colors-wrap .colors-wrap .color-code-wrap a[href="#white"] span {
    border-color: #c5cad1
}

.single-product .site-inner .product .variations_form {
    margin-bottom: 0
}

.single-product .site-inner .product .variations_form table.variations {
    float: left;
    width: 100%;
    margin-bottom: 0
}

.single-product .site-inner .product .variations_form table.variations tbody {
    border-bottom: 0
}

.single-product .site-inner .product .variations_form table.variations tbody tr td {
    padding: 0;
    width: 49%
}

.single-product .site-inner .product .variations_form table.variations tbody tr td:first-child {
    padding-right: 1.5%
}

.single-product .site-inner .product .variations_form table.variations tbody tr td:nth-child(2) {
    padding-left: 1.5%
}

.single-product .site-inner .product .variations_form table.variations select {
    background-image: url(//novojackets.com/wp-content/themes/novoTheme/images/selectArrow.png);
    background-repeat: no-repeat;
    background-position: 95% 50%;
    color: #545c67;
    font-size: 12px;
    border-radius: 0;
    padding: 17px 13px;
    margin-bottom: 10px;
    width: 100%;
    line-height: 1;
    text-transform: uppercase;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.single-product .site-inner .product .variations_form table.variations a.view-size-chart-link {
    display: none;
    font-size: 12px;
    line-height: 48px;
    text-transform: uppercase;
    color: #dc4658
}

.single-product .site-inner .product .variations_form table.variations .reset_variations {
    display: none!important
}

.single-product .site-inner .product .variations_form .single_variation_wrap {
    float: none;
    width: 100%
}

.single-product .site-inner .product .variations_form .single_variation_wrap .quantity {
    display: none!important
}

.single-product .site-inner .product .variations_form .single_variation_wrap .button,.single-product .site-inner .product .variations_form .single_variation_wrap .button-yellow {
    font-family: Lato,sans-serif;
    width: 100%;
    display: block;
    padding: 17px 30px;
    line-height: 1;
    clear: both
}

.single-product .site-inner .product .woocommerce-tabs ul.tabs {
    padding: 0;
    margin: 0
}

.single-product .site-inner .product .woocommerce-tabs ul.tabs:before {
    border-bottom: 2px solid #c2c7cf
}

.single-product .site-inner .product .woocommerce-tabs ul.tabs li {
    background-color: transparent;
    border-radius: 0;
    border: 0;
    width: 33.33333%;
    text-align: center;
    padding: 0;
    margin: 0 -3px 0 0
}

.single-product .site-inner .product .woocommerce-tabs ul.tabs li.active {
    text-shadow: none;
    color: #dc4658;
    border-bottom: 2px solid #002766
}

.single-product .site-inner .product .woocommerce-tabs ul.tabs li.active a {
    color: #dc4658;
    text-shadow: none
}

.single-product .site-inner .product .woocommerce-tabs ul.tabs li.active:after,.single-product .site-inner .product .woocommerce-tabs ul.tabs li.active:before,.single-product .site-inner .product .woocommerce-tabs ul.tabs li:after,.single-product .site-inner .product .woocommerce-tabs ul.tabs li:before {
    content: "";
    box-shadow: none;
    border: 0
}

.single-product .site-inner .product .woocommerce-tabs ul.tabs li a {
    display: block;
    border: 0;
    text-transform: uppercase;
    line-height: 50px
}

.single-product .site-inner .product .woocommerce-tabs .panel {
    margin-bottom: 0
}

.single-product .site-inner .product .woocommerce-tabs .wc-tab {
    padding: 40px 0 0;
    color: #545c67
}

.single-product .site-inner .product .woocommerce-tabs .wc-tab img {
    margin-bottom: 18px;
    width: 100%
}

.single-product .site-inner .product .woocommerce-tabs .wc-tab h5 {
    color: #002766;
    margin-bottom: 20px
}

.single-product .site-inner .product .woocommerce-tabs .wc-tab p {
    margin-bottom: 34px
}

.faqs .single_qa {
    border-top: 1px solid #c2c7cf;
    padding: 22px 0 16px
}

.faqs .single_qa .question {
    font-size: 14px;
    color: #33373e;
    line-height: 1;
    margin-bottom: 20px
}

.faqs .single_qa .question:before {
    content: "Q";
    margin-right: 25px
}

.faqs .single_qa .answer {
    font-size: 14px;
    line-height: 1.71429
}

.faqs .single_qa .answer p {
    position: relative;
    padding-left: 37px
}

.faqs .single_qa .answer p:first-child:before {
    content: "A";
    margin-right: 25px;
    position: absolute;
    left: 0;
    top: 0
}

.faqs .single_qa .answer p:last-child {
    margin-bottom: 0
}

.faqs .faq_section {
    margin-bottom: 24px
}

.faqs .faq_section .single_qa:last-child {
    border-bottom: 1px solid #c2c7cf
}

.faqs .entry-content .faq_section:last-child {
    margin-bottom: 0
}

.measurement-guide .entry-content h3 {
    margin-bottom: 26px
}

.measurement-guide .entry-content .single-measurement-slide h5,.measurement-guide .entry-content .single-measurement-slide img {
    margin-bottom: 18px
}

.measurement-guide .buttons_wrap,.single-product .buttons_wrap {
    margin: 0 0 40px
}

.measurement-guide .units_buttons_wrap,.single-product .units_buttons_wrap {
    max-width: 340px;
    margin: 0 auto 40px
}

.measurement-guide .units_buttons_wrap .single-radio-control,.single-product .units_buttons_wrap .single-radio-control {
    line-height: 19px
}

.measurement-guide .units_buttons_wrap .single-radio-control:nth-child(2n),.single-product .units_buttons_wrap .single-radio-control:nth-child(2n) {
    margin-right: 0
}

.measurement-guide h5.sub_section_title,.single-product h5.sub_section_title {
    margin-bottom: 16px;
    text-align: center
}

.measurement-guide #jacket_size_chart table:last-child,.single-product #jacket_size_chart table:last-child {
    margin-bottom: 0
}

.emb-patches-guide .single-section .section_metro_images_wrap .one-third {
    margin-bottom: 23px
}

.form_page .single-input-row {
    margin-bottom: 10px
}

.form_page .single-input-row label {
    color: #33373e;
    display: inline-block;
    font-size: 12px;
    text-transform: uppercase;
    padding-bottom: 5px
}

.form_page .single-input-row input[type=email],.form_page .single-input-row input[type=password],.form_page .single-input-row input[type=text] {
    font-size: 12px;
    padding: 10px 13px
}

.form_page .single-input-row input[type=email].error,.form_page .single-input-row input[type=password].error,.form_page .single-input-row input[type=text].error {
    border-color: #dc4658
}

.form_page .single-input-row select {
    background-image: url(//novojackets.com/wp-content/themes/novoTheme/images/selectArrow.png);
    background-position: 98% 50%;
    background-repeat: no-repeat;
    color: #545c67;
    font-size: 12px;
    border-radius: 0;
    padding: 10px 13px;
    margin-bottom: 10px;
    text-transform: uppercase;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.form_page .single-input-row .one-fourth select {
    background-position: 95% 50%
}

.form_page .single-input-row .one-half select {
    background-position: 98% 50%
}

.form_page .single-input-row .wpcf7-list-item {
    font-size: 12px;
    float: left;
    width: 48.52941%;
    margin-bottom: 10px;
    text-transform: uppercase;
    width: 23.0769%;
    margin-left: 2.5641%
}

.form_page .single-input-row .wpcf7-list-item.first,.form_page .single-input-row .wpcf7-list-item:nth-child(4n+1) {
    margin-left: 0
}

.form_page .single-input-row .wpcf7-list-item input[type=checkbox] {
    display: none
}

.form_page .single-input-row .wpcf7-list-item span {
    background-image: url(//novojackets.com/wp-content/themes/novoTheme/images/design_application/tick.png);
    background-repeat: no-repeat;
    background-position: 13px -67px;
    background-color: #f3f5f8;
    color: #545c67;
    cursor: pointer;
    display: block;
    min-height: 21px;
    padding: 13px 12px 15px 42px;
    margin-top: -23px
}

.form_page .single-input-row .wpcf7-list-item input:checked+span {
    background-color: #545c67;
    background-position: 13px 13px;
    color: #fff
}

.woocommerce-cart table.shop_table .cart_item img {
    width: 90px;
    height: 90px
}

.woocommerce-cart table.shop_table .cart_item td {
    padding-top: 20px;
    padding-bottom: 20px
}

.woocommerce-cart table.shop_table .cart_item td.product-thumbnail {
    padding-left: 12px;
    padding-right: 0;
    width: 120px
}

.woocommerce-cart table.shop_table .cart_item td.product-name {
    padding-left: 0;
    vertical-align: top
}

.woocommerce-cart table.shop_table .cart_item .button-yellow {
    padding-top: 10px;
    padding-bottom: 10px
}

.woocommerce-cart table.cart td.actions .coupon .input-text {
    border: 1px solid #d3ced2;
    box-sizing: border-box;
    float: left;
    line-height: 1;
    margin: 0 4px 0 0;
    outline: 0 none;
    padding: 11px 6px;
    width: 150px;
    color: #ccc
}

#product_details_share .materials_info {
    margin-top: 30px
}

#product_details_share .materials_info table {
    border: 1px solid #ddd
}

#product_details_share .materials_info table td {
    border-right: 1px solid #ddd;
    text-align: center;
    width: 16.66667%
}

#product_details_share .coloring_info table {
    border: 1px solid #ddd
}

#product_details_share .coloring_info table tr td {
    vertical-align: top
}

#product_details_share .coloring_info table tr td:first-child {
    width: 65%;
    padding-left: 15px
}

#product_details_share .coloring_info table tr td:nth-child(2) {
    width: 10%
}

#product_details_share .coloring_info table tr td:nth-child(3) {
    width: 25%
}

#product_details_share .coloring_info table tr td.color_code span {
    vertical-align: top
}

#product_details_share .coloring_info table tr td.color_code span.color_label {
    display: inline-block;
    width: 75px;
    height: 25px;
    margin-right: 30px;
    margin-top: 2px
}

#product_details_share .coloring_info table tr td.color_code span.color_label[style^="background: #FFFFFF"] {
    border: 1px solid #ddd
}

#product_details_share .object_info table.object_info_main_table {
    margin-bottom: 0
}

#product_details_share .object_info table.object_info_main_table>tbody {
    border: 0
}

#product_details_share .object_info table.object_info_main_table>tbody>tr>td:last-child {
    border-bottom: 0
}

#product_details_share .object_info table.object_info_main_table>tbody>tr td.image_td {
    text-align: center
}

#product_details_share .object_info table.object_info_main_table>tbody>tr td.image_td img {
    display: inline-block
}

#product_details_share .object_info table {
    margin-bottom: 0
}

#product_details_share .object_info table tbody {
    border: 0
}

#product_details_share .object_info table.object-info-details tr td,#product_details_share .object_info table.object-info-details tr th {
    border: 0;
    width: 12.5%
}

#product_details_share .object_info table.object-info-details tr td:nth-child(2),#product_details_share .object_info table.object-info-details tr th:nth-child(2) {
    width: 20%
}

#product_details_share .object_info table.object-info-details tr td:last-child,#product_details_share .object_info table.object-info-details tr th:last-child {
    width: 5%
}

#product_details_share .object_info table.object-info-details tbody,#product_details_share table.size_info tbody,#product_details_share table.size_info tbody td,#product_details_share table.table_summary tbody,#product_details_share table.table_summary tbody td {
    border: 0
}

#product_details_share .size_info table tr td {
    width: auto
}

#product_details_share table.table_summary {
    margin-bottom: 0
}

.woocommerce-MyAccount-navigation ul:not(.payment_methods):not(.order_details):not(.products) {
    margin-left: 0
}

.woocommerce-MyAccount-navigation ul:not(.payment_methods):not(.order_details):not(.products) li {
    list-style-type: none;
    text-transform: uppercase;
    border-bottom: 1px solid #c2c7cf;
    margin-bottom: 0
}

.woocommerce-MyAccount-navigation ul:not(.payment_methods):not(.order_details):not(.products) li a {
    color: #798392;
    display: block;
    font-size: 12px;
    font-weight: 700;
    padding: 18px 0
}

.woocommerce-MyAccount-navigation ul:not(.payment_methods):not(.order_details):not(.products) li.woocommerce-MyAccount-navigation-link--downloads {
    display: none
}

.landing-page .masthead {
    margin-bottom: 25px
}

.landing-page .blue-boxes-wrap {
    margin-bottom: 35px
}

.landing-page .blue-boxes-wrap .single-blue-box {
    background-color: #002766;
    background-size: cover;
    color: #fff;
    display: table
}

.landing-page .blue-boxes-wrap .single-blue-box span {
    display: table-cell;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    height: 201px
}

.landing-page a.button-green {
    font-size: 24px;
    border: 2px solid #000;
    padding: 10px 65px
}

.landing-page .single-section {
    margin-bottom: 40px
}

.landing-page .masthead.masthead-2lines .wrap {
    padding-top: 150px;
    height: 340px
}

.landing-page .button-full-width {
    font-size: 24px
}

@media only screen and (max-width: 736px) {
    .site-header .wrap {
        padding-left:0;
        padding-right: 0
    }

    .site-header .title-area {
        margin-bottom: 0;
        padding-left: 15px;
        padding-right: 15px
    }

    .responsive-menu-button {
        display: block
    }

    .site-header .widget-area .register_login_button_wrap {
        display: block;
        top: 12px
    }

    .site-header .widget-area .register_login_button_wrap a:not(.checkout-button) {
        display: none
    }

    .site-header .widget-area .register_login_button_wrap .checkout-button {
        border: 0;
        float: right;
        padding: 0;
        margin: 0;
        line-height: 1.3
    }

    .site-header .widget-area .register_login_button_wrap .checkout-button span.cart-title-header {
        float: left;
        margin: 0 4px 0 0
    }

    .site-header .widget-area .register_login_button_wrap .checkout-button span.cart-title-header i {
        font-size: 23px;
        margin-top: -4px
    }

    .site-header .widget-area .register_login_button_wrap .checkout-button span.total-items {
        display: none;
        float: right;
        padding: 0 3px;
        text-align: left;
        margin: 0;
        font-weight: 400;
        font-size: 10px
    }

    .site-header .widget-area .widget.woocommerce.widget_shopping_cart {
        top: 40px;
        width: 100%
    }

    .site-title>a {
        background-position: 50% 50%
    }

    .nav-header {
        background-color: rgba(47,47,47,.98);
        display: none;
        width: 100%;
        height: 100%;
        margin-bottom: 15px
    }

    .nav-header.active {
        display: block
    }

    .nav-header #menu-top-menu>li {
        width: 100%;
        float: none
    }

    .nav-header #menu-top-menu>li a {
        color: #fff;
        padding: 18px 15px;
        border-bottom: 1px solid hsla(0,0%,100%,.08)
    }

    .nav-header #menu-top-menu>li a:hover {
        background-color: #fff;
        color: #000
    }

    .nav-header #menu-top-menu>li .sub-menu.active,.nav-header #menu-top-menu>li:hover>.sub-menu {
        width: 100%;
        position: static
    }

    .nav-header #menu-top-menu>li .sub-menu.active li,.nav-header #menu-top-menu>li:hover>.sub-menu li {
        display: block
    }

    .nav-header #menu-top-menu>li .sub-menu.active li a,.nav-header #menu-top-menu>li:hover>.sub-menu li a {
        color: #33373e;
        width: 100%
    }

    .nav-header .menu_register_login_wrap {
        background-color: #444;
        padding: 10px 15px
    }

    .nav-header .menu_register_login_wrap>a {
        color: #fff;
        background-color: #888;
        display: inline-block;
        padding: 8px 0
    }

    .nav-header .menu_register_login_wrap>a.register_menu_button {
        background-color: #dc4658
    }

    .footer-widgets .site-footer-widgets-wrap>section {
        width: 33.33333%;
        margin-bottom: 25px
    }

    .site-footer .wrap {
        padding-left: 15px;
        padding-right: 15px
    }

    .home .home-header .homepage-sidebanners,.home .home-header .homepage-slider {
        width: 100%;
        float: none;
        margin: 0 0 10px
    }

    .home .home-header .homepage-sidebanners .single-slide img,.home .home-header .homepage-slider .single-slide img {
        width: 100%
    }

    .home .home-header .homepage-sidebanners {
        margin-bottom: 0
    }

    .home .home-header .homepage-sidebanners img {
        width: 100%
    }

    .single-product .site-inner .product .product-title-wrap .product-share-icons,.single-product .site-inner .product .product-title-wrap h1.product_title {
        width: 100%;
        float: none
    }

    .single-product .site-inner .product .product-description-wrap {
        margin-bottom: 18px
    }

    .single-product .site-inner .product .variations_form .single_variation_wrap,.single-product .site-inner .product .variations_form table.variations {
        width: 100%
    }

    .single-product .site-inner .product .variations_form table.variations select {
        width: 97%
    }

    .single-product .site-inner .product .variations_form table.variations tbody tr td:nth-child(2) {
        padding-left: 1.2%
    }

    .single-product .site-inner .product .variations_form table.variations tbody tr td:nth-child(2) select {
        width: 100%
    }

    .single-product .site-inner .product .product-pricing-colors-wrap {
        margin-bottom: 20px
    }

    .single-product .site-inner .product .product-title-wrap h1.product_title {
        font-size: 24px;
        line-height: 30px
    }

    .single-product .site-inner .product .woocommerce-tabs .wc-tab img {
        width: 100%
    }

    .form_page .single-input-row .wpcf7-list-item,.form_page .single-input-row .wpcf7-list-item:nth-child(3n+1),.form_page .single-input-row .wpcf7-list-item:nth-child(4n+1) {
        width: 49.2%;
        margin-left: 1.6%
    }

    .form_page .single-input-row .wpcf7-list-item.first,.form_page .single-input-row .wpcf7-list-item:nth-child(odd) {
        margin-left: 0
    }

    .measurement_slides .single-measurement-slide {
        width: 49%;
        margin-left: 1%
    }

    .measurement_slides .single-measurement-slide:first-child,.measurement_slides .single-measurement-slide:nth-child(odd) {
        clear: both
    }

    .measurement_slides .single-measurement-slide img {
        width: 100%
    }

    .landing-page .masthead.masthead-2lines .wrap {
        padding-top: 120px
    }

    .landing-page .blue-boxes-wrap .single-blue-box {
        margin-bottom: 15px
    }

    .landing-page .woocommerce.columns-3 ul.products li.last,.landing-page .woocommerce.columns-3 ul.products li.product,.landing-page .woocommerce.columns-3 ul.products li.product:nth-child(2n),.landing-page .woocommerce.columns-3 ul.products li.product:nth-child(3n) {
        width: 49%;
        margin-right: 2%;
        margin-bottom: 20px
    }

    .landing-page .woocommerce.columns-3 ul.products li.product:nth-child(2n) {
        margin-right: 0
    }

    .landing-page.emb-patches-guide .single-section .section_metro_images_wrap .one-third {
        width: 49%;
        margin-right: 2%;
        margin-bottom: 10px;
        clear: none
    }

    .landing-page.emb-patches-guide .single-section .section_metro_images_wrap .one-third:nth-child(2n) {
        margin-right: 0
    }
}

@media (max-width: 992px) {
    .venoframe {
        width:640px;
        height: 480px
    }
}

@media (max-width: 460px) {
    .vbox-inline {
        width:100%
    }

    .venoframe {
        width: 100%;
        height: 260px
    }
}

@media only screen and (max-width: 768px) {
    .vbox-content .venoframe {
        width:736px!important;
        height: 422px!important
    }
}

@media only screen and (max-width: 640px) {
    .vbox-content .venoframe {
        width:95%!important;
        height: 240!important
    }
}

@media only screen and (max-width: 1070px) {
    .site-inner,.wrap {
        max-width:100%
    }

    .site-header .wrap,.wrap {
        max-width: 100%;
        padding-left: 15px;
        padding-right: 15px
    }

    .site-header .widget-area .register_login_button_wrap {
        margin-top: 50px
    }

    .single-product .site-inner .product .product-pricing-colors-wrap .pricing-wrap>div {
        width: 50%
    }

    .single-product .site-inner .product .product-pricing-colors-wrap .colors-wrap .color-code-wrap a {
        margin-right: 8px
    }

    .builder-tool-wrap .display-area {
        width: 64%
    }

    .builder-tool-wrap .customization-area {
        width: 34%;
        margin-left: 2%
    }

    .builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .buttons_wrap a.btn {
        min-width: 48.5%;
        display: block;
        float: left
    }

    .builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .buttons_wrap a.btn:first-child {
        margin-right: 2.2%
    }

    .builder-tool-wrap .customization-area .single-sub-control .single-sub-control-content .buttons_wrap a.btn:last-child {
        float: right
    }
}

 