import React from "react";

const SelectSize = ({ isOpen, toggleDropdown }) => {
  const sizes = [
    "XXS",
    "XS",
    "S",
    "M",
    "MT",
    "L",
    "LT",
    "XL",
    "XLT",
    "2XL",
    "2XLT",
    "3XL",
    "4XL",
    "5XL",
    "6XL",
  ];

  return (
    <div className="font-inter color_selection">
      <div className="overflow-hidden w-full mb-6 border-b border-gray-200">
        {/* Header */}
        <div
          className={`${
            isOpen ? "p-2" : "p-4"
          } cursor-pointer flex justify-between items-center transition-colors duration-200 
  ${isOpen ? "" : "border-b border-gray-200"}`}
          onClick={toggleDropdown}
        >
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            05 - Jacket Size
          </span>
          <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 text-sm">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        {/* Content */}
        <div
          className={`px-4 transition-all duration-300 ease-in-out ${
            isOpen
              ? "py-3 max-h-full opacity-100"
              : "py-0 max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="select-control-wrap">
            <select
              className="
                w-full p-2
                border border-gray-300 
                focus:outline-none focus:ring-1 focus:ring-gray-400
                text-sm
              "
            >
              <option value="">Select Size</option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSize;
