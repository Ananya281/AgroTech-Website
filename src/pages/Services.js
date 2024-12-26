import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import HeroSection from "../components/Services/HeroSection";
import AssistanceSection from "../components/Services/AssistanceSection";
import ServicesCards from "../components/Services/ServicesCards";

const Services = () => {
  return (
    <ParallaxProvider>
      <div>
        <Parallax speed={-15}>
          <HeroSection />
        </Parallax>
        <Parallax speed={15} className="bg-gray-50">
          <AssistanceSection />
        </Parallax>
        <Parallax speed={-10}>
          <ServicesCards />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default Services;
