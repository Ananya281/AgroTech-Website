import React from "react";
import HeroSection from "../components/About/HeroSection";
import RunningText from "../components/About/RunningText";
import OurMission from "../components/About/OurMission";
import OurCards from "../components/About/OurCards";
import "../App.css"; // Assuming fade-in styles are in App.css

const About = () => {
  return (
    <div className="fade-in">
      <HeroSection />
      <RunningText />
      <OurMission />
      <OurCards />
    </div>
  );
};

export default About;
