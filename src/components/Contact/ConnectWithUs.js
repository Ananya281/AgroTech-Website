import React from "react";

const ConnectWithUs = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
      <div className="flex justify-center space-x-8">
        <a href="#" className="text-pink-600">
          <i className="fab fa-instagram text-4xl"></i>
        </a>
        <a href="#" className="text-blue-600">
          <i className="fab fa-facebook-f text-4xl"></i>
        </a>
        <a href="#" className="text-blue-400">
          <i className="fab fa-twitter text-4xl"></i>
        </a>
        <a href="#" className="text-blue-600">
          <i className="fab fa-facebook-messenger text-4xl"></i>
        </a>
      </div>
    </section>
  );
};

export default ConnectWithUs;
