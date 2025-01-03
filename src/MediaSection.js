import React from "react";
// Import your Bitcoin image
import BitcoinImage from "./assets/bitcoin.webp"; // Adjust the path if necessary
import vcru from "./assets/vcru.webp"
import cryptoru from "./assets/cryptoru.webp"
import bytwork from "./assets/bytwork.webp"
import filipsvision from "./assets/filipsvision.webp"
import morningstar from "./assets/morningstar.webp"


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
      text: "Techbullion\n  Bridging Nature and Blockchain: Filipp Bolotov on Web3Eco’s Vision",
      link: "https://techbullion.com/bridging-nature-and-blockchain-filipp-bolotov-on-web3ecos-vision/",
    },
    {
      image: morningstar,
      text: "Morningstar\nWeb3Eco Unveils the Essence of Investing in Real-World Assets via NFTs",
      link: "https://www.morningstar.com/news/accesswire/811929msn/web3eco-unveils-the-essence-of-investing-in-real-world-assets-via-nfts",
    },
  ];

  return (
    <div className="bg-[#1E1E1E] text-white py-10 px-6">
      <h1 className="text-4xl font-sans text-white mb-16">
        <span className="text-[#A8FF50]">MEDIA </span>ABOUT US
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        {articles.map((article, index) => (
          <div
            key={index}
            className="relative bg-[#1E1E1E] border border-[#323232] rounded-[30px] shadow-lg"
            style={{
              width: "540px", // Box width
              height: "300px", // Box height
              padding: "10px", // Padding for spacing
            }}
          >
            {/* Image and hover text */}
            <div className="relative overflow-hidden w-full h-full rounded-[20px] group">
              <img
                src={article.image}
                alt="Article"
                className="w-full h-full object-cover rounded-md transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Text that appears on hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                <p className="text-[#A8FF50] text-lg font-semibold uppercase mb-2 tracking-wide">
                  {article.text.split("\n")[0]}
                </p>
                <p className="text-white text-sm font-normal px-4">
                  {article.text.split("\n")[1]}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8FF50] underline mt-2"
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
