import React from "react";

const cardsData = [
  {
    title: "Technical Support",
    description: "Expert assistance to overcome technical challenges and optimize project execution.",
    id: "/001",
  },
  {
    title: "Project Consultation",
    description: "Comprehensive guidance to ensure smooth and efficient project delivery.",
    id: "/002",
  },
  {
    title: "Expert Guidance",
    description: "Specialized advice to help you achieve project goals successfully.",
    id: "/003",
  },
  {
    title: "Research & Development",
    description: "Innovative solutions tailored to your specific needs and challenges.",
    id: "/004",
  },
  {
    title: "Strategy Planning",
    description: "Helping you align your goals with effective strategies.",
    id: "/005",
  },
  {
    title: "Customer Support",
    description: "Dedicated support to ensure your success and satisfaction.",
    id: "/006",
  },
];

const ServicesCards = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 text-left transform transition-transform"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 text-md mb-6">{card.description}</p>
              <span className="text-gray-400 text-lg font-medium text-right">{card.id}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
