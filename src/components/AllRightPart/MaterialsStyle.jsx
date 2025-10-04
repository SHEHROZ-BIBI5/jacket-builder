import React, { useState } from "react";
import tik from "../../assets/tik.png";
import SelectMaterials from "./SelectMaterials";

const MaterialsStyle = ({
  sleeveStyle,
  setSleeveStyle,
  showZip,
  setShowZip,
  showSnaps,
  setShowSnaps,
  knitStyle,
  setKnitStyle,
  isOpen,
  toggleDropdown,
  selectedStyle, // ✅ Add this
  sleevePocketOption, // ✅ bhi add karo
  setSleevePocketOption, // ✅ bhi add karo
}) => {
  const [liningStyle, setLiningStyle] = useState("");

  const RadioControl = ({ id, name, value, label, checked, onChange }) => {
    return (
      <label
        htmlFor={id}
        className={`flex items-center h-[45px] w-full cursor-pointer transition-colors duration-200 p-[13px_12px_15px_12px] ${
          checked
            ? "bg-gray-500 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        {checked ? (
          <img
            src={tik}
            alt="tik"
            className="w-5 h-5 text-white rounded-lg mr-2"
          />
        ) : (
          <div className="w-5 h-5 bg-slate-100 border-2 border-gray-300 rounded-full mr-2"></div>
        )}
        <span className="text-sm">{label}</span>
      </label>
    );
  };

  return (
    <div className="font-inter color_selection">
      <div className="overflow-hidden w-84 mb-0">
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
            02 - Materials & Style
          </span>
          <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 text-sm">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        {/* Content */}
        <div
          className={`px-1 transition-all duration-300 ease-in-out ${
            isOpen
              ? "py-3 max-h-full opacity-100"
              : "py-0 max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <SelectMaterials
            selectedStyle={selectedStyle}
            setShowZip={setShowZip}
            sleevePocketOption={sleevePocketOption}
            setSleevePocketOption={setSleevePocketOption}
          />
          {/* Sleeve style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            {["bomber", "varsity", "varsity_hoodie", "zippered_hood"].includes(
              selectedStyle
            ) && (
              <>
                <RadioControl
                  id="sleeve_style_set-in-sleeves"
                  name="sleeve_style"
                  value="set-in"
                  label="Set in sleeves"
                  checked={sleeveStyle === "set-in"}
                  onChange={() => setSleeveStyle("set-in")}
                />
                <RadioControl
                  id="sleeve_style_raglan-sleeves"
                  name="sleeve_style"
                  value="raglan"
                  label="Raglan sleeves"
                  checked={sleeveStyle === "raglan"}
                  onChange={() => setSleeveStyle("raglan")}
                />
              </>
            )}
          </div>

          {/* Snap / Zip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            {["varsity", "varsity_hoodie", "zippered_hood"].includes(
              selectedStyle
            ) && (
              <>
                <RadioControl
                  id="buttons_style_snap"
                  name="buttons_style"
                  value="snap"
                  label="Snap Closure"
                  checked={!!showSnaps}
                  onChange={() => {
                    setShowSnaps(true);
                    setShowZip(false);
                  }}
                />
                <RadioControl
                  id="buttons_style_zip"
                  name="buttons_style"
                  value="zip"
                  label="Zip Closure"
                  checked={!!showZip}
                  onChange={() => {
                    setShowZip(true);
                    setShowSnaps(false);
                  }}
                />
              </>
            )}
          </div>

          {/* Lining options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            {["bomber", "varsity", "varsity_hoodie", "zippered_hood"].includes(
              selectedStyle
            ) && (
              <>
                <RadioControl
                  id="lining_style_quilted"
                  name="lining_style"
                  value="quilted"
                  label="Quilted Lining"
                  checked={liningStyle === "quilted"}
                  onChange={() => setLiningStyle("quilted")}
                />
                <RadioControl
                  id="lining_style_plain"
                  name="lining_style"
                  value="plain"
                  label="Plain Lining"
                  checked={liningStyle === "plain"}
                  onChange={() => setLiningStyle("plain")}
                />
              </>
            )}
          </div>

          {/* Knit style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {selectedStyle === "bomber" && (
              <RadioControl
                id="knit_style_plain"
                name="knit_style"
                value="plain"
                label="Plain Knit"
                checked={knitStyle === "plain"}
                onChange={() => setKnitStyle("plain")}
              />
            )}
            {["varsity", "varsity_hoodie", "zippered_hood"].includes(
              selectedStyle
            ) && (
              <>
                <RadioControl
                  id="knit_style_plain"
                  name="knit_style"
                  value="plain"
                  label="Plain Knit"
                  checked={knitStyle === "plain"}
                  onChange={() => setKnitStyle("plain")}
                />
                <RadioControl
                  id="knit_style_two_lines"
                  name="knit_style"
                  value="two_lines"
                  label="2 Lines Knit"
                  checked={knitStyle === "two_lines"}
                  onChange={() => setKnitStyle("two_lines")}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsStyle;
