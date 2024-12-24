import React from "react";
import HeroSection from "../components/Home/HeroSection";
import InnovationSection from "../components/Home/InnovationSection";
import WhyUsSection from "../components/Home/WhyUsSection";
import ResearchAreas from "../components/Home/ResearchAreas";
import SolutionsSection from "../components/Home/SolutionsSection";
import ObjectivesSection from "../components/Home/ObjectivesSection";
import GallerySection from "../components/Home/GallerySection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <InnovationSection />
      <WhyUsSection />
      <ResearchAreas />
      <SolutionsSection />
      <ObjectivesSection />
      <GallerySection />
    </div>
  );
};

export default Home;
