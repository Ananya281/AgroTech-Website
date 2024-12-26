import React from "react";

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 via-green-100 to-white text-center relative">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-200 via-green-100 to-white opacity-80 pointer-events-none"></div>

      {/* Glassy Card Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 bg-white/10 rounded-lg shadow-2xl backdrop-blur-xl border border-white/30 p-10">
        <h2 className="text-5xl font-extrabold text-green-800 mb-8 leading-tight">
          Our <span className="text-yellow-500">Agricultural Solutions</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
          Addressing agricultural challenges with <strong>innovative</strong> and <strong>cost-effective</strong> solutions. We aim to enhance crop productivity, minimize waste, and ensure sustainable farming practices for a better future.
        </p>
        <button className="px-8 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Decorative Floating Elements with Bouncy Animation */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-green-300 rounded-full opacity-50 blur-xl animate-bounce"></div>
      <div className="absolute bottom-0 right-20 w-24 h-24 bg-green-500 rounded-full opacity-40 blur-lg animate-bounce delay-200"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-lg animate-bounce delay-400"></div>
    </section>
  );
};

export default SolutionsSection;
