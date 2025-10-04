import React, { useState, useEffect } from "react";
import LetterTab from "../LetterTab";
import ImageTab from "../ImageTab";

const LeftPocketSub = ({ data = {}, setData = () => {} }) => {
  // activeTab ko 'letter' se initialize kiya gaya hai kyunki 'name' hat gaya hai
  const [activeTab, setActiveTab] = useState(data.activeTab || "letter");
  const [letters, setLetters] = useState(data.letters || "");
  const [letterStyle, setLetterStyle] = useState(
    data.letterStyle || "straight"
  );
  const [letterFont, setLetterFont] = useState(data.letterFont || "Graduate");
  const [uploadedImage, setUploadedImage] = useState(data.image || null);
  const [textColor, setTextColor] = useState(data.textColor || "#000000");
  const [borderColor, setBorderColor] = useState(data.borderColor || "#ffffff");
  const [activeColorPicker, setActiveColorPicker] = useState(null);

  useEffect(() => {
    setData({
      activeTab,
      letters,
      letterStyle,
      letterFont,
      image: uploadedImage,
      textColor,
      borderColor,
    });
  }, [
    activeTab,
    letters,
    letterStyle,
    letterFont,
    uploadedImage,
    textColor,
    borderColor,
    setData,
  ]);

  return (
    <div className="p-2 text-sm relative">
      <div className="flex gap-1 mb-4 mt-1">
        {/* Sirf 'letter' aur 'image' tabs render ho rahe hain */}
        {["letter", "image"].map((tab) => (
          <button
            key={tab}
            className={`w-[120px] h-[47px] py-2 ${
              activeTab === tab
                ? "bg-gray-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === "letter" && (
        <LetterTab
          letters={letters}
          setLetters={setLetters}
          font={letterFont}
          setFont={setLetterFont}
          letterStyle={letterStyle}
          setLetterStyle={setLetterStyle}
          textColor={textColor}
          setTextColor={setTextColor}
          borderColor={borderColor}
          setBorderColor={setBorderColor}
          activeColorPicker={activeColorPicker}
          setActiveColorPicker={setActiveColorPicker}
        />
      )}

      {activeTab === "image" && (
        <ImageTab
          uploadedImage={uploadedImage}
          setUploadedImage={setUploadedImage}
        />
      )}
      <div className="flex justify-end space-x-3 mt-4 pl-5">
        <button className="bg-[#3bb18f] text-white text-[12px] font-bold leading-[51px] min-w-[160px] uppercase text-center hover:bg-black transition">
          Save
        </button>
        <button className="bg-[#ff8c8c] text-white text-[12px] font-bold leading-[51px] min-w-[160px] uppercase text-center hover:bg-black transition">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LeftPocketSub;
