import LeftSideNews from "./NewsComponents/LeftSideNews";
import MainNewsComp from "./NewsComponents/MainNewsComp";
import RightSideNewsComp from "./NewsComponents/RightSideNewsComp";

function HeroSection() {
  return (
    <div className="container hero_section">
      <LeftSideNews />
      <MainNewsComp />
      <RightSideNewsComp />
    </div>
  );
}

export default HeroSection;
