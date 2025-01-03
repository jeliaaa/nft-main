import React from "react";
// import nergi from "../assets/nergi.png";
// import fotoli from "../assets/fotoli.png";
// import coinstack from "../assets/coinstack.png";
// import padlock from "../assets/padlock.png";
import { FaCoins, FaLeaf, FaLock, FaSeedling } from "react-icons/fa";

const WorkingPrinciple = () => {
  return (
    <section className="bg-white py-20 px-3 sm:px-28 lg:px-[170px] text-gray">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 md:mb-20 text-center md:text-left">
        How does it <span className="text-emerald-500">work?</span>
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-y-10 gap-x-12 relative">
        {/* Step 1 */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex justify-center items-center">
            {/* <img
              src={nergi}
              alt="Step 1 Icon"
              className="w-full h-full object-contain"
            /> */}
            <FaSeedling size={100} color="green" />
          </div>
          <p className="text-center md:text-lg w-full lg:w-[340px]">
            We{" "}
            <span className="text-[#00F0FF]">
              have tokenized a portion of our plantation
            </span>{" "}
            by issuing tokenized trees (the number is limited to the number of
            trees).
          </p>
        </div>

        {/* Vertical Arrow (For small screens) */}
        <svg
          className="md:hidden mx-auto text-emerald-500 w-6 h-36"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 64"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2v100m4-4l-4 4-4-4"
          />
        </svg>

        {/* Horizontal Arrow (For md and larger screens) */}
        <svg
          className="hidden md:block absolute top-[12%] left-1/2 transform -translate-x-1/2 text-emerald-500 w-36 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 85 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2 12h110m-4-4l4 4-4 4"
          />
        </svg>

        {/* Step 2 */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex justify-center items-center">
            {/* <img
              src={fotoli}
              alt="Step 2 Icon"
              className="w-full h-full object-contain"
            /> */}
            <FaLeaf size={100} color="green" />
          </div>
          <p className="text-base md:text-lg w-full lg:w-[340px]">
            Holders of tokenized trees{" "}
            <span className="text-[#00F0FF]">
              gain access to exclusive investment opportunities.
            </span>
          </p>
        </div>

        {/* Vertical Arrow (For small screens) */}
        <svg
          className="md:hidden mx-auto text-emerald-500 w-6 h-36"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 64"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2v100m4-4l-4 4-4-4"
          />
        </svg>

        {/* Step 3 */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex justify-center items-center">
            {/* <img
              src={coinstack}
              alt="Step 3 Icon"
              className="w-full h-full object-contain"
            /> */}
            <FaCoins size={100} color="green" />

          </div>
          <p className="text-base md:text-lg w-full lg:w-[340px]">
            <span className="text-[#00F0FF]">
              $ERA tokens are required to purchase
            </span>{" "}
            any tokenized assets on the platform.
          </p>
        </div>

        {/* Vertical Arrow (For small screens) */}
        <svg
          className="md:hidden mx-auto text-emerald-500 w-6 h-36"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 64"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2v100m4-4l-4 4-4-4"
          />
        </svg>

        {/* Horizontal Arrow (For md and larger screens) */}
        <svg
          className="hidden md:block absolute bottom-[7%] left-[42%] transform -translate-x-1/2 text-emerald-500 w-36 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 85 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M322 12H-30m4-4l-4 4 4 4"
          />
        </svg>

        {/* Step 4 */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex justify-center items-center">
            {/* <img
              src={padlock}
              alt="Step 4 Icon"
              className="w-full h-full object-contain"
            /> */}
            <FaLock size={100} color="green" />
          </div>
          <p className="text-base md:text-lg w-full lg:w-[340px]">
            Tokenized trees give their holders access to{" "}
            <span className="text-[#00F0FF]">
              exclusive investment opportunities.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingPrinciple;
