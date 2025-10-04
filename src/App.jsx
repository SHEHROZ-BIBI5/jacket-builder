import React from "react";
import Home from "./components/Home";
import PatchesEmbroideries from "./components/AllRightPart/PatchesEmbroideries";
import Zip from "./svg/Zip";
import BomerSleeveZip from "./svg/BomerSleeveZip";
import FrontLine from "./svg/FrontLine";
import FrontLines from "./svg/FrontLines";
import FrontLining from "./svg/FrontLining";
import FrontKnit from "./svg/FrontKnit";
import Body from "./svg/Body";
import HoodieFrontCollar from "./svg/HoodieFrontCollar";
import ZipperedFrontCollar from "./svg/ZipperedFrontCollar";
import LeftHood from "./svg/Left/LeftHood";
import BomberLeft from "./svg/Left/BomerLeft";
import BomerFrontZip from "./svg/BomerFrontZip";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Home />
      </main>
      {/* Footer always at bottom */}
      {/* <div className="mb-0"> <Footer /> </div> */}
    </div>
  );
}

export default App;
