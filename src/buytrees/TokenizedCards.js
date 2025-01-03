import React from "react";
import littlePlant from "../assets/littleplant.png"; // Adjust the path as needed
import treeWithCoins from "../assets/axovanixe.png"; // Adjust the path as needed
import coins1 from "../assets/coins1.png"

const TokenizedTreeCard = () => {
  const ArrowSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 50"
      className="w-32 h-12 mx-4"
      fill="none"
    >
      <line
        x1="0"
        y1="25"
        x2="90"
        y2="25"
        stroke="#B3B3B3"
        strokeWidth="4"
      />
      <polygon points="90,15 120,25 90,35" fill="#C7C7C7" />
    </svg>
  );

  const LeftCard = () => (
    <div className="bg-[#F9F9F9] rounded-lg shadow-lg p-8 pb-0.5 flex flex-col items-center w-full h-[900px]">
      {/* Title */}
      <h2 className="text-2xl font-bold  mb-6">
        Sell your tokenized trees at a higher price before the tree cutting date on our marketplace
      </h2>
      <p className="flex gap-1">
      <span className="text-[#FB9393]">*</span>
      <p className="text-xl text-[#959595] font-semibold mb-8">
       Income forecast with lumber price volatility and asset price increases each year
      </p>
      </p>

      {/* Pricing Section */}
      <div className="flex items-center justify-between w-full  mb-8">
        {/* Left Side */}
        <div className="flex flex-col ">
          <div className="bg-white text-lg w-[120px] mb-4 font-semibold font-sans py-2 text-center text-[#B2B2B2] rounded-lg">2024 year</div>
          <p className="text-[27px] font-semibold font-sans leading-7 text-[#AEAEAE]">100 Trees <span className=" text-black">Price</span></p>
          
        </div>

        {/* Arrow */}
        <ArrowSVG />

        {/* Right Side */}
        <div className="flex flex-col items-center">
        <div className="bg-gradient-to-r from-[#1EE487] to-[#3ABFE5] font-semibold text-white text-xl w-[120px] py-2 text-center rounded-lg">
        2026 year
        </div>

          <p className="ml-10">
          <p className="text-[27px] font-semibold leading-7  mt-2 text-[#AEAEAE]">100 Trees</p>
          <p className="text-[27px] leading-8 font-semibold ">Price ~20000$ <span className="text-[#FB9393]">*</span></p>
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="flex justify-center items-end w-full relative mt-auto">
        <img
          src={littlePlant}
          alt="Little Plant"
          className="w-62 h-42 object-contain"
        />
        
        <img
          src={coins1}
          alt="coins"
          className="w-30 h-28 absolute left-[230px] bottom-[15px]"
          />
        <img
          src={coins1}
          alt="coins"
          className="w-30 h-28 absolute left-[360px]"
          />
        <img
          src={treeWithCoins}
          alt="Tree with Coins"
          className="w-42 h-46 object-contain "
        />
      </div>
    </div>
  );

  const RightCard = () => (
    <div className="bg-[#F9F9F9] rounded-lg shadow-lg p-8 w-full h-auto flex flex-col">
      {/* Header Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Forecast of earnings from 100 <br />trees</h2>
        <p className="flex">
        <span className="mt-1.5 text-[#FB9393]">*</span>
        <p className="text-lg font-semibold text-[#959595] mt-2">
        Average price forecast based on timber price variations in Europe
        </p>
        </p>
      </div>
  
      {/* Table Section */}
      <div className="mt-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-[#B9B9B9]">Year</th>
              <th className="py-2 text-[#B9B9B9]">What you get</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 text-m pr-12">2024</td> {/* Increased gap */}
              <td className="py-3">
              <p>
                Airdrop token{' '}
                <span className="bg-gradient-to-r from-[#1EE487] to-[#3ABFE5] font-semibold bg-clip-text text-transparent font-medium">
                    $ERA
                </span>
                </p>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 pr-12">2025</td> {/* Increased gap */}
              <td className="py-3">
                <p>Farming token $ERA + carbon credits payment</p>
                <div className="mt-2 bg-gradient-to-r from-[#1EE487] to-[#3ABFE5] font-semibold text-white text-sm px-3 py-1.5 rounded-xl inline-block">
                  -150$
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 pr-12">2026</td> {/* Increased gap */}
              <td className="py-3">
                <p>Carbon credits / by-products <br/> payments</p>
                <div className="mt-2 bg-gradient-to-r from-[#1EE487] to-[#3ABFE5] font-semibold text-white text-sm px-3 py-1.5  rounded-xl inline-block">
                  -150-300$
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 pr-48">2027</td> {/* Increased gap */}
              <td className="py-3">
                <p>Carbon credits / by-products <br/> payments</p>
                <div className="mt-2 bg-gradient-to-r from-[#1EE487] to-[#3ABFE5] font-semibold text-white text-sm px-3 py-1.5  rounded-xl inline-block">
                  -150-300$
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 pr-12">2028</td> {/* Increased gap */}
              <td className="py-3">
                <p>Carbon credits / by-products <br/> payments</p>
                <div className="mt-2 bg-gradient-to-r from-[#1EE487] to-[#3ABFE5] font-semibold text-white text-sm px-3 py-1.5  rounded-xl inline-block">
                  -150-300$
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-12">2029</td> {/* Increased gap */}
              <td className="py-3">
                <p>Carbon credits / by-products payments + Lumber sales <br/> payments</p>
                <div className="mt-2 bg-gradient-to-r from-[#1EE487] to-[#3ABFE5] font-semibold text-white text-sm px-3 py-1.5  rounded-xl inline-block">
                  -150-300$
                </div>
                <div className="mt-2 ml-4 bg-gradient-to-r from-[#3ABFE5] to-[#1EE487] font-semibold text-white text-sm px-3 py-1.5  rounded-xl inline-block">
                  -30 000$*
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-2">
      <LeftCard />
      <RightCard />
    </div>
  );
};

export default TokenizedTreeCard;
