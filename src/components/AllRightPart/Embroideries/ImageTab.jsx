import React, { useRef } from "react";
import tik from "../../../assets/tik.png";
import lock from "../../../assets/lock.png";

const ImageTab = ({ uploadedImage, setUploadedImage }) => {
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
  };

  return (
    <div className="space-y-3 mt-5">
      {!uploadedImage ? (
        <>
          <button
            onClick={() => fileInputRef.current.click()}
            className="w-[320px] h-[50px] px-4 py-2 bg-[#002766] text-white hover:animate-pulse transition"
          >
            Upload Image
          </button>
          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
          <p className="text-sm text-gray-500">
            Upload JPG / PNG, Max Size 2MB
          </p>
        </>
      ) : (
        <>
          <div className="relative inline-block border border-gray-300 p-2">
            <button
              onClick={removeImage}
              className="absolute top-1 right-1 text-xs px-2 py-1 bg-red-500 text-white uppercase"
            >
              remove
            </button>
            <img
              src={uploadedImage}
              alt="Preview"
              className="max-w-full h-auto"
            />
          </div>

          <div className="flex justify-between gap-2 mt-2">
            <button className="flex items-center gap-2 bg-[#545c67] text-white h-[51px] min-w-[165px] px-3 text-[12px] font-bold uppercase text-center">
              <img src={tik} alt="tik" className="w-5 h-5" />
              <span>Embroidery</span>
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-[#545c67] h-[51px] min-w-[165px] px-3 text-[12px] font-bold uppercase text-center">
              <img src={lock} alt="lock" className="w-4" />
              <span>Patch</span>
            </button>
          </div>
          <h1 className="text-[#3b86b1] text-[10px] leading-none uppercase mt-2">
            Note: We may change the size/style for better look.
          </h1>
        </>
      )}
    </div>
  );
};

export default ImageTab;
