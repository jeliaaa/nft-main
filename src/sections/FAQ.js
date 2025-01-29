import { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    } else {
      setOpenIndex(null);
    }
  };

  const faqData = [
    {
      question: 'Can you explain NFT Forest in simple terms?',
      answer: 'NFT Forest is a blockchain-based platform that allows people to invest in real trees and reforestation projects while earning returns from carbon credits and timber sales.',
    },
    {
      question: 'Are you selling real trees or just digital assets?',
      answer: 'NFT Forest sells real trees growing on physical land. Each tree is tokenized, meaning its ownership and profit rights are represented on the blockchain for transparency and security.',
    },
    {
      question: 'What guarantees and protections do users have?',
      answer: 'We ensure transparency and security through blockchain technology. Your investment is backed by real assets, and our smart contracts ensure that your ownership and profit rights are protected.',
    },
    {
      question: 'How can users verify the legitimacy of NFT Forest?',
      answer: 'All our assets and transactions are recorded on a decentralized blockchain, ensuring full transparency. You can verify tree ownership and project authenticity through smart contracts and public records.',
    },

      
    {
      question: 'How do investors make a profit with NFT Forest?',
      answer: 'Investors earn money through the sale of carbon credits, timber harvesting, and the appreciation of tokenized tree assets.',
    },

    {
      question: 'Where does NFT Forest generate revenue?',
      answer: 'NFT Forest makes revenue from carbon credit sales, timber sales, partnerships with businesses looking to offset emissions, and transaction fees on the platform.',
    },
    {
      question: 'Why are tokenized assets a better investment than traditional methods?',
      answer: 'Tokenized assets offer increased liquidity, security, and transparency. Unlike traditional investments, blockchain-based assets allow fractional ownership and real-time tracking of value.',
    },
    {
      question: 'Is NFT Forest a good investment if I have no blockchain knowledge?',
      answer: 'Absolutely! Our platform is designed to be user-friendly, so you don’t need technical expertise to invest in trees and earn returns.',
    },
    {
      question: 'Why did NFT Forest choose Paulownia trees?',
      answer: 'Paulownia is one of the fastest-growing trees, making it an excellent option for sustainable timber production and carbon sequestration. It offers high yields while having a low environmental impact.',
    },
    {
      question: 'Who is responsible for managing the trees and land?',
      answer: 'Our certified forestry partners handle tree planting, maintenance, and harvesting, ensuring compliance with environmental standards and sustainability best practices.',
    },
    {
      question: 'Can I visit the land where my trees are growing?',
      answer: 'Yes, NFT Forest provides GPS coordinates and tracking data for each plot. Investors may also arrange visits to partner plantations.',
    },
    {
      question: 'What happens if my trees get damaged or destroyed?',
      answer: 'We implement risk management strategies, including diversified plantations, insurance partnerships, and sustainable forestry practices to mitigate risks.',
    },
    {
      question: 'How does NFT Forest use blockchain technology?',
      answer: 'We tokenize trees and carbon credits, ensuring transparent ownership, real-time tracking, and secure transactions through blockchain.',
    },
    {
      question: 'Why is blockchain important for this project?',
      answer: 'Blockchain provides immutability, fraud prevention, and efficient digital ownership transfer, making the investment process transparent and secure.',
    },
    {
      question: 'How do I track my investment?',
      answer: 'You can monitor your trees, earnings, and environmental impact in real time via our platform, which integrates blockchain records and satellite data.',
    },
    {
      question: 'What happens to my NFT if I want to sell it?',
      answer: 'You can sell your NFT-backed tree ownership on our marketplace or other supported platforms, allowing you to exit the investment whenever you choose.',
    }
  ];

  return (
    <section className="w-full h-full py-12 px-1 md:px-20">
      <h2 className="text-3xl font-bold text-center capitalize text-emerald-500 mb-6">
        asnwers to the frequently asked questions
      </h2>
      <div className="max-w-full mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border-t-2 ${openIndex === index ? 'border-emerald-500' : 'border-gray-700'}`}
            onClick={() => toggleAccordion(index)} // Toggle on click
          >
            <div className="flex justify-between items-center py-4 px-6 cursor-pointer">
              <h3 className="text-gray-500 text-lg font-semibold w-[90%]" >
                {faq.question}
              </h3>
              <span className="text-emerald-500 transition-all transform duration-300 flex items-center w-[10%]" >
                {openIndex === index ? (
                  <FaTimes size={24} />
                ) : (
                  <FaPlus size={24} />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? 'max-h-[500px] opacity-100 py-4'
                  : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <div className="flex items-center px-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <p
                  className="text-gray-500 ml-2"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
            {/* Add bottom line only for the last FAQ item */}
            {index === faqData.length - 1 && <div className="border-b-2 border-gray-700"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;
