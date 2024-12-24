import React from "react";

const GuavaProbiSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Guava Probi</h2>
      <p className="max-w-4xl mx-auto text-gray-600">
        Guava Probi, made from freshly pureed guava fermented with probiotic culture, has preserved functional properties for immunity, health, and wellness. Perfect for cakes, bars, jam, chutneys, and more.
      </p>
      <img src="path-to-guava-image.jpg" alt="Guava Probi" className="my-6 mx-auto rounded-lg shadow-md" />
      <h3 className="text-2xl font-bold mt-8">Why Guava Probi?</h3>
      <ul className="mt-4 text-left max-w-4xl mx-auto">
        <li>✔ Maintains healthy gut flora</li>
        <li>✔ No added sugar, 100% natural</li>
        <li>✔ Highly nutritious and immunity booster</li>
      </ul>
    </section>
  );
};

export default GuavaProbiSection;
