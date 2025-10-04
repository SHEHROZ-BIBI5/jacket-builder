import React, { useState, useEffect } from "react";
import NameTab from "../NameTab";
import ImageTab from "../ImageTab";

const BackBottomSub = ({ data = {}, setData = () => {} }) => {
  const [activeTab, setActiveTab] = useState(data.activeTab || "name");
  const [name, setName] = useState(data.name || "");
  const [nameFont, setNameFont] = useState(data.nameFont || "Graduate");
  const [uploadedImage, setUploadedImage] = useState(data.image || null);
  const [textColor, setTextColor] = useState(data.textColor || "#000000");
  const [activeColorPicker, setActiveColorPicker] = useState(null);

  const updateBackBottomData = (updates) => {
    setData({
      ...data,
      ...updates,
      activeTab: activeTab,
    });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    updateBackBottomData({ activeTab: tab });
  };

  useEffect(() => {
    setName(data.name || "");
    setNameFont(data.nameFont || "Graduate");
    setUploadedImage(data.image || null);
    setTextColor(data.textColor || "#000000");
  }, [data]);

  return (
    <div className="p-2 text-sm relative">
      <div className="flex gap-1 mb-4 mt-1">
        {["name", "image"].map((tab) => (
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
            updateBackBottomData({ name: val });
          }}
          font={nameFont}
          setFont={(val) => {
            setNameFont(val);
            updateBackBottomData({ nameFont: val });
          }}
          textColor={textColor}
          setTextColor={(val) => {
            setTextColor(val);
            updateBackBottomData({ textColor: val });
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
            updateBackBottomData({ image: val });
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

export default BackBottomSub;
