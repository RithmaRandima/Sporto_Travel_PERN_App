import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";
import { motion } from "framer-motion";

const DestinationPicker = () => {
  return (
    <div className="w-full pb-10 md:pb-0 hidden md:flex justify-center">
      <div className="w-[95%] md:w-full px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            delay: 0.15,
          }}
          className="flex flex-col md:flex-row items-stretch justify-between gap-6 
                 bg-white/70 backdrop-blur-xl border border-gray-200 mt-5  w-[94%] md:w-[100%] mx-auto
                 shadow-[2px_2px_4px_rgba(0,0,0,0.2)] rounded-2xl p-6 md:p-8"
        >
          {/* Search Field */}
          <div className="flex items-center gap-4 w-full group">
            <FaSearch className="text-red-600 text-2xl md:text-3xl transition group-hover:scale-110" />
            <div className="flex flex-col w-full">
              <label className="text-sm text-left md:text-base font-semibold text-gray-800">
                Place
              </label>
              <input
                type="text"
                placeholder="Search places..."
                className="w-full bg-transparent border-b border-gray-300 
                       focus:border-red-600 outline-none py-2 
                       placeholder:text-gray-400 transition"
              />
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-center gap-4 w-full group">
            <FaLocationDot className="text-red-600 text-2xl md:text-3xl transition group-hover:scale-110" />
            <div className="flex flex-col w-full">
              <label className="text-sm text-left md:text-base font-semibold text-gray-800">
                Destinations
              </label>
              <input
                type="text"
                placeholder="Where to?"
                className="w-full bg-transparent border-b border-gray-300 
                       focus:border-red-600 outline-none py-2 
                       placeholder:text-gray-400 transition"
              />
            </div>
          </div>

          {/* Typologies */}
          <div className="flex items-center gap-4 w-full group">
            <AiOutlineBars className="text-red-600 text-2xl md:text-3xl transition group-hover:scale-110" />
            <div className="flex flex-col w-full">
              <label className="text-sm md:text-base text-left font-semibold text-gray-800">
                Typologies
              </label>
              <input
                type="text"
                placeholder="Type of travel..."
                className="w-full bg-transparent border-b border-gray-300 
                       focus:border-red-600 outline-none py-2 
                       placeholder:text-gray-400 transition"
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center md:justify-end w-full md:w-[180px]">
            <button
              className="w-full md:w-[160px] h-[48px] 
                     bg-gradient-to-r from-red-600 to-red-700 
                     text-white font-semibold uppercase tracking-wide
                     rounded-xl shadow-md
                     hover:scale-105 hover:shadow-xl active:scale-95
                     transition-all duration-300"
            >
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DestinationPicker;
