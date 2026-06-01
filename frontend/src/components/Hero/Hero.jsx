import {
  heroLeftBig,
  heroLeftSmall,
  heroRightBig,
  heroRightSmallLeft,
  heroRightSmallRight,
} from "../../Data/HeroImages";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Hero = () => {
  return (
    <div className="relative w-[100%] h-[65vh] md:h-[100vh] bg-white overflow-hidden">
      {/* center text */}
      <div className="absolute w-[100%] md:max-w-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 px-4">
        <p className="heading-name text-[#f00] text-[17px] md:text-[30px] tracking-[2px]">
          Travel Experiences!
        </p>

        <h1 className="heading-name mx-auto text-black rotate-[-10deg] text-[100px] md:text-[210px] tracking-[1px] mt-[-30px] md:mt-[-80px] font-extrabold ">
          Sporto
        </h1>
      </div>

      {/* big left slider */}
      <div className="absolute top-0 w-full h-[180px] md:top-[50px] md:left-[20px] md:w-[300px] md:h-[500px]">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {heroLeftBig.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                className="w-full h-[180px] md:h-[500px] object-cover"
                alt=""
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* left small bottom slider */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.6,
        }}
        className="hidden md:block absolute top-[400px] left-[130px] h-[230px] w-[370px]"
      >
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {heroLeftSmall.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                className="w-full h-[230px] object-cover"
                alt=""
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* right big image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.3,
        }}
        className="absolute block bottom-0 w-full h-[180px] md:top-[30px] md:right-[60px] md:w-[360px] md:h-[400px]"
      >
        <img
          src={heroRightBig[0]}
          className="w-full h-[180px] md:h-[480px] object-cover"
          alt=""
          loading="lazy"
        />
      </motion.div>

      {/* right small right (static) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}
        className="hidden md:block absolute top-[330px] right-[30px] h-[300px] w-[230px]"
      >
        <img
          src={heroRightSmallRight[0]}
          className="w-full h-[300px] object-cover"
          alt=""
          loading="lazy"
        />
      </motion.div>

      {/* right small left slider */}
      <div className="hidden md:block absolute top-[390px] right-[310px] h-[190px] w-[190px]">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
        >
          {heroRightSmallLeft.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                className="w-full h-[190px] object-cover"
                alt=""
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
