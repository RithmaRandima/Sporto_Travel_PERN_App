import BackgroundImage from "../../assets/bg.jpg";
import { Parallax } from "react-parallax";
import PackageBox from "./PackageBox/PackageBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { packagesData } from "../../Data/PackageData";

const Package = () => {
  return (
    <section className="relative overflow-hidden">
      <Parallax
        strength={250}
        blur={0}
        className="relative"
        bgImage={BackgroundImage}
        bgImageStyle={{
          objectFit: "cover",
          objectPosition: "bottom bottom",
        }}
        strength={250}
        className="relative min-h-screen "
      >
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent z-0" />

        <div className="relative z-10 min-h-screen flex flex-col py-10">
          {/* Content */}
          <div className="max-w-7xl mx-auto w-full px-5 lg:px-8">
            <div className="max-w-3xl text-center lg:text-left ">
              <p className="text-red-500 uppercase tracking-[6px] text-[14px] md:text-[16px] mb-4">
                Next Adventure
              </p>

              <h2 className="font-extrabold text-[34px] md:text-[46px] leading-tight mb-6">
                Travel Destinations
                <br />
                Available Worldwide
              </h2>

              <p className="leading-8 text-[16px] md:text-[18px] text-gray-600 mb-8">
                We have compiled a list of top destinations across the globe,
                from tropical beaches to vibrant cities and breathtaking
                mountain escapes. Discover unforgettable journeys designed for
                every traveler.
              </p>
            </div>

            {/* Slider */}
            <div className="mt-14">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                spaceBetween={24}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1400: {
                    slidesPerView: 4,
                  },
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
        </div>
      </Parallax>
    </section>
  );
};

export default Package;
