import React from "react";
import farmerImage from "../../assets/image/farmer.jpeg"; // Adjust path based on your folder structure

const HeroSection = () => {
  return (
    <header
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${farmerImage})`, // Dynamically using the farmer image
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <h1 className="relative z-10 text-5xl font-bold">ABOUT</h1>
    </header>
  );
};

export default HeroSection;
