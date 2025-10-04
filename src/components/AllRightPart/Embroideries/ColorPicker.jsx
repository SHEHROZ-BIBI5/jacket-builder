import React, { useState } from "react";
import colorIcon from "../../../assets/color-icon.png";

const allColors = [
  // ... (your color array)
  { name: "White", color: "#ffffff" },
  { name: "Creame", color: "#fffed0" },
  { name: "Beige", color: "#d1c4a4" },
  { name: "Salmon", color: "#eaa794" },
  { name: "Black", color: "#000000" },
  { name: "Dark Grey", color: "#565656" },
  { name: "Light Grey", color: "#99999a" },
  { name: "Forest Green", color: "#174633" },
  { name: "Kelly Green", color: "#44883e" },
  { name: "Olive", color: "#4f583d" },
  { name: "Navy Blue", color: "#152347" },
  { name: "Royal Blue", color: "#1a4096" },
  { name: "Sky Blue", color: "#83c2e7" },
  { name: "Teal Blue", color: "#005355" },
  { name: "Light Aqua", color: "#3aa9b2" },
  { name: "Dark Purple", color: "#3b275b" },
  { name: "Hot Pink", color: "#dd1d58" },
  { name: "Baby Pink", color: "#fed0e4" },
  { name: "Dark Maroon", color: "#601f2a" },
  { name: "Light Maroon", color: "#a01526" },
  { name: "Red", color: "#e00000" },
  { name: "Orange", color: "#e95926" },
  { name: "Athletic Gold", color: "#ffb81c" },
  { name: "Old Gold", color: "#b7923e" },
  { name: "Yellow", color: "#eadc32" },
  { name: "Vegas Gold", color: "#c5b783" },
  { name: "Light Brown", color: "#9b7f6f" },
  { name: "Tan", color: "#a0522d" },
  { name: "Dark Brown", color: "#81533f" },
  { name: "Camel Brown", color: "#9f885e" },
];

const shortenName = (name) => name.split(" ")[0];

const getTextColor = (bgColor) => {
  if (!bgColor) return "black";
  const hex = bgColor.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? "black" : "white";
};

const findColorObject = (colorHex) => {
  return allColors.find((c) => c.color === colorHex) || null;
};

const ColorPicker = ({
  selectedColor,
  setSelectedColor,
  isOpen,
  setIsOpen,
  label,
}) => {
  const selectedColorObject = findColorObject(selectedColor);

  const handleSelectColor = (color) => {
    setSelectedColor(color.color);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[90px] h-[36px] border shadow-sm flex items-center justify-center"
        style={{
          backgroundColor: selectedColor || "#868482",
        }}
      >
        <span
          className="text-xs font-medium"
          style={{
            color: getTextColor(selectedColor),
          }}
        >
          {selectedColorObject?.name
            ? shortenName(selectedColorObject.name)
            : ""}
        </span>
      </button>
      {!isOpen && <label className="mt-1 block text-sm ml-7">{label}</label>}
      {isOpen && (
        <div className="absolute z-10 w-[300px] mt-1 bg-white border border-gray-300">
          <div className="absolute -top-[12px] left-[25px] transform -translate-x-1/2">
            <img src={colorIcon} alt="icon" className="h-[12px]" />
          </div>
          <div className="flex items-center justify-between pt-2 pb-2 px-2">
            <div className="flex-1 uppercase text-gray-400 text-xs text-left leading-4">
              Select {label} Color
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-black text-lg"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2 p-2">
            {allColors.map((color) => (
              <button
                key={color.name}
                className="w-[55px] h-[35px] border border-gray-200 cursor-pointer flex items-center justify-center"
                style={{ backgroundColor: color.color }}
                onClick={() => handleSelectColor(color)}
                title={color.name}
              >
                <span
                  className="text-[9px] font-medium text-center leading-tight"
                  style={{ color: getTextColor(color.color) }}
                >
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
