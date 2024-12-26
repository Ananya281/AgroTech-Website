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
    <section className="py-8 bg-white text-center mb-10">
      <div className="max-w-7xl mx-auto px-3 mb-10">
        {/* <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-8 flex flex-col justify-between"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-wrap text-left">{card.title}</h3>
              <p className="text-gray-600 text-md mb-4 text-left">{card.description}</p>
              <span className="text-gray-400 text-lg font-medium text-right">{card.id}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
