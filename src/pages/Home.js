import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import HeroSection from "../components/Home/HeroSection";
import InnovationSection from "../components/Home/InnovationSection";
import WhyUsSection from "../components/Home/WhyUsSection";
import ResearchAreas from "../components/Home/ResearchAreas";
import SolutionsSection from "../components/Home/SolutionsSection";
import GallerySection from "../components/Home/GallerySection";

const Home = () => {
  return (
    <ParallaxProvider>
      <div>
        <Parallax speed={-15}>
          <HeroSection />
        </Parallax>
        <Parallax speed={15} className="bg-gray-50">
          <InnovationSection />
        </Parallax>
        <Parallax speed={-10}>
          <WhyUsSection />
        </Parallax>
        <Parallax speed={15}>
          <ResearchAreas />
        </Parallax>
        <Parallax speed={-5}>
          <SolutionsSection />
        </Parallax>
        <Parallax speed={15}>
          <GallerySection />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
