import React from "react";

const BackBottomEmb = ({ embroidery }) => {
  const backBottom = embroidery?.backBottom || {};
  const { activeTab, name, nameFont, image, textColor } = backBottom;

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
    <g className="back_bottom_emb" transform="translate(300, 425)">
      {activeTab === "name" && renderName()}
      {activeTab === "image" && image && (
        <image href={image} x="-90" y="-20" width="180" height="40" />
      )}
    </g>
  );
};

export default BackBottomEmb;
