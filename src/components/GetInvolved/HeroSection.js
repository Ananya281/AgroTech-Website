import React from "react";

const HeroSection = () => {
  return (
    <header
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('path-to-get-involved-hero-background.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold">GET INVOLVED</h1>
        <p className="text-xl mt-4">Join us in building better lives!</p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Explore Opportunities
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
