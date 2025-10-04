// import React from "react";

// const LeftPocketEmb = ({ embroidery }) => {
//   const leftPocket = embroidery?.leftPocket || {};
//   const {
//     letters,
//     letterStyle,
//     letterFont,
//     textColor,
//     borderColor,
//     activeTab,
//   } = leftPocket;

//   const renderLetters = () => {
//     if (!letters) return null;

//     const baseStyle = {
//       fontFamily: letterFont || "Graduate",
//       fontWeight: "bold",
//       fill: textColor || "#000000",
//       fontSize: "22px",
//       stroke: borderColor || "#000000",
//       strokeWidth: 0.5,
//     };

//     switch (letterStyle) {
//       case "straight":
//         return (
//           <text x="0" y="20" style={{ ...baseStyle }} textAnchor="middle">
//             {letters}
//           </text>
//         );

//       case "staggered":
//         return (
//           <g>
//             {letters.split("").map((char, index) => (
//               <text
//                 key={index}
//                 x={index * 15}
//                 y={index * 22}
//                 style={{ ...baseStyle }}
//                 textAnchor="middle"
//               >
//                 {char}
//               </text>
//             ))}
//           </g>
//         );

//       case "interlocking":
//         if (letters.length !== 2) {
//           return (
//             <text x="0" y="20" style={{ ...baseStyle }} textAnchor="middle">
//               {letters}
//             </text>
//           );
//         }
//         return (
//           <g>
//             <text
//               x="-10"
//               y="20"
//               style={{ ...baseStyle, fontSize: "30px" }}
//               textAnchor="middle"
//             >
//               {letters.charAt(0)}
//             </text>
//             <text
//               x="10"
//               y="20"
//               style={{ ...baseStyle, fontSize: "30px" }}
//               textAnchor="middle"
//             >
//               {letters.charAt(1)}
//             </text>
//           </g>
//         );

//       default:
//         return (
//           <text x="0" y="20" style={{ ...baseStyle }} textAnchor="middle">
//             {letters}
//           </text>
//         );
//     }
//   };

//   return (
//     <g className="left_pocket_emb" transform="translate(355, 400)">
//       {activeTab === "name" && leftPocket.name && (
//         <text
//           x="0"
//           y="0"
//           style={{
//             fontFamily: leftPocket.nameFont || "Graduate",
//             fontSize: "18px",
//             fill: leftPocket.textColor || "#000000",
//           }}
//           textAnchor="middle"
//           dominantBaseline="middle"
//         >
//           {leftPocket.name}
//         </text>
//       )}
//       {activeTab === "letter" && leftPocket.letters && renderLetters()}
//       {activeTab === "image" && leftPocket.image && (
//         <image href={leftPocket.image} x="-20" y="-20" width="40" height="40" />
//       )}
//     </g>
//   );
// };

// export default LeftPocketEmb;

import React from "react";

const LeftPocketEmb = ({ embroidery }) => {
  const leftPocket = embroidery?.leftPocket || {};
  const {
    letters,
    letterStyle,
    letterFont,
    textColor,
    borderColor,
    activeTab,
  } = leftPocket;

  const renderLetters = () => {
    if (!letters) return null;

    const baseStyle = {
      fontFamily: letterFont || "Graduate",
      fontWeight: "bold",
      fill: textColor || "#000000",
      fontSize: "22px",
      stroke: borderColor || "#000000",
      strokeWidth: 0.5,
    };

    switch (letterStyle) {
      case "straight":
        return (
          <text x="0" y="20" style={{ ...baseStyle }} textAnchor="middle">
            {letters}
          </text>
        );

      case "staggered":
        return (
          <g>
            {letters.split("").map((char, index) => (
              <text
                key={index}
                x={index * 15}
                y={index * 22}
                style={{ ...baseStyle }}
                textAnchor="middle"
              >
                {char}
              </text>
            ))}
          </g>
        );

      case "interlocking":
        if (letters.length !== 2) {
          return (
            <text x="0" y="20" style={{ ...baseStyle }} textAnchor="middle">
              {letters}
            </text>
          );
        }
        return (
          <g>
            <text
              x="-10"
              y="20"
              style={{ ...baseStyle, fontSize: "30px" }}
              textAnchor="middle"
            >
              {letters.charAt(0)}
            </text>
            <text
              x="10"
              y="20"
              style={{ ...baseStyle, fontSize: "30px" }}
              textAnchor="middle"
            >
              {letters.charAt(1)}
            </text>
          </g>
        );

      default:
        return (
          <text x="0" y="20" style={{ ...baseStyle }} textAnchor="middle">
            {letters}
          </text>
        );
    }
  };

  return (
    <g className="left_pocket_emb" transform="translate(355, 400)">
      {activeTab === "letter" && leftPocket.letters && renderLetters()}
      {activeTab === "image" && leftPocket.image && (
        <image href={leftPocket.image} x="-20" y="-20" width="40" height="40" />
      )}
    </g>
  );
};

export default LeftPocketEmb;
