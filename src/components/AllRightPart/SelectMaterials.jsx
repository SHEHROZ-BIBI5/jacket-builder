import React, { useState } from "react";

const SelectMaterials = ({
  selectedStyle,
  setShowZip,
  sleevePocketOption,
  setSleevePocketOption,
}) => {
  const [bodyMaterial, setBodyMaterial] = useState("");
  const [sleevesMaterial, setSleevesMaterial] = useState("");
  const [hasSelectedBody, setHasSelectedBody] = useState(false);

  const handleBodyChange = (e) => {
    const newValue = e.target.value;
    setBodyMaterial(newValue);

    if (!hasSelectedBody && newValue !== "") {
      setSleevesMaterial(newValue);
      setHasSelectedBody(true);
    }
  };

  const handleSleevePocketChange = (e) => {
    const value = e.target.value;
    setSleevePocketOption(value);

    if (value === "with-sleeve-pocket") {
      setShowZip(true);
    } else if (value === "without-sleeve-pocket") {
      setShowZip(false);
    }
  };

  return (
    <div className="select-control-wrap text-[#545c67] font-lato text-[15px] font-normal leading-1.5 flex flex-col gap-3">
      {/* Body Material Select */}
      <div className="relative">
        <select
          className="w-full appearance-none shadow-sm border border-gray-300 text-gray-700 font-medium px-4 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200 cursor-pointer"
          id="body_material_select"
          value={bodyMaterial}
          onChange={handleBodyChange}
        >
          <option value="" disabled>
            Select Body Material
          </option>
          <option value="Wool">Wool</option>
          <option value="Cowhide Leather">Cowhide Leather</option>
          <option value="Sheep Leather">Sheep Leather</option>
          <option value="Polyester Satin">Polyester Satin</option>
          <option value="Cotton Fleeve">Cotton Fleeve</option>
          <option value="Poly Cotton Twill">Poly Cotton Twill</option>
          <option value="SoftShell">SoftShell</option>
        </select>
      </div>

      {/* Sleeves Material */}
      <div className="mb-3">
        <div className="relative mb-3">
          <select
            className="w-full appearance-none shadow-sm border border-gray-300 text-gray-700 font-medium px-4 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200 cursor-pointer"
            id="sleeves_material_select"
            value={sleevesMaterial}
            onChange={(e) => setSleevesMaterial(e.target.value)}
          >
            <option value="" disabled>
              Select Sleeves Material
            </option>
            {bodyMaterial && (
              <option value={bodyMaterial}>{bodyMaterial}</option>
            )}
          </select>
        </div>

        {/* Sleeve Pocket Option (sirf bomber ke liye) */}
        {selectedStyle === "bomber" && (
          <div className="relative">
            <select
              className="w-full appearance-none shadow-sm border border-gray-300 text-gray-700 font-medium px-4 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200 cursor-pointer"
              id="sleeve_pocket_option"
              value={sleevePocketOption}
              onChange={handleSleevePocketChange}
            >
              <option value="" disabled>
                Select Sleeve Pocket
              </option>
              <option value="with-sleeve-pocket">With sleeve pocket</option>
              <option value="without-sleeve-pocket">
                Without sleeve pocket
              </option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectMaterials;
