import React from "react";

const ObjectivesSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-green-100 to-green-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-green-200 opacity-20 transform scale-150 animate-pulse"></div>

      {/* Section Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl font-extrabold text-green-800 mb-6 animate-fade-in">
          Objectives
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left Image */}
          <div className="flex-shrink-0 w-64 h-64 bg-cover bg-center rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500" 
               style={{
                 backgroundImage: `url('path-to-your-image.jpg')`, // Replace with the actual image path
               }}>
          </div>

          {/* Objectives Text */}
          <div className="max-w-2xl bg-green-700 text-white p-6 rounded-lg shadow-lg transform hover:translate-y-2 transition-transform duration-500">
            <p className="text-lg md:text-xl leading-relaxed">
              Improve methods of processing fruits and vegetables to increase 
              their nutritional value and create goods with high health benefits. 
              Incorporating innovative solutions, we focus on producing goods like 
              synbiotics that promote health and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
