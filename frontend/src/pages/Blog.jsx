import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { blogData } from "../Data/BlogData";
import BlogBox from "../components/Blog/BlogBox/BlogBox";

const Blog = () => {
  const featured = blogData[0];
  const posts = blogData.slice(1);

  return (
    <>
      <div className="w-full min-h-screen bg-[#f9fafb]">
        {/* HERO SECTION */}
        <div className="bg-black text-white py-20 px-6 text-center">
          <p className="text-red-400 tracking-[6px] text-sm uppercase">
            Travel Journal
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Stories From Around the World
          </h1>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            Explore real travel experiences, hidden gems, and guides written by
            travelers. Discover inspiration for your next adventure.
          </p>

          {/* search bar UI */}
          <div className="mt-8 max-w-xl mx-auto flex bg-white rounded-full overflow-hidden">
            <input
              placeholder="Search articles, destinations..."
              className="flex-1 px-5 py-3 text-black outline-none"
            />
            <button className="bg-red-500 px-6 text-white font-medium">
              Search
            </button>
          </div>
        </div>

        {/* FEATURED ARTICLE */}
        <div className="max-w-6xl mx-auto px-4 md:px-10 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={blogData[0].img}
              className="w-full h-[350px] object-cover"
              alt=""
            />

            <div className="p-6">
              <span className="text-sm text-gray-500">{blogData[0].date}</span>

              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                {blogData[0].title}
              </h2>

              <p className="text-gray-600 mt-4 leading-7">
                {blogData[0].description}
              </p>

              <button className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-red-500 transition">
                Read Story
              </button>
            </div>
          </div>
        </div>

        {/* TRENDING SCROLL (NO LIB) */}
        <div className="px-4 md:px-10 bg-red-300 pb-10">
          <h2 className="text-xl font-bold mb-4">Trending Now</h2>

          <div className="flex gap-4 overflow-x-auto bg-red-500 scrollbar-hide pb-3">
            {blogData.map((item, i) => (
              <div
                key={i}
                className="min-w-[250px] bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition"
              >
                <img
                  src={item.img}
                  className="h-[140px] w-full object-cover"
                  alt=""
                />
                <div className="p-3">
                  <p className="text-xs text-gray-500">{item.date}</p>
                  <h3 className="font-semibold text-sm mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MASONRY GRID */}
        <div className="max-w-6xl mx-auto px-4 md:px-10 pb-20">
          <h2 className="text-xl font-bold mb-6">Latest Articles</h2>

          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {blogData.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="break-inside-avoid bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img src={item.img} className="w-full object-cover" />
                <div className="p-4">
                  <p className="text-xs text-gray-500">{item.date}</p>
                  <h3 className="font-bold mt-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-500 text-white text-center py-16 px-6">
          <h2 className="text-3xl font-bold">Want More Travel Stories?</h2>
          <p className="mt-3 text-sm">
            Subscribe and get weekly travel inspiration
          </p>

          <button className="mt-6 bg-white text-red-500 px-6 py-2 rounded-full font-medium">
            Subscribe Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
