import React, { useState } from "react";
import RightChestSub from "./Embroideries/rightebr/RightChestSub";
import LeftChestSub from "./Embroideries/leftebr/LeftChestSub";
import RightSleeveSub from "./Embroideries/rightebr/RightSleeveSub";
import LeftSleeveSub from "./Embroideries/leftebr/LeftSleeveSub";
import RightPocketSub from "./Embroideries/rightebr/RightPocketSub";
import LeftPocketSub from "./Embroideries/leftebr/LeftPocketSub";
import BackTopSub from "./Embroideries/backebr/BackTopSub";
import BackMiddleSub from "./Embroideries/backebr/BackMiddleSub";
import BackBottomSub from "./Embroideries/backebr/BackBottomSub";
import drap from "../../assets/drap.png";
import tik from "../../assets/tik.png";

const PatchesEmbroideries = ({
  isOpen,
  toggleDropdown,
  embroidery,
  setEmbroidery,
  selectedStyle, // ✅ new prop
}) => {
  const [openSub, setOpenSub] = useState(null);

  const toggleSub = (name) => {
    setOpenSub(openSub === name ? null : name);
  };

  const renderSub = (name, Component, dataKey) => (
    <div key={name}>
      <div
        className="cursor-pointer flex justify-between items-center h-12 gap-1 mb-1 py-2 bg-gray-100"
        onClick={() => toggleSub(name)}
      >
        <span className="flex gap-2 items-center min-h-[48px] cursor-pointer bg-[#f3f5f8] text-[rgb(84,92,103)] text-[12px] uppercase px-[12px] pt-[14px] pb-[15px] pl-[19px] bg-no-repeat transition-none">
          <div className="w-5 h-5 bg-slate-100 border-2 border-gray-300 rounded-full"></div>
          {name}
        </span>

        <span>
          {openSub === name ? (
            <img src={drap} alt="close" className="w-5 h-4" />
          ) : (
            <img src={drap} alt="open" className="w-5 h-4" />
          )}
        </span>
      </div>

      {openSub === name && (
        <Component
          data={embroidery[dataKey]}
          setData={(val) =>
            setEmbroidery((prev) => ({
              ...prev,
              [dataKey]: { ...prev[dataKey], ...val },
            }))
          }
          setOpenSub={setOpenSub}
        />
      )}
    </div>
  );

  return (
    <div className="font-inter h-auto">
      <div
        className={`${
          isOpen ? "p-2" : "p-4"
        } cursor-pointer flex justify-between items-center transition-colors duration-200 
  ${isOpen ? "" : "border-b border-gray-200"}`}
        onClick={toggleDropdown}
      >
        <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          04 - Add Patches/Embroideries
        </span>
        <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 text-sm">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      <div
        className={`px-px transition-all duration-300 ease-in-out font-inter h-auto ${
          isOpen
            ? "py-3 max-h-full opacity-100"
            : "py-0 max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {renderSub("Right Chest", RightChestSub, "rightChest")}
        {renderSub("Left Chest", LeftChestSub, "leftChest")}
        {renderSub("Right Pocket", RightPocketSub, "rightPocket")}
        {renderSub("Left Pocket", LeftPocketSub, "leftPocket")}
        {renderSub("Back Top", BackTopSub, "backTop")}
        {renderSub("Back Middle", BackMiddleSub, "backMiddle")}
        {renderSub("Back Bottom", BackBottomSub, "backBottom")}
        {renderSub("Right Sleeve", RightSleeveSub, "rightSleeve")}
        {/* ✅ Left Sleeve sirf tab dikhana jab bomber na ho */}
        {selectedStyle !== "bomber" &&
          renderSub("Left Sleeve", LeftSleeveSub, "leftSleeve")}
      </div>
    </div>
  );
};

export default PatchesEmbroideries;
