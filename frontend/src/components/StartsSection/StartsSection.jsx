import { motion } from "framer-motion";
const stats = [
  { value: "150+", label: "Sports Events Covered" },
  { value: "25K+", label: "Happy Travelers" },
  { value: "75+", label: "Countries Explored" },
  { value: "12+", label: "Years Experience" },
];

const StartsSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black py-18">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-7 text-center"
          >
            <h3 className="text-[43px] font-bold text-red-500">{item.value}</h3>

            <p className="text-gray-300 -mt-1">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StartsSection;
