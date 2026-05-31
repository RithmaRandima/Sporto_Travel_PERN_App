import React from "react";
import { Background, Parallax } from "react-parallax";
import BackgroundImage from "../../assets/Testimonials-Background.jpeg";
import TestimonialsBox from "./TestimonialsBox/TestimonialsBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { testimonialData } from "../../Data/TestimonialData";

const Testimonials = () => {
  return (
    <div className="flex flex-col h-[100%] m-auto w-full">
      <Parallax className="relative w-full h-full flex flex-col" strength={250}>
        {/* BACKGROUND */}
        <Background className="custom-bg w-[100vw] h-[155vh] md:h-[150vh] overflow-hidden">
          <img
            src={BackgroundImage}
            alt="testimonials background"
            className="h-full w-full object-cover"
          />
        </Background>

        {/* TITLE */}
        <div className="pt-10 px-2">
          <h1 className="text-3xl md:text-5xl text-white">
            Unforgettable Travel <br />
            <span className="font-bold text-[#f00]"> Experiences</span>
          </h1>
        </div>

        {/* SWIPER (REPLACES SLICK) */}
        <div className="w-[90%] mx-auto mb-4 p-2">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
              600: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {testimonialData.map((data) => (
              <SwiperSlide key={data.id}>
                <TestimonialsBox
                  img={data.img}
                  title={data.title}
                  name={data.name}
                  city={data.city}
                  message={data.message}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Parallax>
    </div>
  );
};

export default Testimonials;
