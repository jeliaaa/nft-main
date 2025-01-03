import React from 'react';

const InvestmentPlatform = ({ onBuyTreeClick }) => {
  return (
    <section className="bg-[#F9F9F9] rounded-3xl py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Investment platform
            <br />
            for tokenized assets
          </h1>
        </div>
        <div className="text-center text-lg mb-4 text-gray-600">
          <p>Join eco-friendly Kiri tree plantations project and earn a forecasted profit of 300%*</p>
          <p>* Profit per 6 years tree growing cycle</p>
        </div>
        <div className="flex justify-center mb-8">
          <button
            onClick={onBuyTreeClick} // Call the scroll function when clicked
            className="bg-[#1EE487] text-black py-2.5 px-16 rounded-xl text-lg hover:bg-green-600 transition"
          >
            Buy Trees
          </button>
        </div>
        <div className="flex justify-center gap-10 mb-4 ">
          <div className="text-gray-900 font-semibold">
            <p className="text-2xl mb-2 ">7-10 Times Faster</p>
            <p className="text-m text-gray-500">Paulownia growing cycle</p>
          </div>
          <div className="text-gray-900 font-semibold">
            <p className="text-2xl mb-2">300%</p>
            <p className="text-m text-gray-500">6-Year Profit</p>
          </div>
          <div className="text-gray-900 font-semibold">
            <p className="text-2xl mb-2">150 000</p>
            <p className="text-m text-gray-500">Unique trees planted</p>
          </div>
          <div className="text-gray-900 font-semibold">
            <p className="text-2xl mb-2">13 500</p>
            <p className="text-m text-gray-500">Tons of CO₂ absorbed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlatform;
