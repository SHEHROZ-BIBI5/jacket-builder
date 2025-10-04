import React from "react";
import ColorPicker from "./ColorPicker";
// Removed the import for BorderColor
// import BorderColor from "./BorderColor";

const fontOptions = [
  "Graduate",
  "Courgette",
  "Cutive",
  "Merienda One",
  "Satisfy",
  "Lobster Two",
  "Pinyon Script",
  "Times New Roman",
  "Pacifico",
  "Bangers",
  "Dancing Script",
  "Playfair Display",
  "Great Vibes",
];

const NameTab = ({
  name,
  setName,
  font,
  setFont,
  textColor,
  setTextColor,
  // Removed borderColor and setBorderColor props
  activeColorPicker,
  setActiveColorPicker,
}) => {
  return (
    <div className="space-y-4 mt-5">
      <div>
        <div className="flex">
          <h1 className="text-gray-600 mr-5 mt-3">NAME</h1>
          <input
            type="text"
            maxLength="10"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-[500px] p-2 border h-[50px] ml-1"
          />
        </div>
        <p className="text-xs text-[#3b86b1] uppercase mt-1 ml-16">
          Max 10 Characters
        </p>
      </div>
      <div className="flex items-center">
        <h1 className="text-gray-600 mr-7 mt-3">FONT</h1>
        <div className="relative w-full text-gray-600">
          <select
            value={font}
            onChange={(e) => {
              setFont(e.target.value);
            }}
            className="w-full p-2 border h-[40px] appearance-none pr-10 text-gray-600"
          >
            {fontOptions.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <ColorPicker
          label="FILL"
          selectedColor={textColor}
          setSelectedColor={(color) => setTextColor(color)}
          isOpen={activeColorPicker === "nameFill"}
          setIsOpen={(val) => setActiveColorPicker(val ? "nameFill" : null)}
        />
        {/* The BorderColor component has been completely removed from this section */}
      </div>
    </div>
  );
};

export default NameTab;
