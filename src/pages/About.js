import React from "react";
import HeroSection from "../components/About/HeroSection";
import RunningText from "../components/About/RunningText";
import OurMission from "../components/About/OurMission";
import OurCards from "../components/About/OurCards";

const About = () => {
  return (
    <div>
      <HeroSection />
      <RunningText />
      <OurMission />
      <OurCards/>
    </div>
  );
};

export default About;
