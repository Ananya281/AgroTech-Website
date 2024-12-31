import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax"; // Import Parallax components
import HeroSection from "../components/Contact/HeroSection"; // Import HeroSection component
import ContactFormSection from "../components/Contact/ContactFormSection"; // Import ContactFormSection component

const Contact = () => {
  return (
    <ParallaxProvider>
      <div className="fade-in overflow-x-hidden"> {/* Added overflow-x-hidden */}
        <Parallax speed={-10}>
          <HeroSection />
        </Parallax>

        <Parallax speed={5}>
          <ContactFormSection />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default Contact;
