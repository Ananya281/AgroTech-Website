import React from "react";

const SolutionsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 text-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-yellow-200 opacity-20 transform scale-150 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold mb-6 text-yellow-800 animate-fade-in">
          Our Solutions
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl px-4 animate-slide-up">
          To mitigate post-harvest losses, we offer innovative and cost-effective processing technologies tailored to extend the shelf life of fresh produce while preserving nutritional value and quality.
        </p>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-8 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-50 animate-float"></div>
      <div className="absolute bottom-16 right-10 w-24 h-24 bg-yellow-500 rounded-full opacity-40 animate-float-slower"></div>
    </section>
  );
};

export default SolutionsSection;
