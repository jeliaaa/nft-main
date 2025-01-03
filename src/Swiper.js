import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import zura from './assets/zura.jpg';
import eric from './assets/eric.jpg';
import angela from './assets/angela.jpg';
import diddy from './assets/diddy.jpg';
import steve from './assets/steve.jpg';

const MySwiper = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <h2 className="text-center text-white text-4xl font-semibold mb-10">
        OUR <span className="text-[#A8FF50]">TEAM</span>
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true, el: ".custom-pagination" }}
        spaceBetween={20} // Adjust spacing for all screen sizes
        slidesPerView={3} // Default for larger screens
        className="relative mySwiper"
        breakpoints={{
          320: { // For mobile devices
            slidesPerView: 1, // Show 1 slide
            spaceBetween: 10, // Adjust spacing
          },
          640: { // For tablets
            slidesPerView: 2, // Show 2 slides
            spaceBetween: 15, // Adjust spacing
          },
          1024: { // For desktops
            slidesPerView: 3, // Default 3 slides
            spaceBetween: 20,
          },
        }}
      >
        {/* Team Member 1 */}
        <SwiperSlide>
          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <img src={zura} alt="Team Member 1" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Zurab Meskhidze</h3>
            <p className="text-md text-[#A8FF50] mb-2">COO & Co-Founder</p>
            <p className="text-sm text-white px-4">
              Multi-businessman, investor. Sold the company to Richard Branson (Smile - Virgin Connect deal).
            </p>
          </div>
        </SwiperSlide>

        {/* Team Member 2 */}
        <SwiperSlide>
          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <img src={eric} alt="Team Member 2" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Eric D. Wade</h3>
            <p className="text-md text-[#A8FF50] mb-2">CEO & Founder</p>
            <p className="text-sm text-white px-4">
              Leading the company's growth and partnerships from scratch.
            </p>
          </div>
        </SwiperSlide>

        {/* Team Member 3 */}
        <SwiperSlide>
          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <img src={angela} alt="Team Member 3" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Angela Davis</h3>
            <p className="text-md text-[#A8FF50] mb-2">CFO & Co-Founder</p>
            <p className="text-sm text-white px-4">
              Driving the technical innovations and platform development.
            </p>
          </div>
        </SwiperSlide>

        {/* Team Member 4 */}
        <SwiperSlide>
          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <img src={diddy} alt="Team Member 4" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Andrey Didenko</h3>
            <p className="text-md text-[#A8FF50] mb-2">Botanist & Advisor</p>
            <p className="text-sm text-white px-4">
              Growing the brand and engaging customers with innovative strategies.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <img src={steve} alt="Team Member 4" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Steve Finikiotis</h3>
            <p className="text-md text-[#A8FF50] mb-2">Advisor</p>
            <p className="text-sm text-white px-4">
              Growing the brand and engaging customers with innovative strategies.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Pagination */}
      <div className="custom-pagination flex justify-center mt-6"></div>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px;
          height: 40px;
          background-color: #43CDEC;
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
          background: #43CDEC;
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 5px;
          border-radius: 50%;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #21A2BF;
          width: 30px;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

export default MySwiper;
