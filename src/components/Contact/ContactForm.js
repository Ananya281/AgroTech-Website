import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-10 py-5">
        {/* Form Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
            How Can We Help You?
          </h2>
          <form className="space-y-6">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              placeholder="Email Address"
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
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
            Contact Info
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="font-bold">Address:</span> TIET-TAU Center Of Excellence For Food Security (T2CEFS), Thapar Institute of Engineering and Technology, Patiala, Punjab, 147004
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-bold">Email:</span> directorfvplus@gmail.com
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-bold">Call Us:</span> 9878249089
          </p>
          <div className="flex space-x-6 mt-6">
            <motion.a
              href="#"
              className="text-green-600 hover:text-green-800 text-2xl"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-facebook-f"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-green-600 hover:text-green-800 text-2xl"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-green-600 hover:text-green-800 text-2xl"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
