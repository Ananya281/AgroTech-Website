import React from "react";
import { Parallax } from "react-scroll-parallax";
import irisImage from "../../assets/image/c.jpeg"; // Ensure this path is correct

const IrisSection = () => {
  return (
    <section className="relative overflow-hidden mt-0">
      {/* Parallax Background */}
      <Parallax speed={0}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${irisImage})`,
            height: "80vh", // 2/3 of the viewport height
          }}
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      </Parallax>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-[80vh] px-6 text-center text-white">
        <Parallax speed={5}>
          <h1 className="text-6xl font-bold mb-4">IRIS</h1>
        </Parallax>
        <Parallax speed={10}>
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Intelligent Ripening Detection System
          </h2>
        </Parallax>
        <Parallax speed={15}>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed mb-8">
            A cutting-edge IoT device offering precise solutions that revamp
            fruit management from farm to table. IRIS ensures optimal fruit
            quality from producer to consumer.
          </p>
        </Parallax>
        <Parallax speed={20}>
          <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-lg font-medium rounded-lg transition">
            Learn More
          </button>
        </Parallax>
      </div>

      {/* Feature Section */}
      <div className="relative z-20 bg-gray-100 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 max-w-9xl mx-auto px-6">
          {[
            {
              title: "Real Time Monitoring",
              description: "Track every detail with live updates.",
              icon: "🧠",
            },
            {
              title: "Data Driven Insights",
              description: "Analyze and optimize performance.",
              icon: "📊",
            },
            {
              title: "Alerts and Notifications",
              description: "Stay informed with smart alerts.",
              icon: "📢",
            },
            {
              title: "Remote Access",
              description: "Monitor and manage from anywhere.",
              icon: "🌐",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-300"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IrisSection;
