import React from "react";

const TokenizedTreeSteps = () => {
  return (
    <div className="flex flex-col items-center px-6 py-10">
      <h2 className="text-3xl font-bold mb-8">How to get Tokenized Tree?</h2>
      <div className="w-full max-w-5xl relative">
        {/* Green Line */}
        <div className="absolute top-[8px] rounded-xl left-0 right-0 h-4 bg-[#1EE487]"></div>

        {/* Steps Container */}
        <div className="grid grid-cols-6 gap-x-2 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-start">
            {/* Circle */}
            <div className="relative z-10 flex items-center justify-center w-7 h-7 bg-black text-white text-lg font-bold rounded-full">
              1
            </div>
            {/* Title */}
            <h3 className="text-base font-semibold mt-4 text-left">Connect</h3>
            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 text-left">
              Connect your crypto wallet to the site
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start">
            {/* Circle */}
            <div className="relative z-10 flex items-center justify-center w-7 h-7 bg-black text-white text-lg font-bold rounded-full">
              2
            </div>
            {/* Title */}
            <h3 className="text-base font-semibold mt-4 text-left">Approve</h3>
            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 text-left">
              Approve and create Profile on the platform
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start">
            {/* Circle */}
            <div className="relative z-10 flex items-center justify-center w-7 h-7 bg-black text-white text-lg font-bold rounded-full">
              3
            </div>
            {/* Title */}
            <h3 className="text-base font-semibold mt-4 text-left">Top up</h3>
            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 text-left">
            Top up your wallet balance in USDT in Polygon Network
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-start">
            {/* Circle */}
            <div className="relative z-10 flex items-center justify-center w-7 h-7 bg-black text-white text-lg font-bold rounded-full">
              4
            </div>
            {/* Title */}
            <h3 className="text-base font-semibold mt-4 text-left">Choose</h3>
            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 text-left">
              Select the number of trees
            </p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-start">
            {/* Circle */}
            <div className="relative z-10 flex items-center justify-center w-7 h-7 bg-black text-white text-lg font-bold rounded-full">
              5
            </div>
            {/* Title */}
            <h3 className="text-base font-semibold mt-4 text-left">
              Click the button
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 text-left">Press Buy</p>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col items-start">
            {/* Circle */}
            <div className="relative z-10 flex items-center justify-center w-7 h-7 bg-black text-white text-lg font-bold rounded-full">
              6
            </div>
            {/* Title */}
            <h3 className="text-base font-semibold mt-4 text-left">Confirm</h3>
            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 text-left">
              Confirm the transaction in Metamask
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenizedTreeSteps;
