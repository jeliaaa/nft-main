import React from "react";
import BitcoinImage from "../assets/bitcoin.webp";
import vcru from "../assets/vcru.webp";
import cryptoru from "../assets/cryptoru.webp";
import bytwork from "../assets/bytwork.webp";
import filipsvision from "../assets/filipsvision.webp";
import morningstar from "../assets/morningstar.webp";

const MediaSection = () => {
  const articles = [
    {
      image: BitcoinImage,
      text: "medium.com\nHow to find best rwa crypto projects with potential 100x? top altcoins for crypto portfolio in 2024",
      link: "https://medium.com/@JoshCryptoBard/how-to-find-best-rwa-crypto-projects-with-potential-100x-top-altcoind-for-crypto-portfolio-in-2024-b4775bd7671c",
    },
    {
      image: vcru,
      text: "VC\nHow to make money on NFTs in 2023-2024? Web3Eco. Interview with the entrepreneur who sold the company to Richard Branson",
      link: "https://vc.ru/u/1008961-bitcoin-bard/781224-kak-zarabotat-na-nft-v-2023-2024-godu-web3eco-intervyu-s-predprinimatelem-kotoryi-prodal-kompaniyu-richardu-brensonu",
    },
    {
      image: cryptoru,
      text: "Crypto\nA real case of tokenization of land and trees through NFT. Web3Eco. How did the founders sell the largest private Internet provider in Moscow Region to Richard Branson and become involved in ecology?",
      link: "https://crypto.ru/kejs-tokenizatsii-zemli-i-derevev-cherez-nft/",
    },
    {
      image: bytwork,
      text: "Bytwork\nHow Web3Eco sold a company with 600 employees to Richard Branson for more than 1 billion rubles. and tokenized real estate and trees through NFTs",
      link: "https://bytwork.com/articles/web3eco",
    },
    {
      image: filipsvision,
      text: "Techbullion\nBridging Nature and Blockchain: Filipp Bolotov on Web3Eco’s Vision",
      link: "https://techbullion.com/bridging-nature-and-blockchain-filipp-bolotov-on-web3ecos-vision/",
    },
    {
      image: morningstar,
      text: "Morningstar\nWeb3Eco Unveils the Essence of Investing in Real-World Assets via NFTs",
      link: "https://www.morningstar.com/news/accesswire/811929msn/web3eco-unveils-the-essence-of-investing-in-real-world-assets-via-nfts",
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
