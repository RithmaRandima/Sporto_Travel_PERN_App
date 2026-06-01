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
      className="overflow-hidden max-w-[1140px] m-auto w-full  grid grid-cols-1 md:grid-cols-2 md:mb-[50px] text-center md:text-left mt-5 md:mt-20"
    >
      <div className="p-4 pt-0 md:pt-4  md:py-10">
        <p
          initial={{ opacity: 0, x: -100 }}
          className="text-[#f00] sub-title text-[17px] md:text-[22px] mb-3 text-right md:text-left"
        >
          Dream Vacation Destination
        </p>
        <h1 className="font-bold text-[32px] md:text-[37px] mb-2 text-right md:text-left">
          Discover Your Next <br /> Adventure
        </h1>
        <p className="text-gray-700 text-[20px] text-right md:text-left my-5">
          Whether you're planning a romantic honeymoon or a family vacation, our
          price section has got you covered. So, start browsing today and find
          the perfect vacation package at a price that won't leave you feeling
          guilty.
        </p>

        <p className="text-gray-700 text-[20px] text-right md:text-left my-5">
          Explore a wide range of destinations and choose the package that fits
          your style and budget perfectly.
        </p>
        <p className="my-4 text-[17px] text-right md:text-left ">
          Manager: <span className="text-red-500">Rithma Randima</span>
        </p>

        <Link
          to={"/about"}
          className="hidden bg-[#f00] w-fit font-semibold text-[17px] px-5 py-2 md:flex text-white  justify-between items-center rounded-r-full  hover:bg-black hover:scale-110 duration-300 mt-7"
        >
          More Info <MdOutlineArrowOutward size={16} className="ml-1" />
        </Link>
      </div>

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
            className="w-[100%]  h-[100%] relative md:rounded-t-full overflow-hidden"
          >
            <img
              src={imgTop}
              className="w-[100%] h-[100%] object-cover "
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
            className="w-full h-[100%]"
          >
            <img
              src={imgBottom}
              className="w-[100%] h-[100%] md:rounded-ee-full object-cover "
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
            className="md:flex md:w-[330px] md:h-[100%] overflow-hidden md:rounded-b-full "
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
