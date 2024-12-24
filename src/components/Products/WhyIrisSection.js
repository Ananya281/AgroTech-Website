import React from "react";

const WhyIrisSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Why IRIS?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>Real-Time Monitoring</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>Data-Driven Insights</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>Alerts and Notifications</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>Remote Access</p>
        </div>
      </div>
    </section>
  );
};

export default WhyIrisSection;
