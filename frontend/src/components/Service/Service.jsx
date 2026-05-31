import BackgroundImage from "../../assets/Service-Background.png";
import ServiceBoxTop from "../ServiceBoxTop/ServiceBoxTop";
import ServiceBoxBottom from "../ServiceBoxBottom/ServiceBoxBottom";

import { Background, Parallax } from "react-parallax";

import img1 from "../../assets/service-top-1.jpeg";
import img2 from "../../assets/service-top-2.jpeg";
import img3 from "../../assets/service-top-3.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { serviceBottomData } from "../../Data/serviceBottomData";

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

        {/* TOP BOXES */}
        <div className="block flex-1 w-full h-[100%] py-[20px] md:py-0 md:h-[35vh] md:bg-black ">
          <div className="grid grid-cols-3 w-full md:px-5 md:place-items-center md:gap-7 md:h-full">
            <ServiceBoxTop img={img1} title="Parachuting" />
            <ServiceBoxTop img={img2} title="Surfing" />
            <ServiceBoxTop img={img3} title="Jet ski" />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex flex-col items-center text-center md:items-start justify-center h-[55vh] md:text-left px-7 w-[100%] md:w-[700px] ">
          <p className="sub-title text-[15px] md:text-[20px] mb-3">
            Dream Vacation Destination
          </p>
          <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
            Plan the Trip of <br /> a Lifetime with Ease
          </h1>
          <p className="leading-7 text-[16px] md:text-[17px] mb-3">
            Whether you're looking for a romantic getaway, a family-friendly
            adventure, or a solo journey to explore the world, a travel agency
            can provide you with a custom-tailored itinerary that exceeds your
            expectations.
          </p>
          <button>More Info</button>
        </div>

        {/* SWIPER SLIDER (REPLACED react-slick) */}
        <div className="flex-1 w-full h-[100%] pt-[20px] pb-6">
          <div className="w-[98%] mx-auto mt-[10px] h-[100%]">
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
                1024: {
                  slidesPerView: 3,
                },
                600: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {serviceBottomData.map((data) => (
                <SwiperSlide key={data.id}>
                  <ServiceBoxBottom
                    img={data.img}
                    days={data.days}
                    city={data.city}
                    country={data.country}
                    description={data.description}
                    newPrice={data.newPrice}
                    oldPrice={data.oldPrice}
                    discount={data.discount}
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
