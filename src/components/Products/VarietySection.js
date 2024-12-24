import React from "react";

const VarietySection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Variety of Products That Can Be Made</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <p>Juices</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <p>Cakes</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <p>Jams</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <p>Soups</p>
        </div>
      </div>
    </section>
  );
};

export default VarietySection;
