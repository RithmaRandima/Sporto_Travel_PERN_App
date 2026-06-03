import {
  FaFutbol,
  FaPlaneDeparture,
  FaMountain,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

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

const ValueSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-red-500 uppercase tracking-widest font-semibold">
          Core Values
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          What We Stand For
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-6">
          Our values guide every journey we create and every traveler we serve.
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
  );
};

export default ValueSection;
