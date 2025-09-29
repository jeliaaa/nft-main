import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import zura from "../assets/zura.jpg";
import eric from "../assets/eric.jpg";
import angela from "../assets/angela.jpg";
import diddy from "../assets/diddy.jpg";
import steve from "../assets/steve.jpg";

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Zurab Meskhidze",
      role: "CEO & Co-founder",
      description: "Businessman, Entrepreneur, Founder.",
      image: zura,
    },
    {
      name: "Eric D. Wade",
      role: "CTO & Co-founder",
      description:
        "Leading the company's growth and partnerships from scratch.",
      image: eric,
    },
    {
      name: "Angela Davis",
      role: "CFO & Co-Founder",
      description:
        "Driving the technical innovations and platform development.",
      image: angela,
    },
    {
      name: "Andrey Didenko",
      role: "Botanist & Advisor",
      description:
        "Growing the brand and engaging customers with innovative strategies.",
      image: diddy,
    },
    {
      name: "Steve Finikiotis",
      role: "Advisor",
      description:
        "Growing the brand and engaging customers with innovative strategies.",
      image: steve,
    },
  ];

  return (
    <section id="team" className="w-full max-w-6xl mx-auto py-10">
      <h2 className="text-center text-black text-4xl mb-10">
        GreWeCo <span className="text-emerald-500">Team</span>
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true, el: ".custom-pagination" }}
        spaceBetween={20}
        slidesPerView={3}
        className="relative mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={`Team Member ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {member.name}
              </h3>
              <p className="text-md text-emerald-500 mb-2">{member.role}</p>
              <p className="text-sm text-black px-4">{member.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="custom-pagination flex justify-center mt-6"></div>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px;
          height: 40px;
          background-color: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
        .custom-pagination .swiper-pagination-bullet {
          background: #10b981;
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 5px;
          border-radius: 50%;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #10b981;
          width: 30px;
          border-radius: 20px;
        }
      `}</style>
    </section>
  );
};

export default TeamMembers;
