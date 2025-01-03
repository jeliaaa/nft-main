import React from "react";
import diagramline from "./assets/diagramline.png"; // Adjust the path to your image

const Diagram = () => {
  return (
    <div className="bg-[#1E1E1E] text-white p-10 relative">
      {/* Title and Legend */}
      <div className="absolute top-8 left-[190px]">
        <h2 className="text-3xl font-bold mb-6">KEY INDICATORS</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#064B5A] mr-3"></div>
            <span className="text-lg text-[#969696]">Annual income ($)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#188BA5] mr-3"></div>
            <span className="text-lg text-[#969696]">Number of trees</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#43CDEC] mr-3"></div>
            <span className="text-m text-[#969696]">CO2 absorption (tons)</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end ml-[190px] justify-center mx-auto space-x-10 mt-[70px]">
        {/* 2025 */}
        <div className="text-center">
          <div className="bg-[#064B5A] h-12 w-36 flex items-center justify-center text-xl text-white font-semibold">6.75M</div>
          <div className="bg-[#188BA5] h-12 w-36 flex items-center justify-center text-xl text-white font-semibold">7M</div>
          <div className="bg-[#43CDEC] h-12 w-36 flex items-center justify-center text-xl text-black font-semibold">350K</div>
          <span className="block mt-[15px] text-lg">2025</span>
        </div>

        {/* 2027 */}
        <div className="text-center">
          <div className="bg-[#064B5A] h-[70px] w-[137px] flex items-center justify-center text-xl text-white font-semibold">71.1M</div>
          <div className="bg-[#188BA5] h-[70px] w-[137px] flex items-center justify-center text-xl text-white font-semibold">25M</div>
          <div className="bg-[#43CDEC] h-[70px] w-[137px] flex items-center justify-center text-xl text-black font-semibold">1.25M</div>
          <span className="block mt-[15px] text-lg">2027</span>
        </div>

        {/* 2029 */}
        <div className="text-center">
          <div className="bg-[#064B5A] h-24 w-32 flex items-center justify-center text-xl text-white font-semibold">287M</div>
          <div className="bg-[#188BA5] h-24 w-32 flex items-center justify-center text-xl text-white font-semibold">50M</div>
          <div className="bg-[#43CDEC] h-24 w-32 flex items-center justify-center text-xl text-black font-semibold">2.5M</div>
          <span className="block mt-[17px] text-2x">2029</span>
        </div>

        {/* 2031 */}
        <div className="text-center">
          <div className="bg-[#064B5A] h-[120px] w-[125px] flex items-center justify-center text-xl text-white font-semibold">2.9B</div>
          <div className="bg-[#188BA5] h-[120px] w-[125px] flex items-center justify-center text-xl text-white font-semibold">75M</div>
          <div className="bg-[#43CDEC] h-[120px] w-[125px] flex items-center justify-center text-xl text-black font-semibold">3.1M</div>
          <span className="block mt-[12px] text-lg">2031</span>
        </div>
      </div>

      {/* Dotted X-Axis replaced with image */}
      <div className="absolute bottom-[65px] left-[190px] w-[calc(100%-380px)]">
        <img src={diagramline} alt="Diagram Line" className="w-full" />
      </div>
    </div>
  );
};

export default Diagram;
