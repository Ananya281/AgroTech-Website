import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import farmerImage from "../../assets/image/farmer.jpeg"; // Adjust path based on your folder structure
import './HeroSection.css'; // Importing HeroSection.css

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle({
        left: e.clientX + "px",
        top: e.clientY + "px",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // GSAP scroll effect
    const section = sectionRef.current;
    const overlay = overlayRef.current;

    gsap.to(overlay, {
      backgroundColor: "gray-50",
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: "top -25%",
        end: "top -75%",
        scrub: true,
      },
    });
  }, []);

  return (
    <header
      ref={sectionRef}
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${farmerImage})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* White Overlay for Fading Effect */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-white opacity-0 pointer-events-none transition-opacity duration-500"
      ></div>

      {/* Content */}
      <div className="logo-container">
        <h1 className="about-heading">About</h1>
        <h2 className="agro-tech-heading">Agro-Tech</h2>
      </div>
    </header>
  );
};

export default HeroSection;
