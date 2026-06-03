import { motion } from "framer-motion";
import CTASection from "../components/CTASection/CTASection";
import heroBg from "../assets/destination-package-1.jpeg";
import StartsSection from "../components/StartsSection/StartsSection";
import ValueSection from "../components/ValueSection/ValueSection";

import story01 from "../assets/Hero-Right-Small.jpeg";
import story02 from "../assets/destination-package-2.jpeg";
import story03 from "../assets/img-kayaking.jpeg";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>

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
            src={story01}
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
              src={story02}
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
            src={story03}
            alt="Adventure"
            className="w-full h-[500px] object-cover hover:scale-110 transition duration-700"
          />
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <StartsSection />

      {/* VALUES SECTION */}
      <ValueSection />

      {/* CTA SECTION */}
      <CTASection
        heading="Ready For Your Next Adventure?"
        text="Join thousands of travelers who trust us to deliver unforgettable sports and travel experiences around the world."
        button="Contact Us Today"
      />
    </div>
  );
};

export default About;
