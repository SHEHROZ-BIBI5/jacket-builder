import React, { useState } from "react";
import colorIcon from "../../../assets/color-icon.png";

const allColors = [
  { name: "None", color: "transparent" },
  { name: "White", color: "#ffffff" },
  { name: "Creame", color: "#f5f5dc" },
  { name: "Beige", color: "#d1c4a4" },
  { name: "Black", color: "#000000" },
  { name: "Dark Grey", color: "#565656" },
  { name: "Light Grey", color: "#99999a" },
  { name: "Forest Green", color: "#174633" },
  { name: "Kelly Green", color: "#4cbb17" },
  { name: "Olive", color: "#4f583d" },
  { name: "Navy Blue", color: "#152347" },
  { name: "Royal Blue", color: "#1a4096" },
  { name: "Sky Blue", color: "#87ceeb" },
  { name: "Teal Blue", color: "#008080" },
  { name: "Light Aqua", color: "#3aa9b2" },
  { name: "Dark Purple", color: "#301934" },
  { name: "Hot Pink", color: "#dd1d58" },
  { name: "Baby Pink", color: "#fed0e4" },
  { name: "Dark Maroon", color: "#601f2a" },
  { name: "Light Maroon", color: "#8c133a" },
  { name: "Red", color: "#e00000" },
  { name: "Orange", color: "#e95926" },
  { name: "Athletic Gold", color: "#ffb81c" },
  { name: "Old Gold", color: "#cfb53b" },
  { name: "Yellow", color: "#eadc32" },
  { name: "Dark Tan", color: "#72290f" },
  { name: "Light Brown", color: "#9b7f6f" },
  { name: "Tan", color: "#a0522d" },
  { name: "Dark Brown", color: "#81533f" },
  { name: "Camel Brown", color: "#a5592d" },
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

const HoodIn = ({ handleColorChange, isOpen, toggleDropdown }) => {
  const [selectedColor, setSelectedColor] = useState(allColors[0]);

  const handleSelectColor = (color) => {
    setSelectedColor(color);
    handleColorChange("hoodIn", color.color);
    toggleDropdown(); // close after selecting
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

          {/* Label → hide when dropdown open */}
          {!isOpen && (
            <label className="mt-1 block text-sm ml-3 text-[#545c67] uppercase text-[11px]">
              Hood Inside
            </label>
          )}

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute left-[-170px] z-50 mt-1 bg-white border border-gray-300 w-[330px]">
              {/* Icon */}
              <div className="absolute -top-[12px] left-[200px] transform -translate-x-1/2">
                <img src={colorIcon} alt="icon" className="h-[12px]" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between pt-1 pb-2 px-2">
                <div className="flex-1 uppercase text-gray-400 text-xs text-left leading-4">
                  Select Hood Inside Color
                </div>
                <button
                  onClick={toggleDropdown}
                  className="text-gray-500 hover:text-black text-lg"
                >
                  ×
                </button>
              </div>

              {/* Color Options */}
              <div className="grid grid-cols-4 gap-2 p-3 text-center text-[10px] capitalize">
                {allColors
                  .filter((color) => color.name !== "None")
                  .map((color) => (
                    <button
                      key={color.name}
                      className="w-[68px] h-[40px] border border-gray-300 cursor-pointer flex items-center justify-center"
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

export default HoodIn;
