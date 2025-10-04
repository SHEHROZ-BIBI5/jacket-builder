import React from "react";

const BackMiddleEmb = ({ embroidery }) => {
  const backMiddle = embroidery?.backMiddle || {};
  const { activeTab, name, nameFont, image, textColor } = backMiddle;

  const renderName = () => {
    if (!name) return null;

    return (
      <text
        x="0"
        y="0"
        style={{
          fontFamily: nameFont || "Graduate",
          fontSize: "25px",
          fill: textColor || "#000000",
        }}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {name}
      </text>
    );
  };

  return (
    <g className="back_middle_emb" transform="translate(300, 294)">
      {activeTab === "name" && renderName()}
      {activeTab === "image" && image && (
        <image href={image} x="-90" y="-95" width="180" height="190" />
      )}
    </g>
  );
};

export default BackMiddleEmb;
