import BackgroundImage from "../../assets/Service-Background.png";

import { Background, Parallax } from "react-parallax";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { servicesSportData } from "../../Data/serviceSportData";
import ServiceBox from "../ServiceBox/ServiceBox";

const About = () => {
  return (
    <div id="about" className="h-[100%] w-[100%] pt-5 md:pt-10 ">
      <Parallax
        className="relative w-full h-full flex flex-col "
        strength={300}
      >
        <Background className="custom-bg w-[100vw] h-[100%] opacity-80">
          <img src={BackgroundImage} alt="fill murray" loading="lazy" />
        </Background>

        {/* TEXT SECTION */}
        <div className="flex flex-col items-center text-center md:items-start justify-center h-[55vh] md:text-left px-7 w-[100%] md:w-[700px] ">
          {/* <p className="sub-title text-[15px] md:text-[30px] mb-3">
            Dream Vacation Destination
          </p> */}
          <h1 className="font-extrabold text-[32px] md:text-[50px] mb-2">
            Plan the Trip of <br /> a Lifetime with Ease
          </h1>
          <p className="leading-8 text-[16px] md:text-[19px] mb-3">
            Whether you're looking for a romantic getaway, a family-friendly
            adventure, or a solo journey to explore the world, a travel agency
            can provide you with a custom-tailored itinerary that exceeds your
            expectations.
          </p>
        </div>

        {/* SWIPER SLIDER (REPLACED react-slick) */}
        <div className="flex-1 w-full h-[100%] pt-[20px] pb-6">
          <div className="w-[100%] mx-auto h-[100%]">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
            >
              {servicesSportData.map((data) => (
                <SwiperSlide key={data.id}>
                  <ServiceBox
                    img={data.img}
                    sport={data.sport}
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

export default About;
