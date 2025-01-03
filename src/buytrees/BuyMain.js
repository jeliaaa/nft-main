import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import InvestmentPlatform from './InvestmentPlatform';
import TokenizedTreeSteps from './TokenizedTreeSteps';
import ForecastProfit from './ForecastProfit';
import BuyTrees from './BuyTrees';
import logo from '../assets/nftforest_logo_dark.png';
import xIcon from '../assets/x_icon.png';
import telegramIcon from '../assets/tg_icon.png';
import discordIcon from '../assets/discord_icon.png';
import instagramIcon from '../assets/inst_icon.png';
import mountainIcon from '../assets/mountain_icon.png';
import TokenizedTree from './TokenizedTree';
import TokenizedCards from './TokenizedCards';
import FaqAccordion from './FaqAccordion';
import { FaCoffee, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const BuyMain = () => {
  // Create a ref for the BuyTrees section
  const buyTreesRef = useRef(null);

  // Scroll function to scroll to the BuyTrees section
  const scrollToBuyTrees = () => {
    if (buyTreesRef.current) {
      buyTreesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Effect to reset the scroll position to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll to top
  }, []);  // Empty dependency array ensures this runs only once when the component is mounted

  return (
    <div className="px-[170px] bg-[#F2F2F2]">
      <header className="flex justify-between items-center px-8 py-4">
        {/* Left Section: Logo and "Buy Tree" */}
        <div className="flex items-center space-x-4">
          {/* Wrap the logo in a Link component */}
          <Link to="/">
            <img src={logo} alt="Logo" className="w-12 h-12 cursor-pointer" />
          </Link>
          {/* "Buy Trees" Button with Mountain Icon */}
          <button
            className="flex items-center bg-black text-white py-2 px-2 rounded-xl"
            onClick={scrollToBuyTrees} // Add scroll function here
          >
            <img src={mountainIcon} alt="Mountain Icon" className="w-7 h-5" />
            <span className="font-semibold text-sm">Buy Trees</span>
          </button>
        </div>

        {/* Middle Section: Tagline */}
        <div className="hidden md:flex">
          <p className="text-gray-400 opacity-75 text-m">
            Make money save the planet 💸
          </p>
        </div>

        {/* Right Section: Icons and "Log In" */}
        <div className="flex items-center space-x-4">
          <img src={xIcon} alt="Close" className="w-4 h-4 cursor-pointer" />
          <img src={telegramIcon} alt="Telegram" className="w-4 h-4 cursor-pointer" />
          <img src={discordIcon} alt="Discord" className="w-4 h-4 cursor-pointer" />
          <img src={instagramIcon} alt="Instagram" className="w-4 h-4 cursor-pointer" />

          {/* Language Selector */}
          <div className="flex space-x-2 text-sm text-gray-500">
            <span className="cursor-pointer">En</span>
            <span className="cursor-pointer">Ru</span>
          </div>

          {/* "Log In" Button */}
          <button className="flex items-center space-x-2 bg-[#1EE487] text-white py-2 px-2 rounded-md hover:bg-green-600 transition">
            <div className="relative flex items-center justify-center w-5 h-5">
              <div className="mb-1.5 w-1.5 h-1.5 bg-[#5b615e] rounded-full"></div>
              <div className="absolute top-[11px] bg-[#5b615e] w-[11px] h-[8px] rounded-[70%]"></div>
            </div>
            <span className="text-sm font-semibold">Log In</span>
          </button>
        </div>
      </header>

      {/* Investment Platform Section */}
      <section className="mb-14">
        {/* Pass the scroll function to InvestmentPlatform */}
        <InvestmentPlatform onBuyTreeClick={scrollToBuyTrees} />
      </section>

      {/* Other Sections */}
      <section>
        <TokenizedTreeSteps />
      </section>

      <section>
        <ForecastProfit />
      </section>

      {/* Add the ref to the BuyTrees section */}
      <section ref={buyTreesRef}>
        <BuyTrees />
      </section>

      <section>
        <TokenizedTree />
      </section>

      <section className="mt-24">
        <TokenizedCards />
      </section>

      <section className="mt-24">
        <FaqAccordion />
      </section>

      <div className='px-[170px] '>
        <div className="p-6 rounded-lg text-center text-black">
          <h2 className="text-2xl text-black font-bold mb-4">WHERE WE WORK</h2>
          <p className="text-black text-base mb-6">
            Swing by for a cup of <FaCoffee className="inline text-gray-500" />, or leave us a note:
          </p>
          <div className="space-y-2">
            <p className="flex items-center text-black justify-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <span>Batumi, GE</span>
            </p>
            <p className="flex text-black items-center justify-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <span >Email: hello@nftforest.ge</span>
            </p>
          </div>
        </div>
      </div>

      <section className="h-4"></section>
    </div>
  );
};

export default BuyMain;
