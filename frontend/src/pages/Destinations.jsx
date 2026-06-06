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

import {
  popularDestinationsPackages,
  serviceBottomBoxData,
} from "../Data/DestinationData";
import CTASection from "../components/CTASection/CTASection";
import heroBg from "../assets/img-rock-climbing.jpeg";
import { useAppContext } from "../context/AppContext";
import TravelBox from "../components/TravelBox/TravelBox";

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

  const { trips } = useAppContext();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/60" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>

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
      <section className="max-w-7xl mx-auto px-6 -mt-7 relative z-20">
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
      {/* DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-16 ">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#f00] bg-blue-50 rounded-full">
            Top Picks
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Popular Destinations
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Discover breathtaking places, vibrant cultures, and unforgettable
            experiences in destinations loved by travelers worldwide.
          </p>

          <div className="w-24 h-1 bg-[#f00] rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y6">
          {trips.map((item) => (
            <TravelBox key={item.id} props={item} />
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
      <CTASection
        heading="Ready For Your Next Adventure?"
        text="Discover extraordinary destinations and create unforgettable memories."
        button=" Start Planning"
      />
    </div>
  );
};

export default Destinations;
