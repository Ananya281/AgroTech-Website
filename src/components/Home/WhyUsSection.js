import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import backgroundImage from "../../assets/image/farmer.jpeg"; // Replace with the path to your background image

const WhyUsSection = () => {
  const maskRef = useRef(null);

  useEffect(() => {
    const updateMaskPosition = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update mask position using GSAP
      gsap.to(maskRef.current, {
        x: x - 100, // Adjust offset to center the mask
        y: y - 100,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Hide the default cursor
    document.body.style.cursor = "none";

    window.addEventListener("mousemove", updateMaskPosition);

    return () => {
      document.body.style.cursor = ""; // Reset cursor to default on cleanup
      window.removeEventListener("mousemove", updateMaskPosition);
    };
  }, []);

  return (
    <section
      className="relative h-screen w-full text-center flex flex-col justify-center items-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* GSAP Mask */}
      <div
        ref={maskRef}
        className="fixed w-80 h-80 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
        style={{
          top: 0,
          left: 0,
        }}
      ></div>

      {/* Content */}
      <div className="absolute z-10">
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-4 max-w-50"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          WHY FV PLUS <br /> AGROTECH INNOVATION?
        </h2>
        <div className="w-80 h-1 bg-green-500 mx-auto my-4"></div>
        <p
          className="text-lg md:text-xl text-gray-200"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          OUR WORKS AND OBJECTIVES
        </p>
      </div>
    </section>
  );
};

export default WhyUsSection;
