import Body from "../svg/Body";
import FrontSleeves from "../svg/FrontSleeves";
import FrontCollar from "../svg/FrontCollar";
import FrontLine from "../svg/FrontLine";
import FrontLines from "../svg/FrontLines";
import FrontPockets from "../svg/FrontPockets";
import FrontSnaps from "./Snap ";
import BomerFrontZip from "../svg/BomerFrontZip";
import Zip from "../svg/Zip";
import HoodieFrontCollarBg from "../svg/HoodieFrontCollarBg";
import HoodieFrontCollar from "../svg/HoodieFrontCollar";
import ZipperedFrontCollar from "../svg/ZipperedFrontCollar";
import FrontLining from "./FrontLining";

const AllSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 800"
      width="400"
      height="600"
    >
      <Body />
      <FrontSleeves />
      <FrontLine />
      <FrontLines />
      <FrontCollar />
      <FrontLining />
      <FrontPockets />
      <FrontSnaps />
      {/* aur jo bhi chahiye */}
    </svg>
  );
};

export default AllSvg;
