import React from "react";
import { motion } from "framer-motion";
import {
  FaFutbol,
  FaPlaneDeparture,
  FaMountain,
  FaShieldAlt,
} from "react-icons/fa";

const About = () => {
  const stats = [
    { value: "150+", label: "Sports Events Covered" },
    { value: "25K+", label: "Happy Travelers" },
    { value: "75+", label: "Countries Explored" },
    { value: "12+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: <FaMountain />,
      title: "Adventure",
      desc: "Experience thrilling destinations, outdoor activities, and unforgettable sports journeys.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trust",
      desc: "Reliable bookings, secure travel planning, and dedicated support every step of the way.",
    },
    {
      icon: <FaFutbol />,
      title: "Passion",
      desc: "Built by sports lovers who understand the excitement of traveling for major events.",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Excellence",
      desc: "Delivering premium travel experiences with attention to every detail.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d880?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <p className="uppercase tracking-[8px] text-red-400 font-medium">
            Sports Travel Experts
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 leading-tight">
            Creating Epic Sports &
            <span className="block text-red-500">Adventure Experiences</span>
          </h1>

          <p className="mt-8 text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-8">
            From football tours and cricket matches to adventure expeditions and
            international sporting events, we help travelers experience the
            excitement of sports while exploring the world.
          </p>

          <button className="mt-10 bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105">
            Explore Destinations
          </button>
        </motion.div>
      </section>

      {/* STORY SECTION 1 */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turning Sports Dreams Into Reality
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            What began as a passion project among sports enthusiasts has grown
            into a trusted sports travel platform connecting fans with
            unforgettable experiences around the globe.
          </p>

          <p className="text-gray-600 leading-8">
            We believe every fan deserves the chance to witness legendary
            moments live, explore iconic destinations, and create memories that
            last a lifetime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200"
            alt="Sports Travel"
            className="w-full h-[500px] object-cover hover:scale-110 transition duration-700"
          />
        </motion.div>
      </section>

      {/* STORY SECTION 2 */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1200"
              alt="Fans"
              className="w-full h-[500px] object-cover hover:scale-110 transition duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-red-500 font-semibold uppercase tracking-widest mb-3">
              Built For Fans
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Travel With The Game
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Whether it's football, cricket, rugby, Formula 1, tennis, or
              marathon events, we specialize in creating complete travel
              experiences around the world's biggest sporting moments.
            </p>

            <p className="text-gray-600 leading-8">
              From flights and hotels to event tickets and local experiences, we
              manage every detail so you can focus on the excitement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION 3 */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest mb-3">
            Beyond The Stadium
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Adventure Meets Exploration
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            Sports travel is about more than just watching a game. We combine
            sporting events with cultural experiences, mountain adventures,
            beach escapes, and city explorations.
          </p>

          <p className="text-gray-600 leading-8">
            Every trip is carefully designed to deliver a perfect blend of
            excitement, discovery, and unforgettable memories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
            alt="Adventure"
            className="w-full h-[500px] object-cover hover:scale-110 transition duration-700"
          />
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-red-500">{item.value}</h3>

              <p className="text-gray-300 mt-3">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-widest font-semibold">
            Core Values
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What We Stand For
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Our values guide every journey we create and every traveler we
            serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-red-500 py-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:30px_30px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready For Your Next Adventure?
          </h2>

          <p className="mt-6 text-white/90 text-lg">
            Join thousands of travelers who trust us to deliver unforgettable
            sports and travel experiences around the world.
          </p>

          <button className="mt-10 bg-white text-red-500 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
