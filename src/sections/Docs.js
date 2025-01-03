import React from "react";
import document from "../assets/document.png";

const Docs = () => {
  return (
    <section
      // This ID links the navigation item to this section
      id="documents"
      className="bg-[#fff] mt-[200px] md:mt-[100px] lg:mt-[50px] py-12 px-[20px] md:px-[50px] xl:px-[170px]"
    >
      <h2 className="text-gray text-4xl font-bold mb-8">
        <span className="text-emerald-500">Documents</span>
      </h2>
      <div className="flex flex-col xl:flex-row space-x-0">
        {[
          "Land auction in Uzbekistan",
          "Certificate of Incorporation in Uzbekistan",
          "Land lease agreement",
          "Certificate of Incorporation in Singapore",
          "Land coordinates",
        ].map((title, index) => (
          <a
            key={index}
            href="https://web3eco.io/wp-content/uploads/2024/04/Trade-register-extract.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#202020] rounded-none shadow-lg overflow-hidden group w-full h-[200px] xl:h-[300px]" // Adjusted height to 300px
          >
            {/* Thumbnail Image */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={document}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:blur-none blur-sm"
              />
            </div>

            {/* Arrow Icon */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 group-hover:animate-fadeOut transition-opacity duration-1000">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray transform rotate-135" // Top-right arrow
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>

            {/* Document Title */}
            <p className="absolute bottom-0 left-0 right-0 text-gray text-sm p-2 bg-gradient-to-t from-gray to-transparent text-center transition-all duration-300 ease-in-out group-hover:animate-disappearDownSlow">
              {title}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Docs;
