import React, { useState } from "react";
import JacketStyle from "../components/AllRightPart/JacketStyle";
import MaterialsStyle from "./AllRightPart/MaterialsStyle";
import AddColors from "./AllRightPart/AddColors";
import PatchesEmbroideries from "./AllRightPart/PatchesEmbroideries";
import JacketPrice from "./AllRightPart/JacketPrice";
import SelectSize from "./AllRightPart/SelectSize";
import OderButton from "./AllRightPart/OderButton";

const RightPart = ({
  setSelectedStyle,
  showZip,
  setShowZip,
  showSnaps,
  setShowSnaps,
  colors,
  handleColorChange,
  activeView,
  setActiveView,
  sleeveStyle,
  setSleeveStyle,
  knitStyle,
  setKnitStyle,
  embroidery,
  setEmbroidery,
  selectedStyle,
  sleevePocketOption, // ✅ add this
  setSleevePocketOption, // ✅ add this
}) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full lg:w-[340px] space-y-1">
      <JacketPrice />
      <JacketStyle
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        isOpen={openSection === "style"}
        toggleDropdown={() => toggleSection("style")}
      />
      <MaterialsStyle
        selectedStyle={selectedStyle} // 👈 ye line confirm karni hai
        sleeveStyle={sleeveStyle}
        setSleeveStyle={setSleeveStyle}
        knitStyle={knitStyle}
        setKnitStyle={setKnitStyle}
        showZip={showZip}
        setShowZip={setShowZip}
        showSnaps={showSnaps}
        setShowSnaps={setShowSnaps}
        isOpen={openSection === "materials"}
        toggleDropdown={() => toggleSection("materials")}
        sleevePocketOption={sleevePocketOption} // ✅
        setSleevePocketOption={setSleevePocketOption} // ✅
      />
      <AddColors
        selectedStyle={selectedStyle} // 👈 yahan pass karna hai
        colors={colors}
        knitStyle={knitStyle} // ← Pass this too
        handleColorChange={handleColorChange}
        isOpen={openSection === "colors"}
        toggleDropdown={() => toggleSection("colors")}
      />
      <PatchesEmbroideries
        selectedStyle={selectedStyle}
        isOpen={openSection === "patches"}
        toggleDropdown={() => toggleSection("patches")}
        embroidery={embroidery}
        setEmbroidery={setEmbroidery}
      />
      <SelectSize
        isOpen={openSection === "size"}
        toggleDropdown={() => toggleSection("size")}
      />
      <OderButton />
    </div>
  );
};

export default RightPart;
