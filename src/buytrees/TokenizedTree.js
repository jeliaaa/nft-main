import React from "react";
import bigLeaves from "../assets/big_leaves.png"; // Update the path as necessary
import { FaTree, FaDollarSign } from "react-icons/fa";

const TokenizedTree = () => {
  return (
    <div
      className="w-full max-w-6xl mx-auto p-6 rounded-lg bg-black relative text-white"
      style={{
        backgroundImage: `url(${bigLeaves})`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Content */}
      <div className="flex flex-col">
        {/* Left Section */}
        <div className="w-full">
          <h1 className="text-3xl font-extrabold mb-3">Tokenized Tree</h1>
          <ul className="list-disc font-semibold pl-6 space-y-2 text-sm leading-tight">
            <li>Minimum lot from 75$ (1 Tree)</li>
            <li>Forecast profit per tree 300$ from timber sales (2029)</li>
            <li>Each Tree is farming $ERA</li>
            <li>Sign service agreement to get income in USDT from Real Tree</li>
            <li>Tokenized Tree can be sold on any marketplace</li>
            <li>
              To purchase you can just mint Tree on this website or{" "}
              <span className="text-[#1EE487] cursor-pointer hover:underline">
                contact the support
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Statistic Boxes Section */}
      <div className="flex flex-col space-y-3 mt-6 md:space-y-0 md:space-x-4 md:flex-row">
        {/* Trees Sold Box */}
        <div
          className="flex items-center p-4 rounded-lg space-x-3"
          style={{
            backgroundColor: "rgba(11, 50, 53, 0.8)", // Transparent RGB for first box
          }}
        >
          <FaTree className="text-[#1EE487] text-3xl" />
          <div>
            <span className="block text-2xl font-bold text-[#1EE487]">
              &gt;9 700
            </span>
            <span className="text-sm">Trees ever sold</span>
          </div>
        </div>

        {/* Total Sales Box */}
        <div
          className="flex items-center p-4 rounded-lg space-x-3"
          style={{
            backgroundColor: "rgba(30, 30, 30, 0.8)", // Transparent RGB for second box
          }}
        >
          <FaDollarSign className="text-white text-3xl" />
          <div>
            <span className="block text-2xl font-bold text-white">
              &gt;$600 000
            </span>
            <span className="text-sm">Total sales of trees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenizedTree;
