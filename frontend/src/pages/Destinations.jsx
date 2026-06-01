import React from "react";
import { motion } from "framer-motion";
import {
  FaPlane,
  FaGlobeAsia,
  FaMountain,
  FaUmbrellaBeach,
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";

import { popularDestinationsPackages } from "../Data/DestinationData";

const Destinations = () => {
  const stats = [
    { number: "120+", title: "Destinations" },
    { number: "25K+", title: "Travelers" },
    { number: "75+", title: "Countries" },
    { number: "12+", title: "Years Experience" },
  ];

  const categories = [
    {
      icon: <FaUmbrellaBeach />,
      title: "Beach Escapes",
      desc: "Relax on stunning coastlines and tropical islands.",
    },
    {
      icon: <FaMountain />,
      title: "Adventure Tours",
      desc: "Explore mountains, hiking trails and nature.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Cultural Trips",
      desc: "Experience traditions and local lifestyles.",
    },
    {
      icon: <FaPlane />,
      title: "Sports Travel",
      desc: "Travel to major sporting events worldwide.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[8px] text-red-400 text-sm">
            Explore The World
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6">
            Discover Amazing
            <span className="block text-red-500">Destinations</span>
          </h1>

          <p className="text-gray-200 mt-8 text-lg max-w-2xl mx-auto">
            From tropical beaches and iconic cities to adventure-filled
            mountains and sports travel experiences.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl p-4 mt-10 max-w-3xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Destination"
                className="border rounded-xl px-4 py-3 outline-none"
              />

              <input
                type="text"
                placeholder="Travel Date"
                className="border rounded-xl px-4 py-3 outline-none"
              />

              <button className="bg-red-500 text-white rounded-xl py-3 font-semibold hover:bg-red-600 transition">
                Search Trips
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-lg"
            >
              <h3 className="text-4xl font-bold text-red-500">{item.number}</h3>

              <p className="text-gray-600 mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Travel Categories</h2>

          <p className="text-gray-600 mt-4">Find your perfect adventure.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-red-500 text-4xl mb-5">{item.icon}</div>

              <h3 className="font-bold text-xl mb-3">{item.title}</h3>

              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Popular Destinations</h2>

          <p className="text-gray-600 mt-4">
            Handpicked destinations loved by travelers.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {popularDestinationsPackages.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="break-inside-avoid bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.city}
                  className="w-full object-cover hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  {item.days} Days
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{item.city}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="font-semibold text-gray-800">{item.title}</p>

                <p className="text-gray-600 mt-3 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-red-500 font-bold text-lg">
                    {item.price}
                  </span>

                  <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-red-500 transition">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Why Travel With Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50">
              <FaMapMarkedAlt className="text-red-500 text-4xl mb-5" />
              <h3 className="font-bold text-xl mb-3">Curated Destinations</h3>
              <p className="text-gray-600">
                Carefully selected experiences and unique locations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50">
              <FaUsers className="text-red-500 text-4xl mb-5" />
              <h3 className="font-bold text-xl mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated travel experts available throughout your journey.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50">
              <FaPlane className="text-red-500 text-4xl mb-5" />
              <h3 className="font-bold text-xl mb-3">Seamless Travel</h3>
              <p className="text-gray-600">
                Flights, hotels, tours and activities all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-500 py-24 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready For Your Next Adventure?
        </h2>

        <p className="text-white/90 mt-5 max-w-2xl mx-auto">
          Discover extraordinary destinations and create unforgettable memories.
        </p>

        <button className="mt-8 bg-white text-red-500 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
          Start Planning
        </button>
      </section>
    </div>
  );
};

export default Destinations;
