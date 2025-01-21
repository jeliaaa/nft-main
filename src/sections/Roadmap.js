import React from "react";

const Roadmap = () => {
  return (
    <section className="py-20 px-8 lg:px-40 text-gray bg-gray-600">
      <h2 className="text-4xl font-bold mb-16 text-center">
        <span className="text-emerald-500">Roadmap</span>
      </h2>

      <div className="space-y-20">
        {[
          {
            year: "2025",
            quarter: "Q4",
            items: [
              "Restructuring with the assignment of the asset to the tokenized tree",
              "Release of a separate type of GSC security contract",
              "GSC listing on USA/EU exchanges",
              "Launch and listing of our nft based token",
              "Farming (accruing) token to holders of tokenized tree",
            ],
          },
          {
            year: "2026",
            quarter: "Q1",
            items: [
              "Establishing additional sources of income with the goal of $2,000 per hectare per year",
              "Tree insurance",
              "Tokenization of Nftforest shares",
              "Organization of the secondary market for tokenized tree with a floor price by years until harvesting",
              "Registration of carbon credits",
            ],
          },
          {
            year: "2026-2029",
            quarters: ["Q3", "Q4", "Q2", "Q3", "Q4"],
            years: ["2026", "2026", "2027", "2029", "2029"],
            items: [
              "Registration of securities",
              "Registering your own exchange for security assets",
              "Preliminary contracts for the supply of timber",
              "Construction of a primary wood processing factory",
              "Construction of a secondary wood processing factory",
            ],
          },
        ].map((row, index) => (
          <div key={index} className="relative">
            {/* Line */}
            <div className="absolute inset-0 top-[35px] h-[1.5px] bg-emerald-500"></div>

            {/* Dots */}
            <div className="absolute inset-0 top-[30px] flex justify-between">
              {row.items.map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-emerald-500"
                ></div>
              ))}
            </div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-12">
              {row.items.map((text, i) => (
                <div key={i} className="text-left">
                  <div className="flex items-center space-x-2 mb-2">
                    <p className="text-sm text-emerald-400">
                      {row.quarters ? row.quarters[i] : row.quarter}
                    </p>
                    <p className="text-2xl font-bold text-white">
                      {row.years ? row.years[i] : row.year}
                    </p>
                  </div>
                  <p className="text-sm text-white">{text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
