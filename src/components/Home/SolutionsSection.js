import React from "react";

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-white text-center relative">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-white opacity-70 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-8 leading-tight">
          Our <span className="text-yellow-500">Solutions</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          Mitigating post-harvest losses with <strong>innovative</strong> and{" "}
          <strong>cost-effective</strong> processing technologies. We aim to
          extend the shelf life of fresh produce while preserving its
          nutritional value and quality.
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-yellow-300 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute bottom-0 right-20 w-24 h-24 bg-yellow-500 rounded-full opacity-40 blur-lg"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-100 rounded-full opacity-30 blur-lg"></div>
    </section>
  );
};

export default SolutionsSection;
