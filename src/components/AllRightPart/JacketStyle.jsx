import React from "react";
import tik from "../../assets/tik.png";

const JacketStyle = ({
  selectedStyle,
  setSelectedStyle,
  isOpen,
  toggleDropdown,
}) => {
  const options = [
    { value: "varsity", label: "Varsity Jacket" },
    { value: "bomber", label: "Bomber Jacket" },
    { value: "varsity_hoodie", label: "Varsity Hoodie" },
    { value: "zippered_hood", label: "Zippered Hood" },
  ];

  return (
    <div className="font-inter color_selection">
      <div className="overflow-hidden w-84 mb-0">
        {/* Header */}
        <div
          className={`${
            isOpen ? "p-2" : "p-4"
          } cursor-pointer flex justify-between items-center transition-colors duration-200 
    ${isOpen ? "" : "border-b border-gray-200"}`}
          onClick={toggleDropdown}
        >
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            01 - Jacket Style
          </span>
          <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 text-sm">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        {/* Content */}
        <div
          className={`px-1 transition-all duration-300 ease-in-out  ${
            isOpen
              ? "py-4 max-h-96 opacity-100"
              : "py-0 max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="grid grid-cols-2 gap-2  ">
            {options.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center h-[45px]  w-full cursor-pointer transition-colors duration-200  
      bg-no-repeat bg-[13px_-67px] min-h-[21px] p-[13px_12px_15px_12px]
      ${
        selectedStyle === opt.value
          ? "bg-gray-500 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
              >
                <input
                  type="radio"
                  name="product_type"
                  value={opt.value}
                  checked={selectedStyle === opt.value}
                  onChange={() => setSelectedStyle(opt.value)}
                  className="hidden "
                />
                {selectedStyle === opt.value ? (
                  <img
                    src={tik}
                    alt="tik"
                    className="w-5 h-5 text-white rounded-lg mr-2"
                  />
                ) : (
                  <div className="w-5 h-5  bg-slate-100 border-2 border-gray-300 rounded-full mr-2"></div>
                )}
                <span className="text-sm">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JacketStyle;
