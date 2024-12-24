import React from "react";

const RetailerSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">For Retailers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div>
          <p className="text-gray-600">
            IRIS sensors monitor ethylene levels and relay real-time data to central platforms, ensuring optimal harvest and transport decisions.
          </p>
        </div>
        <div>
          <img
            src="path-to-retailer-image.jpg"
            alt="Retailers"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default RetailerSection;
