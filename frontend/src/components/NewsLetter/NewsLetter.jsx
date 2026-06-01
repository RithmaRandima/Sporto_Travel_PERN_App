import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { heroLeftBig } from "../../Data/HeroImages";

const NewsLetter = () => {
  return (
    <div className="relative md:pt-3 h-[90vh] md:h-[100vh] w-[100%] grid grid-cols-1 md:grid-cols-2 place-items-center overflow-hidden bg-white">
      {/* background glow */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/10 blur-[150px]" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-black/10 blur-[150px]" />

      {/* IMAGE SLIDER */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          delay: 0.1,
        }}
        className="hidden md:block w-[430px] h-[500px] rounded-[30px] overflow-hidden shadow-2xl"
      >
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {heroLeftBig.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                className="w-full h-[500px] object-cover scale-105 hover:scale-110 transition duration-700"
                alt=""
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* TEXT CONTENT */}
      <div className="p-6 md:mt-6 relative z-10 max-w-xl">
        <p className="text-red-500 uppercase tracking-[6px] text-[14px] md:text-[16px] mb-4">
          Adventure Travel
        </p>

        <h1 className="font-extrabold text-[34px] md:text-[46px] leading-tight mb-6">
          Embrace the Thrill of <br /> the Unknown
        </h1>

        <p className="leading-8 text-[16px] md:text-[18px] text-gray-600 mb-8">
          Break away from ordinary tourism. Discover adventure-packed journeys,
          explore untouched nature, experience cultures deeply, and create
          unforgettable memories that last forever.
        </p>

        {/* CHECKLIST */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-white shadow-md rounded-xl px-4 py-3 hover:shadow-lg transition">
            <TiTick className="text-red-500 text-[22px]" />
            <p className="text-gray-700">Connect with nature</p>
          </div>

          <div className="flex items-center gap-3 bg-white shadow-md rounded-xl px-4 py-3 hover:shadow-lg transition">
            <TiTick className="text-red-500 text-[22px]" />
            <p className="text-gray-700">Experience other cultures</p>
          </div>

          <div className="flex items-center gap-3 bg-white shadow-md rounded-xl px-4 py-3 hover:shadow-lg transition">
            <TiTick className="text-red-500 text-[22px]" />
            <p className="text-gray-700">Create unforgettable memories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
