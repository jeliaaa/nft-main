import React from "react";
import zura from "../assets/zura.jpg"; // Profile image
import tree from "../assets/tree.png"; // Tree image
import { FaTree } from "react-icons/fa";
import { Link } from "react-router-dom";
const MainHero = () => {
  return (
    <main className="flex relative justify-between flex-wrap px-[20px] xl:px-[170px] mt-[150px] h-[80dvh]">
      {/* Heading Section */}
      <div className="z-10 text-gray flex flex-col space-y-6 w-full xl:w-[50%]">
        <h1 className="text-5xl font-bold leading-tight">
          Invest In A <span className="text-emerald-400">Healthy Future</span>
          {/* <span className="text-[#3D9E24]">by Saving the Planet</span> */}
        </h1>
        <div className="text-xl flex items-center">
          {/* Text and Button Inline */}
          <p className="mt-8 bg-emerald-700 p-4 text-white rounded-md shadow-xl">
            Tokenized Paulownia business plantations are a charitable investment
            that will yield you approximately ~300% profit over 6 years.
          </p>
          {/* <button className="border-2 border-[#3D9E24] mt-8 text-[#3D9E24] py-7 px-20 text-xl rounded-[50px] hover:bg-[#3D9E24] hover:text-gray transition-colors relative z-20 ml-10">
              Participate
            </button> */}
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex-col flex bg-emerald-500 rounded-md shadow-2xl w-fit p-5 items-center justify-center">
            <img
              src={zura}
              alt="Zurab Meskhidze"
              className="w-[100px] h-[100px] rounded-full border-[2px] border-gray object-cover"
            />
            <div className="">
              <p className="text-gray text-center">Zurab Mekhidze</p>
              <p className="text-[#fff] text-center">Founder of Nftforest</p>
            </div>
          </div>
          <Link
            className="xl:absolute xl:mt-0 mt-2 border-emerald-400 border-2 text-black font-bold p-4 rounded-lg z-20 right-10 bottom-0 hover:bg-emerald-400 hover:border-none"
            to={"/paulownia_info"}
          >
            What is Paulownia?
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto custom-scrollbar pb-2">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div className="flex-col flex-none flex border-2 border-emerald-400 rounded-md w-[200px] h-[250px] p-5 items-center justify-center">
              <FaTree
                style={{
                  stroke: "green", // Set border color
                  strokeWidth: "9", // Set border thickness
                  fill: "transparent", // Remove fill color
                  width: "100px",
                  height: "100px",
                }}
              />
              <p className="mt-3 text-emerald-400 font-bold text-center">
                Tree Growth
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tree Image Positioned Behind Button and Text */}
      {/* <div
          className="absolute top-[-100px] left-[740px] w-[720px] h-[948px] bg-cover bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url(${tree})`,
            zIndex: "0",
          }}
        ></div> */}

      {/* Paulownia Description Box */}
      {/* <div className="absolute top-[685px] left-[870px] w-[220px] bg-[#202020] text-gray p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">Paulownia</h2>
          <p className="mt-4 text-m leading-tight">
            It's one of the best <br />
            <span className="text-[#3D9E24]">"filters," absorbing</span> <br />
            <span className="text-[#3D9E24]">&gt;300 kg of CO₂</span> <br />
            per growth cycle.
          </p>
        </div> */}
      <div className="w-1/2 h-full xl:block hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url(${tree})`,
            zIndex: "0",
          }}
        ></div>
      </div>

      {/* <div className="relative z-10 mt-[120px] w-[400px] h-[250px] bg-gradient-to-b from-[#035B2E] to-[#092818] text-gray p-6 rounded-lg shadow-lg flex items-center justify-center">
          {/* Gradient Box Content */}
      {/* <div className="text-xl text-center">
            <p>We’ve created a new</p>
            <p>way to invest in the</p>
            <p>future of the planet.</p>
            <a
              href="#videos"
              className="flex items-center space-x-2 text-[#3D9E24] hover:underline mt-4 justify-center"
            >
              <span>Watch the video</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div> */}

      {/* Invisible Box for Profile Section */}
      {/* <div className="absolute -right-[50px] top-[40%] transform -translate-y-1/2 flex items-center">
            {/* <div className="relative">
              <img
                src={zura}
                alt="Zurab Meskhidze"
                className="w-[100px] h-[100px] rounded-full border-[2px] border-gray object-cover"
              />
              <div className="absolute left-[120px] top-1/2 transform -translate-y-1/2 w-[200px]">
                <p className="text-gray text-sm">Zurab Mekhidze</p>
                <p className="text-[#3D9E24] text-sm">Founder of Nftforest</p>
              </div>
            </div> */}
      {/*  </div>
        </div> */}
    </main>
  );
};

export default MainHero;
