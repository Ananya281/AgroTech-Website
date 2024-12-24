import React from "react";

const ServicesCards = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Technical Support */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <img
            src="path-to-technical-support-image.jpg"
            alt="Technical Support"
            className="mx-auto w-24 h-24 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Technical Support</h3>
          <p className="text-gray-600">
            Expert assistance to overcome technical challenges and optimize project execution.
          </p>
        </div>

        {/* Project Consultation */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <img
            src="path-to-project-consultation-image.jpg"
            alt="Project Consultation"
            className="mx-auto w-24 h-24 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Project Consultation</h3>
          <p className="text-gray-600">
            Comprehensive guidance to ensure smooth and efficient project delivery.
          </p>
        </div>

        {/* Expert Guidance */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <img
            src="path-to-expert-guidance-image.jpg"
            alt="Expert Guidance"
            className="mx-auto w-24 h-24 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
          <p className="text-gray-600">
            Specialized advice to help you achieve project goals successfully.
          </p>
        </div>
      </div>

      <p className="mt-8 text-gray-600 max-w-3xl mx-auto">
        Don't let hurdles stall your progress. Contact us today to discuss how we can assist you in surmounting
        obstacles and propel your project towards success!
      </p>
    </section>
  );
};

export default ServicesCards;
