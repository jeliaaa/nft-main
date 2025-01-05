import React from "react";
import { FaBolt, FaLeaf } from "react-icons/fa";
import { FaDollarSign, FaMosquito, FaSeedling } from "react-icons/fa6";
import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Rapid Growth",
    description:
      "Paulownia trees mature in just 8-12 years, allowing for quicker returns on investment and efficient carbon sequestration.",
    icon: <FaBolt className="text-blue-500 text-2xl" />,
  },
  {
    title: "Carbon Sequestration",
    description:
      "These trees absorb significantly more CO₂ than many other species, aiding in the fight against climate change.",
    icon: <FaLeaf className="text-green-500 text-2xl" />,
  },
  {
    title: "Soil Restoration",
    description:
      "Paulownia trees thrive in poor soils and help regenerate them by adding organic matter and preventing erosion.",
    icon: <FaSeedling className="text-yellow-500 text-2xl" />,
  },
  {
    title: "Economic Value",
    description:
      "The lightweight yet strong wood of Paulownia is highly valued in various industries, offering profitable returns upon harvest.",
    icon: <FaDollarSign className="text-purple-500 text-2xl" />,
  },
  {
    title: "Biodiversity Support",
    description:
      "The large, fragrant flowers attract pollinators, enhancing local biodiversity and supporting ecosystems.",
    icon: <FaMosquito className="text-pink-500 text-2xl" />,
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="mx-auto px-2 lg:px-[170px] py-10">
      <h2 className="text-3xl font-bold text-center text-gray-500 mb-8">
        Benefits of Growing{" "}
        <span className="text-emerald-500">Paulownia Trees</span>
      </h2>
      <div className="border-t border-b border-gray-300 divide-y divide-gray-300">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-4 py-4">
            <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-emerald-400">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="capitalize mt-3 text-center">if you are deeply interested in the benefits view the longer version of our blog. <Link className="underline text-emerald-500" to={'/'}>see more</Link></p>
    </section>
  );
};

export default Benefits;
