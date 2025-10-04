import React, { useState, useEffect } from "react";
import Image1 from "./Image1";
import RightPart from "./RightPart";

const Home = () => {
  const [sleeveStyle, setSleeveStyle] = useState("set-in");
  const [showZip, setShowZip] = useState(false);
  const [showBomer, setShowBomer] = useState(true);
  const [showSnaps, setShowSnaps] = useState(true);
  const [activeView, setActiveView] = useState("front");
  const [selectedStyle, setSelectedStyle] = useState("varsity");
  const [knitStyle, setKnitStyle] = useState("plain");
  const [jacketStyle, setJacketStyle] = useState("varsity"); // ya "bomber"
  //  const [selectedStyle, setSelectedStyle] = useState("");

  const [colors, setColors] = useState({
    body: "#F3F5F8",
    sleeves: "#F3F5F8",
    collar: "#F3F5F8",
    pockets: "#F3F5F8",
    snaps: "transparent",
    zip: "#D3D3D3", // 👈 Light Gray default
    knitBase: "#F3F5F8",
    knitLine: "#868482",
    hoodIn: "#F3F5F8",
    hoodOut: "#F3F5F8",
  });

  const [embroidery, setEmbroidery] = useState({
    rightChest: {
      name: "",
      font: "Ballpark",
      letters: "",
      letterStyle: "straight",
      image: null,
    },
    leftChest: {
      name: "",
      font: "",
      letters: "",
      letterStyle: "straight",
      image: null,
    },
    rightSleeve: {
      name: "",
      font: "",
      letters: "",
      letterStyle: "straight",
      image: null,
    },
    leftSleeve: {
      name: "",
      font: "",
      letters: "",
      letterStyle: "straight",
      image: null,
    },
    rightPocket: {
      name: "",
      font: "",
      letters: "",
      letterStyle: "straight",
      image: null,
    },
    leftPocket: {
      name: "",
      font: "",
      letters: "",
      letterStyle: "straight",
      image: null,
    },
    backTop: {
      name: "",
      font: "",
      letters: "",
      letterStyle: "straight",
      image: null,
    },
    backMiddle: {
      name: "",
      font: "",
      letters: "",
      letterStyle: "straight",
      image: null,
    },
    backBottom: {
      name: "",
      font: "",
      letters: "",
      letterStyle: "straight",
      image: null,
    },
  });

  const [sleevePocketOption, setSleevePocketOption] =
    useState("with-sleeve-pocket");

  const handleColorChange = (part, color) => {
    setColors((prev) => ({ ...prev, [part]: color }));
  };

  useEffect(() => {
    if (selectedStyle === "bomber") {
      setShowZip(true);
      setShowSnaps(false);
    } else if (selectedStyle === "varsity") {
      setShowZip(false);
      setShowSnaps(true);
    } else if (selectedStyle === "varsity_hoodie") {
      setShowZip(false);
      setShowSnaps(true);
    } else if (selectedStyle === "zippered_hood") {
      setShowZip(false);
      setShowSnaps(true);
    } else {
      setShowZip(false);
      setShowSnaps(false);
    }
  }, [selectedStyle]);

  return (
    <div className="builder-tool-wrap flex flex-col lg:flex-row max-w-[1100px] mx-auto mt-[40px] lg:mt-[80px] gap-6 px-4">
      {/* Left: Jacket Preview */}
      <div className="flex-1 flex flex-col items-center">
        <Image1
          activeView={activeView}
          setActiveView={setActiveView}
          selectedStyle={selectedStyle}
          colors={colors}
          sleeveStyle={sleeveStyle}
          knitStyle={knitStyle}
          showSnaps={showSnaps}
          showZip={showZip}
          sleevePocketOption={sleevePocketOption}
          embroidery={embroidery}
        />
        <div className="special_instructions_wrap mt-0 w-full flex justify-center">
          <textarea
            placeholder="WRITE SPECIAL INSTRUCTIONS FOR THIS JACKET"
            className="h-26 p-2 w-[700px] border bg-slate-200 "
          ></textarea>
        </div>
      </div>

      {/* Right: Controls */}
      <div className="w-full lg:w-[600px] ">
        <RightPart
          jacketStyle={jacketStyle}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          showZip={showZip}
          setShowZip={setShowZip}
          showSnaps={showSnaps}
          setShowSnaps={setShowSnaps}
          colors={colors}
          handleColorChange={handleColorChange}
          activeView={activeView}
          setActiveView={setActiveView}
          sleeveStyle={sleeveStyle}
          setSleeveStyle={setSleeveStyle}
          knitStyle={knitStyle}
          setKnitStyle={setKnitStyle}
          sleevePocketOption={sleevePocketOption}
          setSleevePocketOption={setSleevePocketOption}
          embroidery={embroidery}
          setEmbroidery={setEmbroidery}
        />
      </div>
    </div>
  );
};

export default Home;
