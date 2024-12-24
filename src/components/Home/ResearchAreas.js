import React from "react";

const ResearchAreas = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Research Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-50 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-2">Guava Probi</h3>
          <p className="text-gray-600">Promotes gut-healthy microbiome...</p>
        </div>
        <div className="p-6 bg-gray-50 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-2">IRIS</h3>
          <p className="text-gray-600">
            A cutting-edge IoT device offering solutions that revamp fruit management from farm to table...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
