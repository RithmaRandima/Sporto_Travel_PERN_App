import { MdOutlineArrowOutward } from "react-icons/md";

const ServiceBox = (props) => {
  return (
    <div className="group relative w-[85%] md:w-[95%] h-[300px] md:h-[270px] mx-auto overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* IMAGE */}
      <div className="absolute inset-0">
        <img
          src={props.img}
          className="w-full h-full object-cover scale-105 group-hover:scale-115 transition duration-700"
          alt={props.sport}
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* SOFT GLOW EFFECT */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-red-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition" />

      {/* TITLE */}
      <h1
        className="absolute left-1/2 -translate-x-1/2 bottom-8
        text-[22px] md:text-[24px]
        text-white font-bold text-center
        transition-all duration-500
        group-hover:bottom-1/2 group-hover:translate-y-[-22px]"
      >
        {props.sport}
      </h1>

      {/* DESCRIPTION + BUTTON */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[85%] text-center
        opacity-0 translate-y-6
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-500"
      >
        <p className="text-[13px] md:text-sm text-gray-200 mb-4 leading-6">
          {props.desc}
        </p>

        <button
          className="bg-gradient-to-r from-red-500 to-red-600
          text-white uppercase text-[11px] px-4 py-2
          flex items-center gap-2 mx-auto rounded-full
          hover:from-red-600 hover:to-red-700
          hover:scale-105 transition-all duration-300 shadow-lg"
        >
          See More <MdOutlineArrowOutward size={16} />
        </button>
      </div>
    </div>
  );
};

export default ServiceBox;
