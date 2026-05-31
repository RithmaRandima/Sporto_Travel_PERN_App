import React from "react";
import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs/AboutUs";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO */}
      <div className="bg-black text-white py-24 px-6 text-center">
        <p className="text-red-400 tracking-[6px] uppercase text-sm">
          About Us
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          We Craft Unforgettable Journeys
        </h1>

        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-sm md:text-base">
          We are passionate travelers helping people explore the world with
          ease, comfort, and adventure. Every journey we design tells a story.
        </p>
      </div>

      {/* STORY SECTION */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>

          <p className="text-gray-600 leading-7 mb-4">
            Founded with a passion for exploration, we started as a small travel
            idea and grew into a global travel experience provider. Our mission
            is to make travel simple, affordable, and unforgettable.
          </p>

          <p className="text-gray-600 leading-7">
            From curated destinations to personalized packages, we ensure every
            traveler experiences the world in a unique way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="about"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>
      </div>

      {/* STATS SECTION */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Destinations", value: "120+" },
            { label: "Happy Travelers", value: "10K+" },
            { label: "Trips Completed", value: "3K+" },
            { label: "Years Experience", value: "8+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-3xl font-bold text-red-500">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">What We Stand For</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Adventure",
              desc: "We bring you closer to thrilling and unforgettable experiences.",
            },
            {
              title: "Trust",
              desc: "Safe, reliable, and transparent travel planning for everyone.",
            },
            {
              title: "Comfort",
              desc: "We ensure smooth journeys from booking to destination.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-6">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AboutUs />

      {/* CTA */}
      <div className="bg-red-500 text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Start Your Journey?
        </h2>

        <p className="mt-4 text-sm md:text-base">
          Let’s plan your next unforgettable trip together.
        </p>

        <button className="mt-8 bg-white text-red-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
