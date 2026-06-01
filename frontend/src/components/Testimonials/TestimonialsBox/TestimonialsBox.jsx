import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";

const TestimonialsBox = (props) => {
  return (
    <div className="relative w-[90%] md:w-[99%] mx-auto h-[320px] m-2 mt-[60px] p-5 py-6 rounded-[24px]  shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group">
      {/* soft glow background */}
      <div className="absolute -top-10 -right-10 w-[120px] h-[120px] bg-red-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition" />
      <div className="absolute -bottom-10 -left-10 w-[120px] h-[120px] bg-black/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition" />

      {/* userImg */}
      <div className="absolute -top-[40px] left-6 w-[78px] h-[78px] rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:scale-105 transition">
        <img src={props.img} alt="" className="w-full h-full object-cover" />
      </div>

      {/* title */}
      <h1 className="text-[18px] md:text-[20px] font-bold mt-10 text-left text-gray-900 group-hover:text-red-500 transition">
        {props.title}
      </h1>

      {/* stars */}
      <div className="flex items-center gap-1 text-red-500 mt-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      {/* quote icon */}
      <RiDoubleQuotesL className="text-[28px] mt-4 text-red-500 opacity-70" />

      {/* message */}
      <p className="font-light text-[13px] md:text-[14px] text-gray-600 leading-6 mt-2">
        {props.message}
      </p>

      {/* footer */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-red-500 text-[13px] md:text-[14px] tracking-[2px] font-medium">
          {props.name}
        </p>

        <p className="text-gray-700 text-[14px] flex items-center gap-1">
          <IoLocationSharp className="text-[18px] text-red-500" />
          {props.city}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsBox;
