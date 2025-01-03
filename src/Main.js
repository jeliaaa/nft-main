import React from "react";

import cxrili from "./assets/cxrili.png";
import xeebimiwaze from "./assets/xeebimiwaze.png";
import bluetree from "./assets/bluetree.png";
import Swiper from "./Swiper";
import Diagram from "./Diagram";
import BusinessPlanTimeline from "./BusinessPlanTimeline";
import MediaSection from "./MediaSection";
import VideoGallery from "./VideoGallery";
import FAQ from "./FAQ";
import { FaCoffee, FaMapMarkerAlt, FaEnvelope} from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./Header";
import MainHero from "./sections/MainHero";
import Docs from "./sections/Docs";
import WorkingPrinciple from "./sections/WorkingPrinciple";
import "./index.css"

const Main = () => {
  // const handleNavClick = (e, category) => {
  // e.preventDefault();
  // const targetId = category.toLowerCase().replace(/\s+/g, '-');
  // const targetElement = document.getElementById(targetId);

  // if (targetElement) {
  //   window.scrollTo({
  //     top: targetElement.offsetTop - 100, // Offset by 100px from the top
  //     behavior: 'smooth', // Smooth scrolling
  //   });
  // }
  // };

  return (
    <div className="bg-[#fff] min-h-screen relative overflow-hidden">
      {/* Header */}
      {/* <header className="bg-[#fff] bg-opacity-80 text-[#7A7A7A] fixed top-0 left-0 w-full z-20">
        <div className="flex items-center justify-between px-[170px] py-6">
          {/* Logo 
          <img
            src={web3eco}
            alt="Web3Eco Logo"
            className="w-32 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Navigation 
          <nav className="flex justify-center space-x-10 text-lg py-4">
            {["Documents", "About Us", "Business Model", "Media", "FAQ"].map(
              (category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-gray-300 transition-colors"
                >
                  {category}
                </a>
              )
            )}
          </nav>

          {/* Language Options and Button 
          <div className="flex items-center space-x-8">
            <div className="flex space-x-4">
              <span className="text-[#3D9E24] text-lg">ENG</span>
              <span className="text-gray text-lg">GE</span>
            </div>

            <Link to="/buymain">
              <button className="border-2 border-[#3D9E24] text-[#3D9E24] py-3 px-8 text-lg rounded-3xl hover:bg-[#3D9E24] hover:text-gray transition-colors">
                Buy Trees
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-700"></div>
      </header> */}
      <Header />
      {/* Main Content */}
      <MainHero />
      {/* <section id="documents" className="absolute top-[890px]" /> */}
      <Docs />
      {/* Advantages Section */}
      
      <div id="about-us" className="h-16" />
      <WorkingPrinciple />
      {/* Business Model Section */}
      <div id="business-model" className="h-16" />
      <section className="py-20 px-[170px] text-gray relative flex flex-col">
        <h2 className="text-5xl font-mono mb-8">
          <span className="text-[#A8FF50]">THE BUSINESS MODEL</span> OF
          PAULOWNIA PLANTATIONS:
        </h2>

        <div
          className="w-[1240px] h-[711px] object-cover bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${cxrili})`, // Ensure `cxrili` is correctly imported
          }}
        ></div>
      </section>
      <section className="py-20 px-[170px] text-gray flex items-center justify-between">
        {/* Left Section */}
        <div className="max-w-[50%]">
          {/* Title */}
          <h3 className="text-xl font-bold uppercase mb-4">Plot</h3>
          <h2 className="text-6xl font-bold text-[#A8FF50] mb-8">1 Hectare</h2>

          {/* Details */}
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-[#222222] rounded-3xl px-6 py-4 shadow-lg flex flex-col items-center">
              <div className="flex">
                <img
                  src={bluetree}
                  alt="tree icon"
                  className="w-14 h-14 object-contain"
                />
                <div className="text-gray ml-4 flex items-center text-xl ">
                  600 trees
                </div>
              </div>
            </div>

            <div>
              <div className="text-4xl text-[#47CFFF] font-bold">40 tons</div>
              <p className="text-lg ml-4 text-gray">CO2 consumption per year</p>
            </div>
          </div>

          {/* Invest Button */}
          <Link to="/buymain">
            <button className="border-2 border-[#A8FF50] text-[#A8FF50] py-5 px-14 text-lg font-semibold rounded-[40px] hover:bg-[#A8FF50] hover:text-gray transition-colors">
              Invest
            </button>
          </Link>
        </div>
        {/* Right Section */}
        <div className="w-[45%] flex justify-center">
          <img
            src={xeebimiwaze}
            alt="Plot visualization"
            className="w-full max-w-[570px] object-contain"
          />
        </div>
      </section>
      <section className="py-20 px-[160px] text-gray bg-[#fff]">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-[#A8FF50]">ROADMAP</span>
        </h2>

        <div className="space-y-16 relative">
          {/* First Row */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-[35px] h-[1.5px] bg-[#A8FF50]"></div>

            {/* Dots */}
            <div className="absolute left-0 right-0 top-[30px] flex items-center justify-between">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#A8FF50]"
                ></div>
              ))}
            </div>

            {/* Timeline Items */}
            <div className="flex justify-between items-start pt-12">
              {[
                "Restructuring with the assignment of the asset to the tokenized tree",
                "Release of a separate type of GSC security contract",
                "GSC listing on USA/EU exchanges",
                "Launch and listing of the $ERA token",
                "Farming (accruing) $ERA token to holders of tokenized tree",
              ].map((text, i) => (
                <div key={i} className="w-[18%] text-left">
                  <div className="flex items-center space-x-2 mb-2">
                    <p className="text-sm text-gray-400">Q4</p>
                    <p className="text-2xl font-bold text-gray">2024</p>
                  </div>
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>

            {/* Semicircle Connector to Second Row */}
            <div className="absolute bottom-[-105px] left-[88.5%]">
              <svg
                width="300"
                height="196"
                viewBox="0 0 250 160"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 10 Q 125 200 250 10"
                  stroke="#A8FF50"
                  fill="none"
                  strokeWidth="1"
                  transform="rotate(-90, 125, 80)"
                />
              </svg>
            </div>
          </div>

          {/* Second Row */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-[35px] h-[1.5px] bg-[#A8FF50]"></div>

            {/* Dots */}
            <div className="absolute left-0 right-0 top-[30px] flex items-center justify-between">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#A8FF50]"
                ></div>
              ))}
            </div>

            {/* Timeline Items */}
            <div className="flex justify-between items-start pt-12">
              {[
                "Establishing additional sources of income with the goal of $2,000 per hectare per year",
                "Tree insurance",
                "Tokenization of Web3Eco shares",
                "Organization of the secondary market for tokenized tree with a floor price by years until harvesting",
                "Registration of carbon credits",
              ].map((text, i) => (
                <div key={i} className="w-[18%] text-left">
                  <div className="flex items-center space-x-2 mb-2">
                    <p className="text-sm text-gray-400">Q1</p>
                    <p className="text-2xl font-bold text-gray">2025</p>
                  </div>
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>

            {/* Flipped Semicircle Connector to Third Row */}
            <div className="absolute bottom-[-105px] left-[-15.5%]">
              <svg
                width="300"
                height="240"
                viewBox="0 0 250 160"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 10 Q 125 200 250 10"
                  stroke="#A8FF50"
                  fill="none"
                  strokeWidth="1"
                  transform="rotate(90, 125, 80)"
                />
              </svg>
            </div>
          </div>

          {/* Third Row */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-[35px] h-[1.5px] bg-[#A8FF50]"></div>

            {/* Dots */}
            <div className="absolute left-0 right-0 top-[30px] flex items-center justify-between">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#A8FF50]"
                ></div>
              ))}
            </div>

            {/* Timeline Items */}
            <div className="flex justify-between items-start pt-12">
              {[
                "Registration of securities",
                "Registering your own exchange for security assets",
                "Preliminary contracts for the supply of timber",
                "Construction of a primary wood processing factory",
                "Construction of a secondary wood processing factory",
              ].map((text, i) => (
                <div key={i} className="w-[18%] text-left">
                  <div className="flex items-center space-x-2 mb-2">
                    <p className="text-sm text-gray-400">
                      {["Q3", "Q4", "Q2", "Q3", "Q4"][i]}
                    </p>
                    <p className="text-2xl font-bold text-gray">
                      {["2025", "2025", "2026", "2029", "2029"][i]}
                    </p>
                  </div>
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#222222]">
        <Swiper />
      </section>
      <section>
        <BusinessPlanTimeline />
      </section>
      <section>
        <Diagram />
      </section>
      <div id="media" className="h-24" />
      <section className="px-[170px]">
        <MediaSection />
      </section>
      <div id="videos" className="h-28"></div>
      <section>
        <VideoGallery />
      </section>
      <div id="faq" className="h-20" />
      <section>
        <FAQ />
      </section>
      <div className="px-[170px] ">
        <div className="bg-[#fff] p-6 rounded-lg text-center text-gray-500">
          <h2 className="text-2xl text-gray font-bold mb-4">WHERE WE WORK</h2>
          <p className="text-gray   text-base mb-6">
            Swing by for a cup of <FaCoffee className="inline text-gray-500" />,
            or leave us a note:
          </p>
          <div className="space-y-2">
            <p className="flex items-center text-gray  justify-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <span>Batumi, GE</span>
            </p>
            <p className="flex text-gray items-center justify-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <span>Email: hello@nftforest.ge</span>
            </p>
          </div>
        </div>
      </div>
      {/* Extra Space Below */}
      <div className="h-[10px]"></div> {/* Added space for future components */}
    </div>
  );
};

export default Main;
