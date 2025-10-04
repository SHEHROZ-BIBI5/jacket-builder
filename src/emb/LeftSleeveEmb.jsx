import React from "react";

const LeftSleeveEmb = ({ embroidery }) => {
  const leftSleeve = embroidery?.leftSleeve || {};
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
  } = leftSleeve;

  const renderName = () => {
    if (!name) return null;

    return (
      <text
        x="0"
        y="0"
        style={{
          fontFamily: nameFont || "Graduate",
          // Font size ko 12px kiya gaya hai
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
      // Font size ko 12px kiya gaya hai
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
                x={index * 8} // X position adjust ki gai hai
                y={index * 10} // Y position adjust ki gai hai
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
              x="-6" // X position adjust ki gai hai
              y="0"
              style={{ ...baseStyle, fontSize: "15px" }}
              textAnchor="middle"
            >
              {letters.charAt(0)}
            </text>
            <text
              x="6" // X position adjust ki gai hai
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
    <g className="left_sleeve_emb" transform="translate(350, 260)">
      {activeTab === "name" && renderName()}
      {activeTab === "letter" && renderLetters()}
      {activeTab === "image" && image && (
        <image href={image} x="-27.5" y="-27.5" width="55" height="55" />
      )}
    </g>
  );
};

export default LeftSleeveEmb;
