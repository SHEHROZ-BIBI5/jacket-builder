import React from "react";

const LeftChestEmb = ({ embroidery }) => {
  const leftChest = embroidery?.leftChest || {};
  const {
    letters,
    letterFont,
    textColor,
    activeTab,
    letterStyle,
    borderColor,
  } = leftChest;

  const renderLetters = () => {
    if (!letters) return null;

    const baseStyle = {
      fontFamily: letterFont || "Graduate",
      fontWeight: "bold",
      fill: textColor || "#000000",
      fontSize: "22px",
    };

    if (borderColor && borderColor !== "none") {
      baseStyle.stroke = borderColor;
      baseStyle.strokeWidth = "1px";
    }

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
              x="-5"
              y="20"
              style={{ ...baseStyle, fontSize: "30px" }}
              textAnchor="middle"
            >
              {letters.charAt(0)}
            </text>
            <text
              x="5"
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
    <g className="left_chest_emb" transform="translate(236, 215)">
      {activeTab === "name" && leftChest.name && (
        <text
          x="0"
          y="0"
          style={{
            fontFamily: leftChest.nameFont || "Graduate",
            fontSize: "18px",
            fill: leftChest.textColor || "#000000",
            stroke: leftChest.borderColor || "none",
            strokeWidth: "1px",
          }}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {leftChest.name}
        </text>
      )}
      {activeTab === "letter" && leftChest.letters && renderLetters()}
      {activeTab === "image" && leftChest.image && (
        <image href={leftChest.image} x="-20" y="-20" width="40" height="40" />
      )}
    </g>
  );
};

export default LeftChestEmb;
