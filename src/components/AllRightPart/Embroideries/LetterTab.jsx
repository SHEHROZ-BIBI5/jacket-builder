import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import BorderColor from "./BorderColor";
import straightImg from "../../../assets/straight.png";
import staggeredImg from "../../../assets/staggered.png";
import interlockingImg from "../../../assets/interlocking.png";
import tik from "../../../assets/tik.png";

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

const LetterTab = ({
  letters,
  setLetters,
  font,
  setFont,
  letterStyle,
  setLetterStyle,
  textColor,
  setTextColor,
  borderColor,
  setBorderColor,
  activeColorPicker,
  setActiveColorPicker,
}) => {
  const [selectedPatch, setSelectedPatch] = useState("emb");

  const handleLettersChange = (e) => {
    const value = e.target.value.toUpperCase().slice(0, 4);
    setLetters(value);
    if (value.length > 2 && letterStyle === "interlocking") {
      setLetterStyle("straight");
    }
  };

  const handleLetterStyle = (style) => {
    setLetterStyle(style);
  };

  const handlePatchSelect = (patch) => {
    setSelectedPatch(patch);
  };

  return (
    <div className="space-y-4 mt-5">
      <div>
        <div className="flex">
          <h1 className="text-gray-600 mr-5 mt-3">LETTER</h1>
          <input
            type="text"
            maxLength="4"
            value={letters}
            onChange={handleLettersChange}
            className="w-[500px] p-2 border h-[50px] ml-1"
          />
        </div>
        <p className="text-xs text-[#3b86b1] uppercase mt-1 ml-16">
          Max 4 Characters
        </p>
      </div>

      {/* The extra preview section has been removed */}

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

      <div>
        <h1 className="uppercase mt-4 text-gray-600">Letters Appearance</h1>
        <div className="flex gap-2 mt-2">
          <div className="flex flex-col items-center">
            <img
              src={straightImg}
              alt="Straight"
              className={`w-[120px] h-[60px] border-2 ${
                letterStyle === "straight"
                  ? "border-green-600"
                  : "border-gray-300"
              } cursor-pointer`}
              onClick={() => handleLetterStyle("straight")}
            />
            <p
              className={`text-sm mt-1 ${
                letterStyle === "straight" ? "font-bold" : ""
              }`}
            >
              Straight
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={staggeredImg}
              alt="Staggered"
              className={`w-[120px] h-[60px] border-2 ${
                letterStyle === "staggered"
                  ? "border-green-600"
                  : "border-gray-300"
              } cursor-pointer`}
              onClick={() => handleLetterStyle("staggered")}
            />
            <p
              className={`text-sm mt-1 ${
                letterStyle === "staggered" ? "font-bold" : ""
              }`}
            >
              Staggered
            </p>
          </div>

          {letters.length <= 2 && (
            <div className="flex flex-col items-center">
              <img
                src={interlockingImg}
                alt="Interlocking"
                className={`w-[120px] h-[60px] border-2 ${
                  letterStyle === "interlocking"
                    ? "border-green-600"
                    : "border-gray-300"
                } cursor-pointer`}
                onClick={() => handleLetterStyle("interlocking")}
              />
              <p
                className={`text-sm mt-1 ${
                  letterStyle === "interlocking" ? "font-bold" : ""
                }`}
              >
                Interlocking
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => handlePatchSelect("emb")}
          className={`flex items-center gap-2 h-[45px] w-[200px] px-3 ${
            selectedPatch === "emb"
              ? "bg-[#545c67] text-white"
              : "bg-gray-100 text-[#545c67]"
          }`}
        >
          {selectedPatch === "emb" ? (
            <img src={tik} alt="tik" className="w-5 h-5" />
          ) : (
            <div className="w-5 h-5 bg-slate-100 border-2 border-gray-300 rounded-full"></div>
          )}
          <span className="uppercase text-sm">Emb Patch</span>
        </button>

        <button
          onClick={() => handlePatchSelect("felt")}
          className={`flex items-center gap-2 h-[45px] w-[200px] px-3 ${
            selectedPatch === "felt"
              ? "bg-[#545c67] text-white"
              : "bg-gray-100 text-[#545c67]"
          }`}
        >
          {selectedPatch === "felt" ? (
            <img src={tik} alt="tik" className="w-5 h-5" />
          ) : (
            <div className="w-5 h-5 bg-slate-100 border-2 border-gray-300 rounded-full"></div>
          )}
          <span className="uppercase text-sm">Felt Patch</span>
        </button>
      </div>

      <div className="flex gap-4 mt-4">
        <ColorPicker
          label="FILL"
          selectedColor={textColor}
          setSelectedColor={(color) => setTextColor(color)}
          isOpen={activeColorPicker === "letterFill"}
          setIsOpen={(val) => setActiveColorPicker(val ? "letterFill" : null)}
        />
        <BorderColor
          label="BORDER"
          selectedColor={borderColor}
          setSelectedColor={(color) => setBorderColor(color)}
          isOpen={activeColorPicker === "letterBorder"}
          setIsOpen={(val) => setActiveColorPicker(val ? "letterBorder" : null)}
        />
      </div>
    </div>
  );
};

export default LetterTab;
