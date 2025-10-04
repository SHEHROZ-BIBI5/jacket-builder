import React from "react";

const ColorSelector = ({ title, colors, selectedColor, onColorSelect }) => {
  if (!colors) return null; // safety check

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex gap-2 flex-wrap">
        {colors.map((colorObj) => (
          <button
            key={colorObj.color}
            style={{
              backgroundColor: colorObj.color,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border:
                selectedColor === colorObj.color
                  ? "2px solid black"
                  : "1px solid #ccc",
            }}
            onClick={() => onColorSelect(colorObj.color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
