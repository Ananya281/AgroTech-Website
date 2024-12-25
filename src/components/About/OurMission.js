import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/image/a.jpeg"; // Replace with your actual image path
import image2 from "../../assets/image/b.jpeg"; // Replace with your actual image path
import image3 from "../../assets/image/c.jpeg"; // Replace with your actual image path

const OurMission = () => {
  // Animation variants for fade-in and movement
  const headingVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold"
          initial="hidden"
          animate="visible"
          variants={headingVariant}
        >
          MISSION + VISION
        </motion.h2>
        <motion.p
          className="max-w-4xl mx-auto text-gray-600 mt-4"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          We rescue farmed animals and give them care and sanctuary, connect animals with people to
          advance veganism, and advocate for animal rights in alliance with other social justice
          movements. The sanctuary welcomes visitors to meet animals who are most commonly
          exploited, abused, and killed in animal agriculture.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Who We Are Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <p className="text-gray-600">
            FV Plus Agrotech Innovation is a forward-thinking entity dedicated to revolutionizing
            fresh produce management. As an emerging player in the industry, we’re committed to
            pioneering innovative and cost-effective technologies for processing fruits and
            vegetables. Our mission is to tackle food security challenges through cutting-edge
            solutions.
          </p>
        </motion.div>
        <motion.img
          src={image1}
          alt="Who We Are"
          className="rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        />

        {/* What We Do Section */}
        <motion.img
          src={image2}
          alt="What We Do"
          className="rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h3 className="text-2xl font-bold mb-4">What We Do</h3>
          <p className="text-gray-600">
            We specialize in developing and applying game-changing solutions that mitigate
            post-harvest losses. Our core focus lies in leveraging innovative, affordable processing
            technologies. We aim to significantly increase the shelf life of fruits and vegetables
            while prioritizing the maintenance of their nutritional quality.
          </p>
        </motion.div>

        {/* How We Do It Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h3 className="text-2xl font-bold mb-4">How We Do It</h3>
          <p className="text-gray-600">
            Our approach is centered on innovation and efficiency. We invest in research and
            development to create pioneering technologies tailored for processing various types of
            produce. By combining advanced methods with a cost-effective approach, we ensure that
            our solutions are accessible and impactful.
          </p>
        </motion.div>
        <motion.img
          src={image3}
          alt="How We Do It"
          className="rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        />
      </div>
    </section>
  );
};

export default OurMission;
