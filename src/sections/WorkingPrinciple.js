import React from "react";
import { FaCoins, FaLeaf, FaLock, FaSeedling } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSeedling size={100} color="#10B981" />,
    text: (
      <>
        We{" "}
        <span className="text-[#00F0FF]">
          have tokenized a portion of our plantation
        </span>{" "}
        by issuing tokenized trees (the number is limited to the number of
        trees).
      </>
    ),
  },
  {
    id: 2,
    icon: <FaLeaf size={100} color="#10B981" />,
    text: (
      <>
        Holders of tokenized trees{" "}
        <span className="text-[#00F0FF]">
          gain access to exclusive investment opportunities.
        </span>
      </>
    ),
  },
  {
    id: 3,
    icon: <FaCoins size={100} color="#10B981" />,
    text: (
      <>
        <span className="text-[#00F0FF]">
          $ERA tokens are required to purchase
        </span>{" "}
        any tokenized assets on the platform.
      </>
    ),
  },
  {
    id: 4,
    icon: <FaLock size={100} color="#10B981" />,
    text: (
      <>
        Tokenized trees give their holders access to{" "}
        <span className="text-[#00F0FF]">
          exclusive investment opportunities.
        </span>
      </>
    ),
  },
];

const WorkingPrinciple = () => {
  return (
    <section className="bg-gray-600 py-20 px-3 sm:px-28 lg:px-[170px] text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 md:mb-20 text-center md:text-left">
        How does it <span className="text-emerald-500">work?</span>
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-y-10 gap-x-12 relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex justify-center items-center">
                {step.icon}
              </div>
              <p className="text-base md:text-lg w-full lg:w-[340px]">
                {step.text}
              </p>
              <svg
                className={`hidden md:block transform -translate-x-1 text-emerald-500 w-36 h-6`}
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
            </div>

            {/* Vertical Arrow (For small screens) */}
            {index < steps.length - 1 && (
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
            )}

            {/* Horizontal Arrow (For md and larger screens) */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WorkingPrinciple;
