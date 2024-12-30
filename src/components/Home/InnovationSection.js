import React from "react";

const InnovationSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-4 px-8 bg-white mb-[100px]">
      {/* Small Heading */}
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
        A LITTLE BIT ABOUT US
      </h3>

      {/* Separator Line */}
      <div className="w-64 h-[1px] bg-green-600 mb-8"></div>

      {/* Main Content */}
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
          Innovation. Health. Growth.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
          FV Plus Agrotech Innovation is an emerging player in the field of fresh
          produce management. We specialize in pioneering and cost-effective
          technologies for processing fruits and vegetables. Our solutions aim to
          tackle food security challenges and promote sustainable agricultural
          practices.
        </p>
        <button
          className="bg-green-600 text-white px-8 py-4 rounded-md font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Know More
        </button>
      </div>
    </section>
  );
};

export default InnovationSection;
