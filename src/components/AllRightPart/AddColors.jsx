// AddColors.jsx
import React, { useState } from "react";

import BodyColor from "./colours/BodyColor";
import SleevesColor from "./colours/SleevesColor";
import PocketsColor from "./colours/PocketsColor";
import Snaps from "./colours/Snaps";
import KnitBace from "./colours/KnitBace";
import HoodOut from "./colours/HoodOut";
import HoodIn from "./colours/HoodIn";
import ZipColor from "./colours/ZipColor";
import KnitLine from "./colours/KnitLine";

const AddColors = ({
  colors,
  handleColorChange,
  isOpen,
  toggleDropdown,
  selectedStyle,
  showZip,
  knitStyle, // ← required for KnitLine logic
}) => {
  const [openSub, setOpenSub] = useState(null); // ایک وقت میں صرف ایک sub open ہوگا

  const toggleSub = (name) => {
    setOpenSub(openSub === name ? null : name);
  };

  const getColorOptions = () => {
    const options = ["body", "sleeves", "pockets", "knitBase", "zip"]; // ہمیشہ common

    // Bomber یا Zip select → Zip show، ورنہ Snap
    if (selectedStyle === "bomber" || showZip) {
      options.push("zip");
    } else {
      options.push("snaps");
    }

    // 2 Lines Knit select → show KnitLine
    if (knitStyle === "two_lines") {
      options.push("knitLine");
    }

    // Hoodie options
    if (["varsity_hoodie", "zippered_hood"].includes(selectedStyle)) {
      options.push("hoodOut", "hoodIn");
    }

    return options;
  };

  const options = getColorOptions();

  // helper function to render components dynamically
  const renderSub = (name, Component) => (
    <Component
      colors={colors}
      handleColorChange={handleColorChange}
      isOpen={openSub === name}
      toggleDropdown={() => toggleSub(name)}
      setOpenSub={setOpenSub} // agar sub component ko close karna ho
    />
  );

  return (
    <div className="font-inter color_selection h-auto ml-0">
      <div className="w-full ml-0 h-auto">
        {/* Header */}
        <div
          className={`${
            isOpen ? "p-2" : "p-4"
          } cursor-pointer flex justify-between items-center transition-colors duration-200 ${
            isOpen ? "" : "border-b border-gray-200"
          }`}
          onClick={toggleDropdown}
        >
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            03 - Add Colors
          </span>
          <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 text-sm">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen
              ? "py-1 max-h-full opacity-100"
              : "py-0 max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-1">
            {options.includes("body") && renderSub("body", BodyColor)}
            {options.includes("sleeves") && renderSub("sleeves", SleevesColor)}
            {options.includes("pockets") && renderSub("pockets", PocketsColor)}
            {options.includes("snaps") && renderSub("snaps", Snaps)}
            {options.includes("zip") && renderSub("zip", ZipColor)}
            {options.includes("knitBase") && renderSub("knitBase", KnitBace)}
            {options.includes("hoodIn") && renderSub("hoodIn", HoodIn)}
            {options.includes("hoodOut") && renderSub("hoodOut", HoodOut)}
            {options.includes("knitLine") && renderSub("knitLine", KnitLine)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddColors;
