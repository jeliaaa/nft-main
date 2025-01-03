import React, { useState } from "react";

// Import NFT images
import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import nft4 from "../assets/nft4.png";
import nft5 from "../assets/nft5.png";

const BuyTrees = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Base quantity (1, 10, 100, etc.)
  const [customQuantity, setCustomQuantity] = useState(1); // Custom quantity (total number of trees selected)
  const [totalPrice, setTotalPrice] = useState(75); // Initial total price for 1 tree

  // Define price mapping for each base quantity
  const priceMapping = {
    1: 75,
    10: 619,
    100: 6090,
    300: 16690,
    600: 32990,
  };

  // Define supply mapping (fixed supplies values as per your request)
  const supplyMapping = {
    1: { available: 12, total: 50 },
    10: { available: 8, total: 20 },
    100: { available: 1, total: 10 },
    300: { available: 0, total: 3 },
    600: { available: 0, total: 1 },
  };

  // Define max increments based on your specified limits
  const maxIncrements = {
    1: 38, // First option (1 tree) can increase 38 times
    10: 12, // Second option (10 trees) can increase 12 times
    100: 9, // Third option (100 trees) can increase 9 times
    300: 3, // Fourth option (300 trees) can increase 3 times
    600: 0, // Fifth option (600 trees) cannot increase
  };

  // Mapping of quantities to NFT images
  const nftImages = {
    1: nft1,
    10: nft2,
    100: nft3,
    300: nft4,
    600: nft5,
  };

  // Handle changes when clicking quantity buttons
  const handleQuantityButton = (quantity) => {
    setSelectedQuantity(quantity);
    setCustomQuantity(1); // Start from 1 for each selection
    setTotalPrice(priceMapping[quantity]); // Reset total price for the selected quantity
  };

  // Handle increment/decrement for custom quantity
  const handleCustomQuantityChange = (operation) => {
    const step = 1; // Increment by 1 for each click
    const maxIncrement = maxIncrements[selectedQuantity]; // Get max increment based on the supply available

    let newQuantity =
      operation === "increment" ? customQuantity + step : customQuantity - step;

    // Ensure the custom quantity is within the range based on available supply
    if (newQuantity >= 1 && newQuantity <= maxIncrement) {
      setCustomQuantity(newQuantity);
      setTotalPrice(newQuantity * priceMapping[selectedQuantity]); // Update total price
    }
  };

  const getNftImage = () => {
    return nftImages[selectedQuantity] || "placeholder.png";
  };

  const currentPrice = priceMapping[selectedQuantity]; // Get price based on selected quantity

  // Format the total price correctly
  const formattedTotalPrice = totalPrice.toFixed(2) + " USDT";

  return (
    <div className="flex flex-col items-center p-10 rounded-lg w-full max-w-6xl mx-auto">
      <div className="flex w-full space-x-8">
        {/* Left Box: Details */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          {/* Quantity Buttons */}
          <div className="flex justify-between mb-6">
            {/* Top Left: Title */}
            <h1 className="text-2xl font-bold">Buy Trees</h1>
            {/* Top Right: Quantity Buttons */}
            <div className="flex space-x-2">
              {[1, 10, 100, 300, 600].map((quantity) => (
                <button
                  key={quantity}
                  className={`px-4 py-2 rounded-lg text-white font-medium text-sm ${
                    selectedQuantity === quantity
                      ? "bg-[#1EE487]"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleQuantityButton(quantity)}
                >
                  {quantity}
                </button>
              ))}
            </div>
          </div>

          {/* Details Section with Updated Styling */}
          {[
            { label: "Selected", value: `${customQuantity} tree${customQuantity > 1 ? "s" : ""}` },
            {
              label: "Supply",
              value: `${supplyMapping[selectedQuantity].available}/${supplyMapping[selectedQuantity].total}`,
            },
            { label: "Price", value: `${currentPrice.toFixed(2)} USDT` },
            { label: "Total Price", value: `${formattedTotalPrice}` },
            { label: "Public Round", value: "Finished" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between py-3 items-center text-gray-600 text-lg"
            >
              <span className="text-[#B5B5B5] font-semibold">{item.label}</span>
              <div className="flex items-center flex-grow mx-4">
                <hr className="flex-grow border-dotted border-t-2 border-gray-300 opacity-50" />
              </div>
              <span>{item.value}</span>
            </div>
          ))}

          {/* Bottom Section: Increment/Decrement and Connect Wallet */}
          <div className="mt-6 flex items-center justify-between">
            {/* Connect Wallet */}
            <button className="px-7 py-3 bg-[#1EE487] text-black font-semibold rounded-lg text-sm">
              Connect Wallet
            </button>

            {/* Increment/Decrement */}
            <div className="flex items-center space-x-4">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-lg disabled:opacity-50"
                onClick={() => handleCustomQuantityChange("decrement")}
                disabled={customQuantity <= 1}
              >
                -
              </button>
              <span className="text-xl font-semibold">{customQuantity}</span>
              <button
                className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg ${
                  customQuantity >= maxIncrements[selectedQuantity] ||
                  maxIncrements[selectedQuantity] === 0
                    ? "bg-gray-300 text-gray-400"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleCustomQuantityChange("increment")}
                disabled={
                  customQuantity >= maxIncrements[selectedQuantity] ||
                  maxIncrements[selectedQuantity] === 0
                }
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Right Box: Photo */}
        <div className="w-1/3 bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
          <img
            src={getNftImage()}
            alt="Tree NFT"
            className="object-contain h-7/7 w-7/7"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyTrees;
