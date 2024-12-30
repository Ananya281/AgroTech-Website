import React from "react";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  return (
    <section id="contact-form" className="py-16 bg-gray-50 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto py-5 mt-[30px]">
        {/* Form Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
            Contact Us
          </h2>
          <form className="space-y-6">
            <motion.input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.textarea
              placeholder="Message"
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              whileFocus={{ scale: 1.05 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
            Visit Us
          </h2>
          {/* Map */}
          <div className="relative h-64 md:h-96 border rounded-lg overflow-hidden mb-[100px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8886.105565062839!2d76.50841007403253!3d30.372119706217084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb3cf0c7b49%3A0x54dbf2f90e12b6c0!2sThapar%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1669892680297!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Footer Contact Info */}
      <div className="bg-white py-6 mt-10">
        <div className="flex justify-center space-x-10">
          <div className="text-center text-gray-700">
            <i className="fas fa-map-marker-alt text-3xl mb-2 text-green-600"></i>
            <h3 className="font-bold text-lg">Address</h3>
            <p>Thapar Institute of Engineering and Technology, Patiala, Punjab, 147004</p>
          </div>
          <div className="text-center text-gray-700">
            <i className="fas fa-phone-alt text-3xl mb-2 text-green-600"></i>
            <h3 className="font-bold text-lg">Phone</h3>
            <p>+9878249089</p>
          </div>
          <div className="text-center text-gray-700">
            <i className="fas fa-envelope text-3xl mb-2 text-green-600"></i>
            <h3 className="font-bold text-lg">Email</h3>
            <p>directorfvplus@gmail.com</p>
          </div>
          <div className="text-center text-gray-700">
            <i className="fas fa-globe text-3xl mb-2 text-green-600"></i>
            <h3 className="font-bold text-lg">Website</h3>
            <p>www.tiet.edu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
