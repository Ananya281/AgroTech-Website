import React from "react";

const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Form Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">How Can We Help You?</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg"
            ></textarea>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
          <p className="text-gray-600 mb-4">
            Address: TIET-TAU Center Of Excellence For Food Security (T2CEFS),
            Thapar Institute of Engineering and Technology, Patiala, Punjab, 147004
          </p>
          <p className="text-gray-600 mb-4">Email: directorfvplus@gmail.com</p>
          <p className="text-gray-600 mb-4">Call Us: 9878249089</p>
          <div className="flex space-x-4">
            <a href="#" className="text-green-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-green-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-green-600">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
