import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundImage from "../../assets/image/a.jpeg"; // Replace with your image path
import "./HeroSection.css"; // Import the CSS file

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
      backgroundColor: "#f9fafb", // Light gray for fading
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
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden bg-black"
      // style={{
      //   backgroundImage: `url(${BackgroundImage})`,
      // }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* White Overlay for Fading Effect */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0 pointer-events-none transition-opacity duration-500"
      ></div>

      {/* Custom Glowing Cursor */}
      {/* <div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50"
        style={{
          left: cursorStyle.left,
          top: cursorStyle.top,
          boxShadow: "0 0 80px 80px rgba(255, 255, 255, 0.6)",
          transform: "translate(-50%, -50%)",
        }}
      ></div> */}

      {/* Content */}
      <div className="typewriter-container relative z-10">
        <h1
          className="typewriter-text text-[16vw] font-extrabold uppercase text-transparent bg-clip-text ml-10"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          SERVICE
        </h1>
      </div>
    </header>
  );
};

export default HeroSection;
