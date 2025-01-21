import React from "react";
import arrowDecor from "../assets/arrowDecor.png"
const timelineData = [
  {
    year: "NOW",
    data: [
      { flag: "https://flagcdn.com/w40/ge.png", description: "+230 HA" },
    ],
  },
  {
    year: "2026",
    data: [
      { flag: "https://flagcdn.com/w40/es.png", description: "+1,000 HA" },
      { flag: "https://flagcdn.com/w40/md.png", description: "+10,000 HA" },
    ],
  },
  {
    year: "2027",
    data: [
      { flag: "https://flagcdn.com/w40/tr.png", description: "+10,000 HA" },
      { flag: "https://flagcdn.com/w40/ro.png", description: "+10,000 HA" },
    ],
  },
  {
    year: "2028",
    data: [
      { flag: "https://flagcdn.com/w40/es.png", description: "+10,000 HA" },
      { flag: "https://flagcdn.com/w40/ua.png", description: "+10,000 HA" },
    ],
  },
  {
    year: "2028-2031",
    data: [
      {
        description: "+100,000 HA",
        additionalInfo: "Representation in 8-10 countries",
      },
    ],
  },
];

const BusinessPlanTimeline = () => {
  return (
    <section className="text-black py-28 px-4">
      <h2 className="px-[130px] text-4xl py-[20px] capitalize mb-10 lg:mb-0 font-sans">
        <span className="text-emerald-500">bussines timeline </span> of the project
      </h2>
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-center lg:gap-20 relative lg:mt-20">
          <img className="lg:hidden absolute h-[20%] w-[15%] left-1 sm:left-10" src={arrowDecor} alt="." />
          <img className="lg:hidden absolute h-[20%] w-[15%] right-1 top-52 sm:right-10 rotate-180" src={arrowDecor} alt="." />
          <img className="lg:hidden absolute h-[20%] w-[15%] left-1 top-96 sm:left-10" src={arrowDecor} alt="." />
          <img className="lg:hidden absolute h-[20%] w-[15%] right-1 bottom-20 sm:right-10 rotate-180" src={arrowDecor} alt="." />
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-16 lg:mb-0 lg:relative"
            >
              <div className="mb-4 text-center border-x-2 px-5 border-emerald-500 lg:border-none">
                {item.data.map((entry, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 mb-2 lg:relative"
                  >
                    {entry.flag && (
                      <img
                        src={entry.flag}
                        alt="Flag"
                        className="w-9 h-6"
                      />
                    )}
                    <p className="text-xl">{entry.description}</p>
                  </div>
                ))}
                {item.data[0].additionalInfo && (
                  <p className="text-lg text-[#43CDEC]">
                    {item.data[0].additionalInfo}
                  </p>
                )}
              </div>
              <p className="text-3xl font-sans text-emerald-500 lg:border-r-2 lg:pr-2 border-emerald-500">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPlanTimeline;
