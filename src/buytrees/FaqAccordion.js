import React, { useState } from "react";

const faqData = [
  {
    question: "What are tokenized trees of Web3eco from a legal standpoint?",
    answer:
      "A Web3eco tokenized asset represents the right to a real tree growing on the project's plantations in Uzbekistan. The number of tokenized trees is limited to the number of actual Paulownia trees. To receive income from timber and by-products in USDT, an investor must complete KYC (Know Your Customer) and sign a service contract for tree maintenance with Web3eco AG on the investment platform's personal account by 01.01.2026",
  },
  {
    question: "Are you selling real or virtual plots of land with trees?",
    answer:
      "We sell plots of land with trees in the real world. The trees we sell are tokenized, that is, the rights to make a profit on them are converted into tokens and entered into the blockchain. Everyone who owns the token becomes the owner of the tree and the legal right to receive the profit from the investment",
  },
  {
    question: "What protection and guarantees are there for investors?",
    answer:
      "Firstly, the project is officially registered in Switzerland — the safest jurisdiction for investment. There is a strict offer agreement created according to the Swiss regulator. All calculations are carried out through the blockchain, which avoids intermediaries and unnecessary commissions. Secondly, our project is not some kind of investment token veiled as a utility token, as many projects do. Tokenized Tree is an officially registered security that gives the right to receive a profit.",
  },
  {
    question: "Tell us at the level of a simple user, what is Web3Eco?",
    answer:
      "We are a project that allows you to invest in the environment, purchase your first plot of land and make a huge contribution to the future of the planet transparently and safely. Web3Eco solves 2 problems: environmental and investment. Thanks to the effectiveness of paulownia, it is a useful environmentally friendly and nature-saving business. By investing from just $75 you can get 300% profit over a 6-year plantation growth cycle.",
  },
  {
    question: "How can you confirm that the site belongs to you?",
    answer:
      "We have documentary evidence of ownership of a plot of land, officially registered in the cadastre of Uzbekistan. You can view these documents via this link. Moreover, we are always happy to give a tour of our plantation to all our investors. Contribute to high-value",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 px-4 rounded-lg w-full mx-auto">
      <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">
        FAQ
      </h1>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg bg-white  overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-lg font-medium text-gray-800">
                {item.question}
              </span>
              <span className="text-gray-500 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`transition-all duration-400 ease-in-out ${
                openIndex === index
                  ? "max-h-[300px] opacity-100 p-4"
                  : "max-h-0 opacity-0 p-0"
              } overflow-hidden`}
            >
              <p className="text-base text-[#9B9B9B]">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
