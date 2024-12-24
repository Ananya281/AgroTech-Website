import React from "react";

const OurMission = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">MISSION + VISION</h2>
        <p className="max-w-4xl mx-auto text-gray-600 mt-4">
          We rescue farmed animals and give them care and sanctuary, connect animals with people to advance veganism, 
          and advocate for animal rights in alliance with other social justice movements. 
          The sanctuary welcomes visitors to come and meet animals who are most commonly exploited, abused, and killed in animal agriculture.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Who We Are Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <p className="text-gray-600">
            FV Plus Agrotech Innovation is a forward-thinking entity dedicated to revolutionizing fresh produce management. 
            As an emerging player in the industry, we’re committed to pioneering innovative and cost-effective technologies 
            for processing fruits and vegetables. Our mission is to tackle food security challenges through cutting-edge solutions.
          </p>
        </div>
        <img src="path-to-image1.jpg" alt="Who We Are" className="rounded-lg shadow-lg" />

        {/* What We Do Section */}
        <img src="path-to-image2.jpg" alt="What We Do" className="rounded-lg shadow-lg" />
        <div>
          <h3 className="text-2xl font-bold mb-4">What We Do</h3>
          <p className="text-gray-600">
            We specialize in developing and applying game-changing solutions that mitigate post-harvest losses. 
            Our core focus lies in leveraging innovative, affordable processing technologies. 
            We aim to significantly increase the shelf life of fruits and vegetables while prioritizing the maintenance of their nutritional quality.
          </p>
        </div>

        {/* How We Do It Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">How We Do It</h3>
          <p className="text-gray-600">
            Our approach is centered on innovation and efficiency. We invest in research and development 
            to create pioneering technologies tailored for processing various types of produce. 
            By combining advanced methods with a cost-effective approach, we ensure that our solutions are accessible and impactful.
          </p>
        </div>
        <img src="path-to-image3.jpg" alt="How We Do It" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default OurMission;
