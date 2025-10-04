import React from "react";

const JacketPrice = () => {
  return (
    <div>
      {/* Correctly formatted style tag with a class selector */}
      <style>{`
        .price-container {
          font-family: Lato, sans-serif;
          line-height: 1.5;
          box-sizing: border-box; /* Fixed typo: 'inherit' -> 'border-box' */
          text-align: center;
          background-color: #002766;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          padding: 20px 10px;
        }
      `}</style>

      {/* Added class to apply styles */}
      <div className="price-container w-[345px] ">
        <div className="jacket-price-wrap text-center">
          <span className="jacket-price-label text-uppercase">
            Jacket Price:
          </span>
          <span id="jacket-price" className="jacket-price">
            $0.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default JacketPrice;
