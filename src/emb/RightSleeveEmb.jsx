import React from "react";

const RightSleeveEmb = ({ embroidery }) => {
  const rightSleeve = embroidery?.rightSleeve || {};
  const {
    activeTab,
    name,
    nameFont,
    letters,
    letterStyle,
    letterFont,
    image,
    textColor,
    borderColor,
  } = rightSleeve;

  const renderName = () => {
    if (!name) return null;

    return (
      <text
        x="0"
        y="0"
        style={{
          fontFamily: nameFont || "Graduate",
          fontSize: "12px",
          fill: textColor || "#000000",
        }}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {name}
      </text>
    );
  };

  const renderLetters = () => {
    if (!letters) return null;

    const baseStyle = {
      fontFamily: letterFont || "Graduate",
      fontWeight: "bold",
      fill: textColor || "#000000",
      fontSize: "12px",
      stroke: borderColor || "#000000",
      strokeWidth: 0.5,
    };

    switch (letterStyle) {
      case "straight":
        return (
          <text x="0" y="0" style={{ ...baseStyle }} textAnchor="middle">
            {letters}
          </text>
        );

      case "staggered":
        return (
          <g>
            {letters.split("").map((char, index) => (
              <text
                key={index}
                x={index * 8}
                y={index * 10}
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
            <text x="0" y="0" style={{ ...baseStyle }} textAnchor="middle">
              {letters}
            </text>
          );
        }
        return (
          <g>
            <text
              x="-6"
              y="0"
              style={{ ...baseStyle, fontSize: "15px" }}
              textAnchor="middle"
            >
              {letters.charAt(0)}
            </text>
            <text
              x="6"
              y="0"
              style={{ ...baseStyle, fontSize: "15px" }}
              textAnchor="middle"
            >
              {letters.charAt(1)}
            </text>
          </g>
        );

      default:
        return (
          <text x="0" y="0" style={{ ...baseStyle }} textAnchor="middle">
            {letters}
          </text>
        );
    }
  };

  return (
    // y-coordinate ko 290 se 310 kiya gaya hai
    <g className="right_sleeve_emb" transform="translate(250, 260)">
      {activeTab === "name" && renderName()}
      {activeTab === "letter" && renderLetters()}
      {activeTab === "image" && image && (
        <image href={image} x="-27.5" y="-27.5" width="55" height="55" />
      )}
    </g>
  );
};

export default RightSleeveEmb;
