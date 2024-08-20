import "./App.css";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import NavSection from "./components/NavSection";
import NewHeadline from "./components/NewHeadline";

function App() {
  return (
    <>
      <NavSection />
      <HeaderSection />
      <hr className="hr container"></hr>
      <NewHeadline />
      <HeroSection />
    </>
  );
}

export default App;
