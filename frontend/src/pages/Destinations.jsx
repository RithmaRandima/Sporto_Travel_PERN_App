// import Destinations from "../components/Destinations/Destinations";

// const Destinations = () => {
//   return <div>addhjhg</div>;
// };

// export default Destinations;

import React from "react";
import { motion } from "framer-motion";
import { popularDestinationsPackages } from "../Data/DestinationData";

const Destinations = () => {
  return (
    <div className="w-full min-h-screen bg-[#f9fafb]">
      {/* HERO */}
      <div className="bg-black text-white py-20 px-6 text-center">
        <p className="text-red-400 tracking-[6px] uppercase text-sm">
          Explore The World
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          Popular Destinations
        </h1>

        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-sm md:text-base">
          Discover breathtaking places across the globe. From beaches to
          mountains, find your next adventure.
        </p>
      </div>

      {/* MASONRY GRID */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {popularDestinationsPackages.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.img}
                  className="w-full object-cover"
                  alt={item.city}
                />

                {/* overlay */}
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {item.days} Days
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.city}</h3>

                <p className="text-sm text-gray-500 mt-1">{item.title}</p>

                <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                  {item.description}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-red-500">{item.price}</span>

                  <button className="text-sm bg-black text-white px-4 py-1 rounded-full hover:bg-red-500 transition">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
