import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
        <img
          src="path-to-innovation-image.jpg"
          alt="Harvesting Innovation"
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Harvesting Innovation, Cultivating Prosperity</h2>
          <p className="text-gray-600">
            Our unwavering dedication lies in catalyzing the agri-economy through strategic value addition. We are
            committed to empowering diverse stakeholders, from farmers and traders to retailers, importers, and
            exporters. Our mission revolves around pioneering innovative solutions and sustainable practices, aimed at
            revolutionizing fresh produce management and fostering an environment for all individuals within the
            agricultural spectrum to thrive and prosper.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
