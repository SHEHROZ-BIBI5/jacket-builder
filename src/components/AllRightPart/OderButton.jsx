import React from "react";

const OderButton = () => {
  return (
    <div className="w-full m-w-[340px] mt-10 sm:mt-16 md:mt-24 lg:mt-64">
      <a
        id="place-order"
        href="#"
        className="
          block w-full text-center
          bg-[#e1b433] text-white font-bold uppercase
          py-4 px-6 text-base 
          transition-colors duration-300
          hover:bg-blue-950
        "
      >
        Place Order
      </a>
    </div>
  );
};

export default OderButton;
