import React from "react";
import { motion } from "framer-motion";

const VisitUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-gray-50 text-center">
      {/* Section Heading Animation */}
      <motion.h2
        className="text-4xl font-extrabold mb-6 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Visit Us
      </motion.h2>

      {/* Address Animation */}
      <motion.p
        className="text-gray-700 mb-8 text-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        TIET-TAU Center Of Excellence For Food Security (T2CEFS), Thapar
        Institute of Engineering and Technology, Patiala, Punjab, 147004
      </motion.p>

      {/* Google Map Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27419.107615227248!2d76.3780715684349!3d30.336126349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028dcfcfd6c01%3A0x1debd224d0edee07!2sThapar%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1685512590023!5m2!1sen!2sin"
          width="1200"
          height="450"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          className="mx-auto shadow-lg"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default VisitUs;
