import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";
import { motion } from "framer-motion";

const DestinationPicker = () => {
  return (
    <div className="w-full hidden md:flex justify-center -mt-2 relative z-30">
      <div className="w-[95%] md:w-full px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
          className="relative flex flex-col md:flex-row items-stretch gap-6 
          bg-white/80 backdrop-blur-2xl border border-white/40
          shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)]
          rounded-[28px] p-6 md:p-8 overflow-hidden"
        >
          {/* glow background */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-red-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-red-500/10 blur-3xl rounded-full" />

          {/* Search Field */}
          <div className="flex items-center gap-4 w-full group relative">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-red-500 transition">
              <FaSearch className="text-red-600 group-hover:text-white text-lg transition" />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Place
              </label>
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full bg-transparent border-b border-gray-300 
                focus:border-red-500 outline-none py-2 text-gray-700
                placeholder:text-gray-400 transition"
              />
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-center gap-4 w-full group relative">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-red-500 transition">
              <FaLocationDot className="text-red-600 group-hover:text-white text-lg transition" />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Destination
              </label>
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full bg-transparent border-b border-gray-300 
                focus:border-red-500 outline-none py-2 text-gray-700
                placeholder:text-gray-400 transition"
              />
            </div>
          </div>

          {/* Typologies */}
          <div className="flex items-center gap-4 w-full group relative">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-red-500 transition">
              <AiOutlineBars className="text-red-600 group-hover:text-white text-lg transition" />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Travel Type
              </label>
              <input
                type="text"
                placeholder="Adventure, Sports, Beach..."
                className="w-full bg-transparent border-b border-gray-300 
                focus:border-red-500 outline-none py-2 text-gray-700
                placeholder:text-gray-400 transition"
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center md:justify-end w-full md:w-[180px]">
            <button
              className="w-full md:w-[160px] h-[50px]
              bg-gradient-to-r from-red-500 to-red-600
              text-white font-semibold tracking-wide
              rounded-2xl shadow-lg
              hover:shadow-2xl hover:scale-105 active:scale-95
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
