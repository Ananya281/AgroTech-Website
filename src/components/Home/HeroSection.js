import React from "react";

const HeroSection = () => {
  return (
    <header
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('path-to-hero-image.jpg')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">FV PLUS AGROTECH INNOVATIONS</h1>
      <p className="text-lg md:text-2xl mt-4">Towards a new world</p>
    </header>
  );
};

export default HeroSection;
