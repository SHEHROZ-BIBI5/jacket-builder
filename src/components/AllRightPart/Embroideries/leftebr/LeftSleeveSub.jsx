import React, { useState, useEffect } from "react";
import NameTab from "../NameTab";
import LetterTab from "../LetterTab";
import ImageTab from "../ImageTab";

const LeftSleeveSub = ({ data = {}, setData = () => {} }) => {
  const [activeTab, setActiveTab] = useState(data.activeTab || "name");
  const [name, setName] = useState(data.name || "");
  const [nameFont, setNameFont] = useState(data.nameFont || "Graduate");
  const [letters, setLetters] = useState(data.letters || "");
  const [letterStyle, setLetterStyle] = useState(
    data.letterStyle || "straight"
  );
  const [letterFont, setLetterFont] = useState(data.letterFont || "Graduate");
  const [uploadedImage, setUploadedImage] = useState(data.image || null);
  const [textColor, setTextColor] = useState(data.textColor || "#000000");
  const [borderColor, setBorderColor] = useState(data.borderColor || "#ffffff");
  const [activeColorPicker, setActiveColorPicker] = useState(null);

  const updateLeftSleeveData = (updates) => {
    setData({
      ...data,
      ...updates,
      activeTab: activeTab,
    });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    updateLeftSleeveData({ activeTab: tab });
  };

  useEffect(() => {
    setName(data.name || "");
    setNameFont(data.nameFont || "Graduate");
    setLetters(data.letters || "");
    setLetterStyle(data.letterStyle || "straight");
    setLetterFont(data.letterFont || "Graduate");
    setUploadedImage(data.image || null);
    setTextColor(data.textColor || "#000000");
    setBorderColor(data.borderColor || "#ffffff");
  }, [data]);

  return (
    <div className="p-2 text-sm relative">
      <div className="flex gap-1 mb-4 mt-1">
        {["name", "letter", "image"].map((tab) => (
          <button
            key={tab}
            className={`w-[120px] h-[47px] py-2 ${
              activeTab === tab
                ? "bg-gray-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === "name" && (
        <NameTab
          name={name}
          setName={(val) => {
            setName(val);
            updateLeftSleeveData({ name: val });
          }}
          font={nameFont}
          setFont={(val) => {
            setNameFont(val);
            updateLeftSleeveData({ nameFont: val });
          }}
          textColor={textColor}
          setTextColor={(val) => {
            setTextColor(val);
            updateLeftSleeveData({ textColor: val });
          }}
          activeColorPicker={activeColorPicker}
          setActiveColorPicker={setActiveColorPicker}
        />
      )}

      {activeTab === "letter" && (
        <LetterTab
          letters={letters}
          setLetters={(val) => {
            setLetters(val);
            updateLeftSleeveData({ letters: val });
          }}
          font={letterFont}
          setFont={(val) => {
            setLetterFont(val);
            updateLeftSleeveData({ letterFont: val });
          }}
          letterStyle={letterStyle}
          setLetterStyle={(val) => {
            setLetterStyle(val);
            updateLeftSleeveData({ letterStyle: val });
          }}
          textColor={textColor}
          setTextColor={(val) => {
            setTextColor(val);
            updateLeftSleeveData({ textColor: val });
          }}
          borderColor={borderColor}
          setBorderColor={(val) => {
            setBorderColor(val);
            updateLeftSleeveData({ borderColor: val });
          }}
          activeColorPicker={activeColorPicker}
          setActiveColorPicker={setActiveColorPicker}
        />
      )}

      {activeTab === "image" && (
        <ImageTab
          uploadedImage={uploadedImage}
          setUploadedImage={(val) => {
            setUploadedImage(val);
            updateLeftSleeveData({ image: val });
          }}
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

export default LeftSleeveSub;
