import imgBig from "../../assets/big-left-3.jpeg";
import imgTop from "../../assets/big-right-1.jpeg";
import imgBottom from "../../assets/big-left-1.jpeg";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div
      id="about"
      className="overflow-hidden max-w-[1140px] m-auto w-full grid grid-cols-1 md:grid-cols-2 md:mb-[50px] text-center md:text-left mt-10 md:mt-24"
    >
      {/* TEXT SECTION */}
      <div className="p-5 md:py-12 relative">
        {/* subtle background glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/10 blur-3xl rounded-full" />

        <p className="text-red-500 uppercase tracking-[6px] text-[14px] md:text-[16px] mb-4">
          Dream Vacation Destination
        </p>

        <h1 className="font-extrabold text-[34px] md:text-[44px] leading-tight mb-6 text-gray-900">
          Discover Your Next <br /> Adventure
        </h1>

        <p className="text-gray-600 text-[16px] md:text-[18px] leading-8 my-4">
          Whether you're planning a romantic honeymoon, a sports tour, or a
          family adventure, we design travel experiences that combine comfort,
          excitement, and unforgettable memories.
        </p>

        <p className="text-gray-600 text-[16px] md:text-[18px] leading-8 my-4">
          Explore curated destinations worldwide and choose packages tailored to
          your style, passion, and budget — without compromise.
        </p>

        <p className="my-6 text-[16px] md:text-[17px] font-medium">
          Manager:{" "}
          <span className="text-red-500 font-semibold">Rithma Randima</span>
        </p>

        <Link
          to={"/about"}
          className="inline-flex items-center gap-2 bg-red-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300"
        >
          More Info <MdOutlineArrowOutward size={16} />
        </Link>
      </div>

      {/* IMAGE SECTION (UNCHANGED COMPLETELY) */}
      <div className="hidden md:flex flex-row gap-6 h-[500px]">
        <div className="hidden md:flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 13,
              delay: 0.1,
            }}
            className="w-[100%] h-[100%] relative md:rounded-t-full overflow-hidden shadow-xl"
          >
            <img
              src={imgTop}
              className="w-[100%] h-[100%] object-cover"
              alt=""
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4,
            }}
            className="w-full h-[100%] shadow-lg md:rounded-ee-full"
          >
            <img
              src={imgBottom}
              className="w-[100%] h-[100%] md:rounded-ee-full object-cover"
              alt=""
              loading="lazy"
            />
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 17,
              delay: 0.5,
              duration: 0.6,
            }}
            className="md:flex md:w-[330px] md:h-[100%] overflow-hidden md:rounded-b-full shadow-2xl"
          >
            <img
              src={imgBig}
              className="w-[100%] h-[100%] object-cover"
              alt=""
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
