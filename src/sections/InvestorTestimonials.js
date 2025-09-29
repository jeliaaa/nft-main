import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Mock data for investors
const investorQuotes = [
  {
    name: "George Gvazava",
    profit: "$1,000",
    quote:
      "Investing in Paulownia trees was the best decision I ever made. The returns have been incredible!",
    joined: "September 15, 2025",
  },
];

export default function InvestorTestimonials() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-8">
          What Do <span className="text-emerald-400">They</span> Say
        </h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {investorQuotes.map((investor, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <p className="text-lg italic text-gray-600 mb-4">
                  "{investor.quote}"
                </p>
                <div className="text-sm text-gray-500 mb-2">
                  Joined: {investor.joined}
                </div>
                <h3 className="text-lg font-semibold">{investor.name}</h3>
                {/* <div className="text-green-600 font-bold">
                  Profit: {investor.profit}
                </div> */}
              </div>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg
              width={50}
              height={50}
              viewBox="0 0 48 48"
              ref={progressCircle}
            >
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent} className="text-black"></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
