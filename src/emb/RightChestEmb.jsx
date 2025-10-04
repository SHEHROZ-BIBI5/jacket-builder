import React from "react";

const RightChestEmb = ({ embroidery }) => {
  const rightChest = embroidery?.rightChest || {};
  const {
    letters,
    letterStyle,
    letterFont,
    textColor,
    borderColor,
    activeTab,
  } = rightChest;

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
    <g className="right_chest_emb" transform="translate(360, 220)">
      {activeTab === "name" && rightChest.name && (
        <text
          x="0"
          y="0"
          style={{
            fontFamily: rightChest.nameFont || "Graduate",
            fontSize: "18px",
            fill: rightChest.textColor || "#000000",
            // The border properties (stroke and strokeWidth) have been removed for the name.
          }}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {rightChest.name}
        </text>
      )}
      {activeTab === "letter" && rightChest.letters && renderLetters()}
      {activeTab === "image" && rightChest.image && (
        <image href={rightChest.image} x="-20" y="-20" width="40" height="40" />
      )}
    </g>
  );
};

export default RightChestEmb;
