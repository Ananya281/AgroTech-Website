import React from "react";
import heroImage from "../../assets/image/c.jpeg"; // Adjust the path as per your folder structure

const HeroSection = () => {
  return (
    <header
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1 className="text-5xl font-bold">CONTACT US</h1>
    </header>
  );
};

export default HeroSection;
