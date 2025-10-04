import React from "react";
import Body from "../svg/Body";
import FrontSleeves from "../svg/FrontSleeves";
import SecondSleeves from "../svg/SecondSleeves";
import FrontCollar from "../svg/FrontCollar";
import FrontLine from "../svg/FrontLine";
import FrontPockets from "../svg/FrontPockets";
import LeftPocket from "../svg/Left/LeftPocket";
import RightPocket from "../svg/Right/RightPocket";
import FrontKnit from "../svg/FrontKnit";
import FrontLines from "../svg/FrontLines";
import FrontLining from "../svg/FrontLining";
import BackSide from "../svg/BackSide";
import LeftSide from "../svg/LeftSide";
import RightSide from "../svg/RightSide";
import HoodieFrontCollar from "../svg/HoodieFrontCollar";
import ZipperedFrontCollar from "../svg/ZipperedFrontCollar";
import BottomImages from "../components/BottomImages";
import Zip from "../svg/Zip";

// Bomber
import BomerFrontZip from "../svg/BomerFrontZip";
import BomberBack from "../svg/Back/BomerBack";
import BomerSleeveZip from "../svg/BomerSleeveZip";
import BomerLeft from "../svg/Left/BomerLeft";

// Hoodie
import HoodCollarBack from "../svg/Back/HoodCollarBack";
import LeftHood from "../svg/Left/LeftHood";
import RightHood from "../svg/Right/RightHood";
import HoodieFrontCollarBg from "../svg/HoodieFrontCollarBg"; // ✅ add this

// Zippered
import ZipperedHoodBack from "../svg/Back/ZipperedHoodBack";
import ZipperedHoodLeft from "../svg/Left/ZipperedHoodLeft";
import ZipperedHoodRight from "../svg/Right/ZipperedHoodRight";

// Raglan Sleeves
import RaglanSleevesLeft from "../svg/Left/RaglanSleevesLeft";
import RaglanSleevesRight from "../svg/Right/RaglanSleevesRight";
import RaglanSleevesBack from "../svg/Back/RaglanSleevesBack";

// Knit sides
import KnitBack from "../svg/Back/KnitBack";
import KnitLeft from "../svg/Left/KnitLeft";
import KnitRight from "../svg/Right/KnitRight";

// Default collars & sleeves
import DefaultCollarLeft from "../svg/Left/DefaultCollarLeft";
import DefaultCollarRight from "../svg/Right/DefaultCollarRight";
import DefaultCollarBack from "../svg/Back/DefaultCollarBack";
import DefaultSleevesBack from "../svg/Back/DefaultSleevesBack";
import DefaultSleevesRight from "../svg/Right/DefaultSleevesRight";
import DefaultSleevesLeft from "../svg/Left/DefaultSleevesLeft";
import DefaultKnitBaceBack from "../svg/Back/DefaultKnitBaceBack";
import DefaultKnitBaceLeft from "../svg/Left/DefaultKnitBaceLeft";
import DefaultKnitBaceRight from "../svg/Right/DefaultKnitBaceRight";

// ✅ Import embroidery components
import RightChestEmb from "../emb/RightChestEmb";
import LeftChestEmb from "../emb/LeftChestEmb";
import RightSleeveEmb from "../emb/RightSleeveEmb";
import LeftSleeveEmb from "../emb/LeftSleeveEmb";
import RightPocketEmb from "../emb/RightPocketEmb";
import LeftPocketEmb from "../emb/LeftPocketEmb";
import BackTopEmb from "../emb/BackTopEmb";
import BackMiddleEmb from "../emb/BackMiddleEmb";
import BackBottomEmb from "../emb/BackBottomEmb";

const fontMapping = {
  Ballpark: "Pacifico",
  Baseball: "Bangers",
  Metroscript: "Dancing Script",
  Decorative: "Playfair Display",
  Superstar: "Great Vibes",
  Varsity: "Graduate",
};

const Image1 = ({
  activeView,
  setActiveView,
  selectedStyle,
  colors,
  sleeveStyle,
  knitStyle,
  showSnaps,
  showZip,
  embroidery,
}) => {
  // 👇 yahan define karna hai
  const sleevesColor = colors.sleeves; // ✅ always sleeves only

  const getSleevesComponent = (view) => {
    if (sleeveStyle === "raglan") {
      if (view === "left") return <RaglanSleevesLeft color={sleevesColor} />;
      if (view === "right") return <RaglanSleevesRight color={sleevesColor} />;
      if (view === "back") return <RaglanSleevesBack color={sleevesColor} />;
    } else {
      if (view === "left") return <DefaultSleevesLeft color={sleevesColor} />;
      if (view === "right") return <DefaultSleevesRight color={sleevesColor} />;
      if (view === "back") return <DefaultSleevesBack color={sleevesColor} />;
    }
    return null;
  };

  const getCollarComponent = (view) => {
    if (view === "front") {
      if (selectedStyle === "varsity_hoodie") {
        return (
          <>
            <HoodieFrontCollarBg color={colors.hoodIn} />{" "}
            <HoodieFrontCollar color={colors.hoodOut} />
          </>
        );
      } else if (selectedStyle === "zippered_hood") {
        return <ZipperedFrontCollar color={colors.hoodIn} />;
      } else {
        return <FrontCollar color={colors.knitBase} />;
      }
    }
    if (view === "left") {
      return !["varsity_hoodie", "zippered_hood"].includes(selectedStyle) ? (
        <DefaultCollarLeft color={colors.knitBase} />
      ) : null;
    }
    if (view === "right") {
      return !["varsity_hoodie", "zippered_hood"].includes(selectedStyle) ? (
        <DefaultCollarRight color={colors.knitBase} />
      ) : null;
    }
    // if (view === "back") {
    //   return !["varsity_hoodie", "zippered_hood"].includes(selectedStyle) ? (
    //     <DefaultCollarBack color={colors.knitBase} />
    //   ) : null;
    // }

    if (view === "back") {
      if (!["varsity_hoodie", "zippered_hood"].includes(selectedStyle)) {
        return <DefaultCollarBack color={colors.knitBase} />;
      }
      return null; // hoodie/zipped کے لئے صرف KnitBase back الگ function سے آئے گا
    }

    return null;
  };

  const getKnitBaseComponent = (view) => {
    if (view === "back") {
      return <DefaultKnitBaceBack color={colors.knitBase} />;
    }
    if (view === "front") return <FrontKnit color={colors.knitBase} />;
    if (view === "left")
      return (
        <DefaultKnitBaceLeft colors={{ ...colors, knit: colors.knitBase }} />
      );
    if (view === "right")
      return (
        <DefaultKnitBaceRight colors={{ ...colors, knit: colors.knitBase }} />
      );
    return null;
  };
  const getKnitLineComponent = (view) => {
    if (knitStyle !== "two_lines") return null;
    if (view === "left") return <KnitLeft color={colors.knitLine} />;
    if (view === "right") return <KnitRight color={colors.knitLine} />;
    if (view === "back") return <KnitBack color={colors.knitLine} />;
    if (view === "front") return <FrontLines color={colors.knitLine} />;
    return null;
  };

  const renderEmbroidery = () => {
    switch (activeView) {
      case "front":
        return (
          <>
            <LeftChestEmb embroidery={embroidery} />
            <RightChestEmb embroidery={embroidery} />
            <LeftPocketEmb embroidery={embroidery} />
            <RightPocketEmb embroidery={embroidery} />
          </>
        );
      case "left":
        return <LeftSleeveEmb embroidery={embroidery} />;
      case "right":
        return <RightSleeveEmb embroidery={embroidery} />;
      case "back":
        return (
          <>
            <BackTopEmb embroidery={embroidery} />
            <BackMiddleEmb embroidery={embroidery} />
            <BackBottomEmb embroidery={embroidery} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center p-1 sm:p-3 w-full max-w-[800px] font-sans">
      <div className="w-full max-w-[600px] flex justify-center p-2 sm:p-6">
        <svg
          viewBox="0 0 600 600"
          className="w-full max-w-[220px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[520px] xl:max-w-[630px] h-auto"
        >
          {/* FRONT */}
          {activeView === "front" && (
            <g>
              {getKnitBaseComponent("front")}
              {getKnitLineComponent("front")}
              <Body color={colors.body} embroidery={embroidery} />

              {/* 👇 Bomber case */}
              {selectedStyle === "bomber" ? (
                <>
                  <FrontSleeves color={sleevesColor} />
                  {/* Bomber sleeve zip with zip color */}
                  <BomerSleeveZip color={colors.zip} />
                </>
              ) : sleeveStyle === "set-in" ? (
                <FrontSleeves color={sleevesColor} />
              ) : sleeveStyle === "raglan" ? (
                <SecondSleeves color={sleevesColor} />
              ) : null}

              <FrontLining />
              {getCollarComponent("front")}
              {selectedStyle === "bomber" && (
                <BomerFrontZip color={colors.zip} />
              )}
              <FrontPockets color={colors.pockets} />
              {showZip && <Zip color={colors.zip} />}
            </g>
          )}

          {/* Closure */}
          {showZip && <Zip color={colors.zip} />}
          {showSnaps && (
            <>
              <FrontLine />
              <g id="snaps">
                {[
                  144.07, 225.386, 306.701, 388.017, 469.333, 490.727, 509.148,
                ].map((cy, i) => (
                  <circle
                    key={i}
                    cx="302.251"
                    cy={cy}
                    r="5.992"
                    style={{ stroke: "#c6cbd2", fill: colors.snaps || "none" }}
                  />
                ))}
              </g>
            </>
          )}

          {/* LEFT */}
          {/* {activeView === "left" && (
            <>
              {getCollarComponent("left")}
              <LeftSide colors={colors} />
              {getKnitBaseComponent("left")}
              {getSleevesComponent("left")}
              {getKnitLineComponent("left")}
              {selectedStyle === "varsity_hoodie" && (
                <LeftHood color={colors.hoodOut} />
              )}
              {selectedStyle === "zippered_hood" && (
                <ZipperedHoodLeft color={colors.hoodOut} />
              )}
              {selectedStyle === "bomber" && <BomerLeft />}
              <LeftPocket color={colors.pockets} />
            </>
          )} */}

          {activeView === "left" && (
            <>
              {getCollarComponent("left")}
              <LeftSide colors={colors} />
              {getKnitBaseComponent("left")}
              {getSleevesComponent("left")}
              {selectedStyle === "bomber" && <BomerLeft color={colors.zip} />}
              {getKnitLineComponent("left")}
              {selectedStyle === "varsity_hoodie" && (
                <LeftHood color={colors.hoodOut} />
              )}
              {selectedStyle === "zippered_hood" && (
                <ZipperedHoodLeft color={colors.hoodOut} />
              )}
              <LeftPocket color={colors.pockets} />
            </>
          )}

          {/* RIGHT */}
          {activeView === "right" && (
            <>
              {getCollarComponent("right")}
              <RightSide colors={colors} />
              {getKnitBaseComponent("right")}
              {getSleevesComponent("right")}
              {getKnitLineComponent("right")}
              {selectedStyle === "varsity_hoodie" && (
                <RightHood color={colors.hoodOut} />
              )}
              {selectedStyle === "zippered_hood" && (
                <ZipperedHoodRight color={colors.hoodOut} />
              )}
              <RightPocket color={colors.pockets} />
            </>
          )}

          {/* BACK */}
          {activeView === "back" && (
            <>
              {getCollarComponent("back")}
              <BackSide colors={colors} />
              {getSleevesComponent("back")}
              {getKnitBaseComponent("back")}
              {getKnitLineComponent("back")}
              {selectedStyle === "varsity_hoodie" && (
                <HoodCollarBack color={colors.hoodOut} />
              )}
              {selectedStyle === "zippered_hood" && (
                <ZipperedHoodBack color={colors.hoodIn} />
              )}

              {selectedStyle === "bomber" && <BomberBack color={colors.zip} />}
            </>
          )}

          {/* ✅ Render all embroidery/patches components based on active view */}
          {renderEmbroidery()}
        </svg>
      </div>
      <BottomImages activeView={activeView} setActiveView={setActiveView} />
    </div>
  );
};

export default Image1;
