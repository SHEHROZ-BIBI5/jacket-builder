import React, { useState } from "react";
import colorIcon from "../../../assets/color-icon.png";

const allColors = [
  { name: "None", color: "transparent" },
  { name: "Black", color: "#000000" },
  { name: "Silver", color: "#c4c6c6" },
  { name: "Old Gold", color: "#b7923e" },
];

const getTextColor = (bgColor, name) => {
  if (name === "None") return "#545c67";
  if (!bgColor || bgColor === "transparent") return "black";
  const hex = bgColor.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? "black" : "white";
};

const shortenName = (name) => name.split(" ")[0];

const ZipColor = ({ handleColorChange, isOpen, toggleDropdown }) => {
  const [selectedColor, setSelectedColor] = useState(allColors[0]);

  const handleSelectColor = (color) => {
    setSelectedColor(color);
    handleColorChange("zip", color.color);
    toggleDropdown(); // close after selection
  };

  return (
    <div className="justify-center items-center p-1 font-sans grid grid-cols-2 gap-[1px]">
      <div className="w-[80px] max-w-sm">
        <div className="relative">
          {/* Selected Button */}
          <button
            onClick={toggleDropdown}
            className="w-[70px] h-[40px] border shadow-sm flex items-center justify-center"
            style={{ backgroundColor: selectedColor.color }}
          >
            <span
              className="text-xs font-medium"
              style={{
                color: getTextColor(selectedColor.color, selectedColor.name),
              }}
            >
              {shortenName(selectedColor.name)}
            </span>
          </button>

          {/* Label */}
          {!isOpen && (
            <label className="mt-1 block text-sm ml-5 text-[#545c67] uppercase text-[11px]">
              Zip
            </label>
          )}

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 z-50 mt-1 bg-white border border-gray-300 w-[330px] max-w-[calc(100vw-20px)]">
              {/* Icon */}
              <div className="absolute -top-[12px] left-1/2 transform -translate-x-1/2">
                <img src={colorIcon} alt="icon" className="h-[12px]" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between pt-1 pb-2 px-2">
                <div className="flex-1 uppercase text-gray-400 text-xs text-left leading-4">
                  Select Zip Color
                </div>
                <button
                  onClick={toggleDropdown}
                  className="text-gray-500 hover:text-black text-lg"
                >
                  ×
                </button>
              </div>

              {/* Color Options */}
              <div className="grid grid-cols-4 gap-2 p-2">
                {allColors
                  .filter((color) => color.name !== "None")
                  .map((color) => (
                    <button
                      key={color.name}
                      className="w-[68px] h-[40px] ml-[40px] border border-gray-300 cursor-pointer flex items-center justify-center"
                      style={{ backgroundColor: color.color }}
                      onClick={() => handleSelectColor(color)}
                      title={color.name}
                    >
                      <span
                        className="text-[9px] font-medium text-center leading-tight"
                        style={{ color: getTextColor(color.color, color.name) }}
                      >
                        {color.name}
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ZipColor;
