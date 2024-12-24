import React from "react";

const ProductCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="p-6 bg-green-800 text-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Guava Probi</h3>
          <p className="mb-4">
            Guava Probi, made from freshly pureed guava fermented with probiotic culture, has preserved functional properties for immunity and wellness.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Explore More
          </button>
        </div>
        <div className="p-6 bg-green-800 text-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">IRIS</h3>
          <p className="mb-4">
            A cutting-edge IoT device offering precise solutions for fruit ripeness management, revolutionizing farm-to-table processes.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
