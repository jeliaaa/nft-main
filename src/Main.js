import React from "react";
import xeebimiwaze from "./assets/xeebimiwaze.png";
import Diagram from "./sections/Diagram";
import BusinessPlanTimeline from "./sections/BusinessPlanTimeline";
import MediaSection from "./sections/MediaSection";
import VideoGallery from "./sections/VideoGallery";
import FAQ from "./sections/FAQ";
import { FaCoffee, FaMapMarkerAlt, FaEnvelope, FaTree } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./Header";
import MainHero from "./sections/MainHero";
import WorkingPrinciple from "./sections/WorkingPrinciple";
import "./index.css";
import TeamMembers from "./sections/TeamMembers";
import Roadmap from "./sections/Roadmap";
import SDGsSection from "./sections/SDGs";
import Benefits from "./sections/Benefits";
import InvestorTestimonials from "./sections/InvestorTestimonials";

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
      <Header />
      <MainHero />
      <div id="about-us" className="h-16" />
      <WorkingPrinciple />
      <section className="py-20 px-2 lg:px-[170px] text-gray flex items-center flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="lg:max-w-[50%]">
          {/* Title */}
          <h3 className="text-xl font-bold uppercase mb-4">Plot</h3>
          <h2 className="text-6xl font-bold text-emerald-500 mb-8">
            1 Hectare
          </h2>

          {/* Details */}
          <div className="flex items-center gap-6 mb-8">
            <div className="rounded-3xl px-6 py-4 shadow-lg flex flex-col items-center">
              <div className="flex">
                <FaTree color="#10B981" size={40} />
                <div className="text-gray ml-4 flex items-center text-xl ">
                400 trees
                </div>
              </div>
            </div>

            <div>
              <div className="text-4xl text-emerald-500 font-bold">60 tons</div>
              <p className="text-lg ml-4 text-gray">CO2 consumption per year</p>
            </div>
          </div>

          {/* Invest Button */}
          <Link to="https://app.nftforest.ge">
            <button className="border-2 border-emerald-500 text-emerald-500 py-3 px-14 text-lg font-semibold rounded-md hover:bg-emerald-500 hover:text-white transition-colors">
              Invest
            </button>
          </Link>
        </div>
        {/* Right Section */}
        <div className="lg:w-[45%] flex justify-center">
          <img
            src={xeebimiwaze}
            alt="Plot visualization"
            className="w-full max-w-[570px] object-contain"
          />
        </div>
      </section>
      <SDGsSection />
      <Benefits />
      <Roadmap />
      <TeamMembers />
      <BusinessPlanTimeline />
      <Diagram />
      <InvestorTestimonials />
      <div id="media" className="h-24" />
      <MediaSection />
      <div id="videos" className="h-28"></div>
      <VideoGallery />
      <div id="faq" className="h-20" />
      <FAQ />
      <section
        id="documents"
        className="bg-white mt-32 md:mt-14 py-20 px-3 sm:px-28 lg:px-[170px] text-gray border-y-2 flex-col"
      >
        <h2 className="text-3xl mb-0 md:text-5xl font-bold text-center md:text-left">
          You can view all the{" "}
          <span className="text-emerald-500">
            Pitch Deck, Documents and Legal information
          </span>{" "}
          here.
        </h2>
        <Link
          to={"/documents"}
          className="text-emerald-500 text-md md:text-2xl xl:text-4xl underline hover:no-underline hover:text-black mt-5"
        >
          View
        </Link>
      </section>
      <div className="lg:px-[170px] ">
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
