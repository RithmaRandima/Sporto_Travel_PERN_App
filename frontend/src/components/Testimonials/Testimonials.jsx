import TestimonialsBox from "./TestimonialsBox/TestimonialsBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { testimonialData } from "../../Data/TestimonialData";

const Testimonials = () => {
  return (
    <div className="flex pt-10 flex-col h-[100%] m-auto w-full">
      {/* TITLE */}
      <div className="pt-10 px-2">
        <p className="text-red-500 uppercase tracking-[6px] text-[14px] md:text-[16px] mb-3">
          Testimonials
        </p>

        <h1 className="text-3xl md:text-5xl font-light leading-tight">
          Unforgettable Travel <br />
          <span className="font-extrabold text-red-500">Experiences</span>
        </h1>

        <p className="text-gray-600 mx-auto mt-4 max-w-xl">
          Hear from travelers who explored the world with us. Real stories, real
          experiences, unforgettable memories.
        </p>
      </div>

      {/* SWIPER (REPLACES SLICK) */}
      <div className="w-[90%] mx-auto mt-7 mb-4 p-2">
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
    </div>
  );
};

export default Testimonials;
