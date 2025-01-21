import React from "react";
import PitchImg from "../assets/pitchdeck.jpg";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const Docs = () => {
  const documents = [
    {
      title: "Our Pitch Deck With all the vital Information",
      description: "View the full document.",
      date: "2024-03-15",
      category: "Pitch Deck",
      fileType: "PDF",
      link: "https://nftforest.ge/media/NFT-Forest.pdf",
    },
    // {
    //   title: "Certificate of Incorporation in Uzbekistan",
    //   description: "Legal incorporation certificate for our Uzbekistan entity.",
    //   date: "2024-03-15",
    //   category: "Legal",
    //   fileType: "PDF",
    //   link: "https://web3eco.io/wp-content/uploads/2024/04/Trade-register-extract.pdf",
    // },
    // {
    //   title: "Certificate of Incorporation in Uzbekistan",
    //   description: "Legal incorporation certificate for our Uzbekistan entity.",
    //   date: "2024-03-15",
    //   category: "Legal",
    //   fileType: "PDF",
    //   link: "https://web3eco.io/wp-content/uploads/2024/04/Trade-register-extract.pdf",
    // },
    // {
    //   title: "Certificate of Incorporation in Uzbekistan",
    //   description: "Legal incorporation certificate for our Uzbekistan entity.",
    //   date: "2024-03-15",
    //   category: "Legal",
    //   fileType: "PDF",
    //   link: "https://web3eco.io/wp-content/uploads/2024/04/Trade-register-extract.pdf",
    // },
    // Add more document details here
  ];

  return (
    <section id="documents" className="bg-white py-16 px-8 lg:px-32">
      <Link
        to={"/"}
        className="absolute flex gap-x-1 text-black items-center left-5 top-5 p-2 text-center bg-white rounded-lg border-none"
      >
        <FaChevronLeft color="black" />
        Back
      </Link>
      <h2 className="text-gray-800 text-5xl font-bold mb-10 text-center">
        <span className="text-emerald-500">Investor Documents</span>
      </h2>
      <p className="text-gray-600 text-lg text-center mb-12">
        Explore our collection of essential documents for investors, including
        legal certificates, land agreements, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="relative h-40 bg-gray-300 flex items-center justify-center">
              <img
                src={PitchImg}
                alt={doc.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Document Info */}
            <div className="p-5">
              <h3 className="text-gray-800 text-xl font-semibold mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
              <div className="text-gray-500 text-xs mb-2">
                <span className="block">
                  <strong>Category:</strong> {doc.category}
                </span>
                <span className="block">
                  <strong>Date:</strong> {doc.date}
                </span>
                <span className="block">
                  <strong>File Type:</strong> {doc.fileType}
                </span>
              </div>
              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-emerald-500 font-medium mt-2"
              >
                View Document
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      {/* <div className="text-center mt-16">
        <a
          href="/all-documents.zip"
          className="bg-emerald-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-emerald-600 transition-colors duration-300"
        >
          Download All Documents
        </a>
      </div> */}
    </section>
  );
};

export default Docs;
