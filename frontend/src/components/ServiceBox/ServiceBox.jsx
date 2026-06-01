import { MdOutlineArrowOutward } from "react-icons/md";

const ServiceBox = (props) => {
  return (
    <div className="group package-box w-[85%] md:w-[95%] h-[300px] md:h-[270px] shadow-2xl shadow-black/20 hover:scale-[1.02] duration-300 m-2 mx-auto relative overflow-hidden">
      {/* Image */}
      <div className="absolute inset-0">
        <img src={props.img} className="w-full h-full object-cover" alt="" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* TITLE (bottom → middle on hover) */}
      <h1
        className="absolute left-1/2 -translate-x-1/2 bottom-7 
                   text-[22px] text-white font-bold text-center
                   transition-all duration-500
                   group-hover:bottom-1/2 group-hover:translate-y-1/2"
      >
        {props.sport}
      </h1>

      {/* Hidden content */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[90%] text-center
                   opacity-0 translate-y-6
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-500"
      >
        <p className="text-[13px] text-white mb-4">{props.desc}</p>

        <button
          className="bg-red-600 uppercase text-[11px] px-3 py-1 
                           flex items-center gap-2 mx-auto rounded-full text-white 
                           hover:bg-black hover:scale-110 transition"
        >
          See More <MdOutlineArrowOutward size={16} />
        </button>
      </div>
    </div>
  );
};

export default ServiceBox;
