import React from "react";

const HeroSection = () => {
  return (
    <header
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('path-to-background-image.jpg')" }}
    >
      <h1 className="text-5xl font-bold">ABOUT</h1>
    </header>
  );
};

export default HeroSection;
