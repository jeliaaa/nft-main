import { useState } from "react";
import { Link } from "react-router-dom"; // You can use Heroicons for the hamburger and close icons.
import logo from "./assets/nftforest_logo_dark.png"; // Logo image
import { FaBarsStaggered, FaX } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#fff] bg-opacity-80 text-[#7A7A7A] fixed top-0 left-0 w-full z-20">
      <div className="flex items-center justify-between px-6 xl:px-[170px] py-6 header_wrapper">
        {/* Logo */}
        <img
          src={logo}
          alt="NFTforest"
          className="w-16 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        {/* Burger Icon */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaX className="w-8 h-8" />
            ) : (
              <FaBarsStaggered className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } xl:flex xl:items-center xl:space-x-10 text-lg absolute xl:static top-full left-0 w-full xl:w-auto bg-[#fff] xl:bg-transparent py-6 xl:py-0 px-6 xl:px-0`}
        >
          {["About Us", "Team", "Media", "FAQ", "Benefits"].map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
              className="block xl:inline-block text-center hover:text-gray-300 transition-colors py-2"
            >
              {category}
            </a>
          ))}
        </nav>

        {/* Language Options and Button */}
        <div className="hidden xl:flex items-center space-x-8">
          <div className="flex space-x-4">
            <span className="text-emerald-500 text-lg">ENG</span>
            <span className="text-gray text-lg">GE</span>
          </div>

          <Link to="https://app.nftforest.ge">
            <button className="border-2 border-emerald-500 text-emerald-500 py-3 px-8 text-lg rounded-3xl hover:bg-emerald-500 hover:text-white transition-colors">
              Buy Trees
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-700"></div>
    </header>
  );
};

export default Header;
