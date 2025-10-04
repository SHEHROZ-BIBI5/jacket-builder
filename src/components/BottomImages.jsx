import React from "react";
import front from "../assets/front.png";
import right from "../assets/right.png";
import left from "../assets/Left.png";
import back from "../assets/Back.png";

const BottomImages = ({ activeView, setActiveView }) => {
  // Common responsive classes for thumbnails
  const renderThumbnail = (view) => {
    const commonClasses = "h-6 sm:h-8 md:h-10 lg:h-12";
    // Mobile: چھوٹا، Tablet: درمیانہ، Laptop/Desktop: بڑا

    switch (view) {
      case "front":
        return <img src={front} alt="front" className={commonClasses} />;
      case "back":
        return <img src={back} alt="back" className={commonClasses} />;
      case "left":
        return <img src={left} alt="left" className={commonClasses} />;
      case "right":
        return <img src={right} alt="right" className={commonClasses} />;
      default:
        return null;
    }
  };

  const getButtonClass = (viewName) => {
    const baseClasses = "p-2 transition-all";
    const activeClasses = "bg-white border-b-4 border-yellow-500";
    const inactiveClasses = "hover:bg-gray-100";

    return `${baseClasses} ${
      activeView === viewName ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <div className="bottom-images-container">
      <div className="view-angle-buttons flex items-center bg-gray-50 gap-2 sm:gap-3 lg:gap-4 justify-center mt-3 p-1">
        <button
          onClick={() => setActiveView("front")}
          className={getButtonClass("front")}
        >
          {renderThumbnail("front")}
        </button>
        <button
          onClick={() => setActiveView("back")}
          className={getButtonClass("back")}
        >
          {renderThumbnail("back")}
        </button>
        <button
          onClick={() => setActiveView("left")}
          className={getButtonClass("left")}
        >
          {renderThumbnail("left")}
        </button>
        <button
          onClick={() => setActiveView("right")}
          className={getButtonClass("right")}
        >
          {renderThumbnail("right")}
        </button>
      </div>
    </div>
  );
};

export default BottomImages;
