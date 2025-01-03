import React from "react";

const BusinessPlanTimeline = () => {
  return (
    <div className="bg-[#1E1E1E] text-white py-28 px-4">
      <h2 className=" px-[130px] text-4xl py-[20px] font-sans ">
        <span className="text-[#A8FF50]">BUSINESS PLAN</span> OF THE PROJECT
      </h2>
      <div className="max-w-screen-xl mx-auto">
        {/* Timeline Wrapper */}
        <div className="relative min-h-[200px] mt-20">
          {/* Horizontal Line */}
          <div className="absolute w-[92%] ml-8 h-[0.4px] bg-gray-700 top-16 transform -translate-y-1/2"></div>

          <div className="absolute w-0.5 h-12 bg-white top-12 left-60"></div>
          <div className="absolute w-0.5 h-12 bg-white top-12 left-[36.5%]"></div>
          <div className="absolute w-0.5 h-12 bg-white top-12 left-[54.5%]"></div>
          <div className="absolute w-0.5 h-12 bg-white top-12 left-[72%]"></div>

          {/* Blue Dot at the Start */}
          <div className="absolute left-8 top-16 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>

          {/* Timeline Content */}
          <div className="flex gap-20 relative">
            {/* NOW */}
            <div className="flex ml-14 flex-col items-center">
              <div className="text-center flex mb-4">
                <img
                  src="https://flagcdn.com/w40/ge.png"
                  alt="Uzbekistan Flag"
                  className="w-9 h-6 mx-auto mb-1"
                />
                <p className="ml-3 text-xl">+230 HA</p>
              </div>
              <p className="mt-12 ml-6 text-3xl font-sans">NOW</p>
            </div>

            {/* 2025 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                {/* Spain Flag */}
                <div className="absolute left-0 top-[-50px] flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/es.png"
                    alt="Spain Flag"
                    className="w-9 h-6"
                  />
                  <p className="text-xl">+1,000 HA</p>
                </div>
                {/* Thailand Flag */}
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/md.png"
                    alt="Thailand Flag"
                    className="w-9 h-6"
                  />
                  <p className="text-xl">+10,000 HA</p>
                </div>
              </div>
              <p className="text-3xl ml-6  mt-8 font-sans">2025</p>
            </div>

            {/* 2026 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                {/* Turkey Flag */}
                <div className="absolute left-0 top-[-50px] flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/tr.png"
                    alt="Turkey Flag"
                    className="w-9 h-6"
                  />
                  <p className="text-xl">+10,000 HA</p>
                </div>
                {/* Uzbekistan Flag */}
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/ro.png"
                    alt="Uzbekistan Flag"
                    className="w-9 h-6"
                  />
                  <p className="text-xl">+10,000 HA</p>
                </div>
              </div>
              <p className="text-3xl ml-6 mt-8 font-sans">2026</p>
            </div>

            {/* 2027 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                {/* Spain Flag */}
                <div className="absolute left-0 top-[-50px] flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/es.png"
                    alt="Spain Flag"
                    className="w-9 h-6"
                  />
                  <p className="text-xl">+10,000 HA</p>
                </div>
                {/* Italy Flag */}
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/ua.png"
                    alt="Italy Flag"
                    className="w-9 h-6"
                  />
                  <p className="text-xl">+10,000 HA</p>
                </div>
              </div>
              <p className="text-3xl ml-8 mt-8 font-sans">2027</p>
            </div>

            {/* 2028-2031 */}
            <div className="flex flex-col items-center">
              <div className="mb-8">
                <p className="absolute left-200 top-[-58px]  text-lg flex text-[#43CDEC]">
                  Representation <br /> in 8-10 countries
                </p>
                <div className="text-lg font-bold  mb-1">
                  +100,000 HA
                </div>
              </div>

              <p className="text-3xl mt-7 ml-6 font-sans">2028-2031</p>
            </div>
          </div>

          {/* Arrow at the End of Timeline */}
          {/* Arrow at the end of the line */}
          <div className="absolute right-16 top-[62px] transform -translate-y-1/2 text-gray-300 font-bold text-2xl">
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanTimeline;
