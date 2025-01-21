import React from "react";
import xeebi from "../assets/EricAndZura.jpg";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const PaulowniaInfo = () => {
  return (
    <section className="bg-[#f9f9f9] text-gray-800">
      {/* Hero Section */}
      <div className="bg-emerald-500 text-white text-center py-16 px-4 relative">
        <Link
          to={"/"}
          className="absolute flex gap-x-1 text-black items-center left-5 top-5 p-2 text-center bg-white rounded-lg border-none"
        >
          <FaChevronLeft color="black" />
          Back
        </Link>
        <h1 className="text-5xl font-bold mb-4">Paulownia Tree</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Known for its remarkable growth rate, environmental benefits, and
          high-quality timber, the Paulownia tree is a sustainable solution for
          a greener planet.
        </p>
      </div>

      {/* Advantages Section */}
      <div className="py-16 px-6 lg:px-[170px] flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Text Section */}
        <div className="flex-grow">
          <h2 className="text-3xl font-semibold mb-8">
            Advantages of the{" "}
            <span className="text-emerald-500">Paulownia Tree</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 text-lg relative">
            {[
              {
                label: "The fastest-growing tree in the world",
                highlight: "Fastest-growing",
              },
              {
                label: "Absorbs CO₂ 4-10 times faster",
                highlight: "4-10 times faster",
              },
              {
                label: "Up to 1 cubic meter of timber every 7 years",
                highlight: "1 cubic meter",
              },
              {
                label: "Regenerates after being cut down",
                highlight: "Regenerates",
              },
              { label: "Premium quality timber", highlight: "Premium" },
              {
                label: "By-products: honey, carbon credits",
                highlight: "honey, carbon credits",
              },
            ].map(({ label, highlight }, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <p className="ml-[60px]">
                  <span className="text-[#4FC3F7]">{highlight}</span>{" "}
                  {label.replace(highlight, "")}
                </p>
              </div>
            ))}
            {/* Vertical Divider */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l border-gray-300 hidden lg:block"></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-[460px] h-[420px] rounded-2xl rounded-bl-[100px] overflow-hidden">
          <img
            src={xeebi}
            alt="Paulownia Tree"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-white py-16 px-6 md:px-[170px]">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose the Paulownia Tree?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl text-emerald-500 font-medium mb-4">
              Eco-Friendly
            </h3>
            <p>
              The Paulownia tree absorbs significant amounts of carbon dioxide,
              helping to combat climate change.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4 text-emerald-500">
              Economic Benefits
            </h3>
            <p>
              With its fast growth and high-quality timber, this tree provides
              excellent financial returns for farmers and businesses.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4 text-emerald-500">
              Resilient and Durable
            </h3>
            <p>
              Known for its ability to regenerate after being cut, the Paulownia
              tree is a long-term investment in sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-emerald-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Start Your Journey with Paulownia Trees Today
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Whether you’re looking for an eco-friendly solution, a profitable
          investment, or both, the Paulownia tree is the perfect choice. Learn
          more or start planting today.
        </p>
        <button className="bg-white text-[#3D9E24] py-3 px-8 text-lg rounded-3xl hover:bg-gray-200 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default PaulowniaInfo;
