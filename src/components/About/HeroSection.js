import React, { useEffect, useState } from "react";
import farmerImage from "../../assets/image/farmer.jpeg"; // Adjust path based on your folder structure

const HeroSection = () => {
  const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });

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

  return (
    <header
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${farmerImage})`, // Dynamically using the farmer image
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Custom Glowing Cursor */}
      <div
        className="fixed w-0.5 h-0.5 bg-white rounded-full pointer-events-none z-50"
        style={{
          left: cursorStyle.left,
          top: cursorStyle.top,
          boxShadow: "0 0 80px 80px rgba(255, 255, 255, 0.6)",
          transform: "translate(-50%, -50%)",
        }}
        
      ></div>

      {/* Content */}
      <h1 className="relative z-10 text-5xl font-bold">ABOUT</h1>
    </header>
  );
};

export default HeroSection;
