import React from "react";

const BackTopEmb = ({ embroidery }) => {
  const backTop = embroidery?.backTop || {};
  const { activeTab, name, nameFont, image, textColor } = backTop;

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
    <g className="back_top_emb" transform="translate(300, 163)">
      {activeTab === "name" && renderName()}
      {activeTab === "image" && image && (
        <image href={image} x="-40" y="-40" width="80" height="80" />
      )}
    </g>
  );
};

export default BackTopEmb;
