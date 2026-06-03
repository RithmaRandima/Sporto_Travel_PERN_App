import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  FaPlane,
  FaMountain,
  FaUmbrellaBeach,
  FaFutbol,
  FaBookOpen,
  FaGlobe,
} from "react-icons/fa";

import "swiper/css";

import { blogData } from "../Data/BlogData";

const Blog = () => {
  const featured = blogData[0];

  const categories = [
    {
      icon: <FaFutbol />,
      title: "Sports Travel",
      desc: "Major sporting events and fan experiences.",
    },
    {
      icon: <FaMountain />,
      title: "Adventure",
      desc: "Mountains, hiking trails and thrilling escapes.",
    },
    {
      icon: <FaUmbrellaBeach />,
      title: "Beach Escapes",
      desc: "Relaxing coastal getaways and island adventures.",
    },
    {
      icon: <FaPlane />,
      title: "Travel Tips",
      desc: "Expert advice for smarter travel planning.",
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Travel Articles",
    },
    {
      value: "120+",
      label: "Destination Guides",
    },
    {
      value: "25K+",
      label: "Monthly Readers",
    },
    {
      value: "80+",
      label: "Countries Covered",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/70" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl px-6"
        >
          <p className="uppercase tracking-[8px] text-red-400 text-sm font-medium">
            Travel Journal
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 leading-tight">
            Stories That
            <span className="block text-red-500">Inspire Adventure</span>
          </h1>

          <p className="text-gray-200 mt-8 text-lg max-w-3xl mx-auto leading-8">
            Discover destination guides, sports travel experiences, adventure
            stories, hidden gems, and unforgettable journeys from around the
            world.
          </p>

          <div className="bg-white rounded-2xl p-3 mt-10 max-w-3xl mx-auto shadow-2xl">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Search articles, destinations..."
                className="flex-1 px-4 py-3 outline-none rounded-xl"
              />

              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl transition">
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-10 text-center">
          <p className="text-red-500 uppercase tracking-widest font-medium">
            Featured Story
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Editor's Highlight
          </h2>
        </div>

        <motion.div
          whileHover={{ y: -5 }}
          className="grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="overflow-hidden">
            <img
              src={featured.img}
              alt={featured.title}
              className="w-full h-full min-h-[450px] object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-red-500 font-medium">{featured.date}</span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
              {featured.title}
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              {featured.description}
            </p>

            <button className="mt-8 w-fit bg-black text-white px-8 py-3 rounded-full hover:bg-red-500 transition">
              Read Story
            </button>
          </div>
        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Explore Categories</h2>

          <p className="text-gray-600 mt-4">
            Find inspiration based on your interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-16 h-16 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDITOR PICKS */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-red-400 uppercase tracking-widest">
              Popular Reads
            </p>

            <h2 className="text-4xl font-bold text-white mt-4">
              Editor's Picks
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
            }}
            spaceBetween={25}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {blogData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">
                    <p className="text-red-500 text-sm">{item.date}</p>

                    <h3 className="font-bold text-xl mt-3 line-clamp-2">
                      {item.title}
                    </h3>

                    <button className="mt-5 text-red-500 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Latest Articles</h2>

          <p className="text-gray-600 mt-4">
            Fresh stories and destination insights.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {blogData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="break-inside-avoid bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <FaBookOpen />
                  <span>{item.date}</span>
                </div>

                <h3 className="font-bold text-xl mt-3">{item.title}</h3>

                <p className="text-gray-600 mt-4 line-clamp-4">
                  {item.description}
                </p>

                <button className="mt-5 text-red-500 font-semibold">
                  Continue Reading →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center"
              >
                <h3 className="text-5xl font-bold text-red-500">
                  {item.value}
                </h3>

                <p className="text-gray-300 mt-3">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative py-24 bg-gradient-to-r from-red-600 to-red-500 overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10">
          <FaGlobe className="text-[400px] text-white" />
        </div>

        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Never Miss A Story
          </h2>

          <p className="text-white/90 mt-6 text-lg max-w-2xl mx-auto">
            Get destination guides, sports travel updates, adventure
            inspiration, and exclusive travel stories delivered directly to your
            inbox.
          </p>

          <div className="bg-white rounded-2xl p-3 mt-10 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 outline-none rounded-xl"
              />

              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
