import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import HeroSection from "../components/Contact/HeroSection";
import ContactForm from "../components/Contact/ContactForm";
import VisitUs from "../components/Contact/VisitUs";
import ConnectWithUs from "../components/Contact/ConnectWithUs";

const Contact = () => {
  return (
    <ParallaxProvider>
      <div>
        <Parallax speed={-10}>
          <HeroSection />
        </Parallax>

        <Parallax speed={5}>
          <ContactForm />
        </Parallax>

        <Parallax speed={-14}>
          <VisitUs />
        </Parallax>

        {/* Uncomment if needed */}
        {/* <Parallax speed={10}>
          <ConnectWithUs />
        </Parallax> */}
      </div>
    </ParallaxProvider>
  );
};

export default Contact;
