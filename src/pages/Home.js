import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import HeroSection from "../components/Home/HeroSection";
import InnovationSection from "../components/Home/InnovationSection";
import WhyUsSection from "../components/Home/WhyUsSection";
import ResearchAreas from "../components/Home/ResearchAreas";
import SolutionsSection from "../components/Home/SolutionsSection";
import GallerySection from "../components/Home/GallerySection";
import "../App.css";
import { FocusCardsDemo } from "../components/Home/gallery";

const Home = () => {
  return (
    <ParallaxProvider>
      <div className="fade-in overflow-hidden">
        <Parallax speed={-5} className="w-full my-0">
          <HeroSection />
        </Parallax>
        <Parallax speed={15} className="bg-gray-50 w-full my-0 py-4">
          <InnovationSection />
        </Parallax>
        <Parallax speed={-5} className="w-full my-0 py-4">
          <WhyUsSection />
        </Parallax>
        <Parallax speed={20} className="w-full my-0 py-4">
          <ResearchAreas />
        </Parallax>
        <Parallax speed={-5} className="w-full my-0 py-4">
          <SolutionsSection />
        </Parallax>
        <Parallax speed={15} className="w-full my-0 py-4">
{/*           <GallerySection />
 */} 
<h3
  className="text-lg md:text-xl font-semibold text-gray-500 uppercase tracking-wide mb-4 text-center"
  style={{ fontFamily: "'Merriweather', serif" }}
>
  OUR GALLERY
</h3>
        <FocusCardsDemo/>
        </Parallax>

      </div>
    </ParallaxProvider>
  );
};

export default Home;
