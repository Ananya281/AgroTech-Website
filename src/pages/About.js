import React from "react";
import HeroSection from "../components/About/HeroSection";
import RunningText from "../components/About/RunningText";
import OurMission from "../components/About/OurMission";
import { TimelineDemo } from "../components/About/timeline";
import "../App.css";

const About = () => {
  return (
    <div className="fade-in">
      <HeroSection />
      <RunningText />
      <OurMission />
      <TimelineDemo/>
    </div>
  );
};

export default About;
