import React from "react";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Benefits</h2>
      <p className="text-gray-600 mb-8">Cures Problems Of:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>Cancer</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>Digestion</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>Weight Loss</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>Hormone Levels</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
