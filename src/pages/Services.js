import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import HeroSection from "../components/Services/HeroSection";
import AssistanceSection from "../components/Services/AssistanceSection";
import ServicesCards from "../components/Services/ServicesCards";
import OurServices from "../components/Services/OurServices"; // Importing the new component
import "../App.css"; // Assuming fade-in styles are in App.css

const Services = () => {
  return (
    <ParallaxProvider>
      <div className="fade-in">
        <Parallax speed={-15}>
          <HeroSection />
        </Parallax>
        <Parallax speed={15} className="bg-gray-50">
          <AssistanceSection />
        </Parallax>
        {/* <Parallax speed={-10}>
          <ServicesCards />
        </Parallax> */}
        {/* Adding OurServices component below ServicesCards */}
        <Parallax speed={5}>
          <OurServices />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default Services;
