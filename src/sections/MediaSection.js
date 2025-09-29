import React from "react";
import EntrepreneurImage from "../assets/entrepreneur.png";
// import vcru from "../assets/vcru.webp";
// import cryptoru from "../assets/cryptoru.webp";
// import bytwork from "../assets/bytwork.webp";
// import filipsvision from "../assets/filipsvision.webp";
// import morningstar from "../assets/morningstar.webp";

const MediaSection = () => {
  const articles = [
    {
      image: EntrepreneurImage,
      text: "entrepreneur.com\nEnvironmental Care as the Driving Force of NFT Forest and the Startup's Future Plans",
      link: "https://www.entrepreneur.com/ka/zrdis-strategiebi/garemoze-zrunva/467558",
    },
    
  ];

  return (
    <div className="text-white sm:px-0 px-6">
      <h1 className="text-4xl font-sans text-black capitalize mb-16 text-center">
        <span className="text-emerald-500">media </span>about us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {articles.map((article, index) => (
          <div
            key={index}
            className="relative rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] shadow-lg group overflow-hidden border border-[#323232] bg-[#1E1E1E]"
          >
            {/* Image and hover text */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src={article.image}
                alt="Article"
                className="w-full h-full object-cover rounded-full transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Hover text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <p className="text-[#A8FF50] text-sm font-semibold uppercase mb-2 tracking-wide">
                  {article.text.split("\n")[0]}
                </p>
                <p className="text-white text-xs font-normal px-2">
                  {article.text.split("\n")[1]}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8FF50] underline mt-2 text-sm"
                >
                  Read
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSection;
