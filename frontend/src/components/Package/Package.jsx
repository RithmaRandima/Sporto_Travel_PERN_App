import React from "react";
import BackgroundImage from "../../assets/package-box-1.jpeg";
import { Background, Parallax } from "react-parallax";
import PackageBox from "./PackageBox/PackageBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { packagesData } from "../../Data/PackageData";

const Package = () => {
  return (
    <div id="destination" className="h-[94vh] md:h-[145vh] w-[100%]">
      <Parallax
        className="relative w-full h-[94vh] md:h-[145vh] flex flex-col"
        strength={300}
        blur={100}
      >
        {/* BACKGROUND */}
        <Background className="custom-bg w-[100vw] h-[95vh] md:h-[145vh]">
          <img
            src={BackgroundImage}
            className="h-[95vh] md:h-[150vh] w-full object-cover"
            alt="destination background"
          />
        </Background>

        {/* TEXT SECTION */}
        <div className="flex flex-col items-center text-center md:items-start justify-center h-[40vh] md:h-[55vh] px-7 w-full md:w-[700px] text-white z-10">
          <p className="sub-title text-[#f00] text-[17px] md:text-[22px] mb-3">
            Next Adventure
          </p>

          <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
            Travel Destinations <br /> Available Worldwide
          </h1>

          <p className="leading-7 text-[16px] md:text-[17px] mb-3">
            We have compiled a list of top destinations across the globe,
            scoured the world for the most alluring and fascinating places to
            visit. From the beautiful beaches of the Caribbean to the majestic
            mountains of Europe and the vibrant cities of Asia, our destination
            list has something for everyone.
          </p>
        </div>

        {/* SWIPER SLIDER */}
        <div className="flex-1 w-full h-[235vh] md:h-[80vh] pt-[20px]">
          <div className="w-[98%] mx-auto mt-[10px] h-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                1024: { slidesPerView: 3 },
                600: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {packagesData.map((data) => (
                <SwiperSlide key={data.id}>
                  <PackageBox
                    img={data.img}
                    city={data.city}
                    desc={data.desc}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Package;
