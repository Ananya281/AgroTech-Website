import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './style.css'; // Assuming the CSS file is in the same directory
import image1 from '../../assets/image/a.jpeg'; // Update paths as per your project structure
import image2 from '../../assets/image/b.jpeg';
import image3 from '../../assets/image/c.jpeg';

const OurCards = () => {
  return (
    <div className="cards-container bg-gray-50">
      <Card
        title="Who We Are"
        description="FV Plus Agrotech Innovation is a forward-thinking entity dedicated to revolutionizing fresh produce management. As an emerging player in the industry, we’re committed to pioneering innovative and cost-effective technologies for processing fruits and vegetables. Our mission is to tackle food security challenges through cutting-edge solutions."
        src={image1}
      />
      <Card
        title="What We Do"
        description="We specialize in developing and applying game-changing solutions that mitigate post-harvest losses. Our core focus lies in leveraging innovative, affordable processing technologies. We aim to significantly increase the shelf life of fruits and vegetables while prioritizing the maintenance of their nutritional quality."
        src={image2}
      />
      <Card
        title="How We Do It"
        description="Our approach is centered on innovation and efficiency. We invest in research and development to create pioneering technologies tailored for processing various types of produce. By combining advanced methods with a cost-effective approach, we ensure that our solutions are accessible and impactful."
        src={image3}
      />
    </div>
  );
};

const Card = ({ title, description, src }) => {
  const cardRef = useRef(null);

  // Use `useScroll` and `useTransform` for individual card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [50, 0]); // Parallax effect for vertical movement
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1.5, 1]); // Zoom-out effect for the image

  return (
    <motion.div ref={cardRef} style={{ y: yTransform }} className="card-wrapper">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <motion.div
        style={{ scale: scaleTransform }}
        className="card-image-wrapper"
      >
        <img src={src} alt={title} className="card-image" />
      </motion.div>
    </motion.div>
  );
};

export default OurCards;
