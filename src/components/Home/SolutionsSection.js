import React from "react";

const SolutionsSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-green-50 via-green-100 to-white text-center">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-200 via-green-100 to-white opacity-80 pointer-events-none"></div>

      {/* Glassy Card Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/30 p-12">
        <h2
          className="text-5xl font-extrabold text-green-800 mb-8 leading-tight"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Our <span className="text-yellow-500">Agricultural Solutions</span>
        </h2>
        <p
          className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Addressing agricultural challenges with <strong>innovative</strong>{" "}
          and <strong>cost-effective</strong> solutions. We aim to enhance crop
          productivity, minimize waste, and ensure sustainable farming
          practices for a better future.
        </p>
        <button
          className="px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Learn More
        </button>
      </div>

      {/* Decorative Floating Elements with Bouncy Animation */}
      <div className="absolute -top-10 left-12 w-44 h-44 bg-green-300 rounded-full opacity-50 blur-2xl animate-bounce"></div>
      <div className="absolute bottom-0 right-16 w-28 h-28 bg-green-500 rounded-full opacity-40 blur-xl animate-bounce delay-150"></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-green-100 rounded-full opacity-30 blur-lg animate-bounce delay-300"></div>
    </section>
  );
};

export default SolutionsSection;
