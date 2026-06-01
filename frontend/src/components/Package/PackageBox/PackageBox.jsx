import React from "react";
import "./PackageBox.css";

const PackageBox = (props) => {
  return (
    <div className="group relative w-[85%] md:w-[95%] h-[400px] mx-auto overflow-hidden rounded-[18px] shadow-md hover:shadow-xl transition-all duration-500">
      {/* IMAGE */}
      <img
        src={props.img}
        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition duration-700"
        alt=""
      />

      {/* SIMPLE DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-500" />

      {/* CONTENT */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] text-center text-white">
        <h1 className="text-[20px] md:text-[22px] font-semibold tracking-wide mb-2">
          {props.city}
        </h1>

        <p className="text-[13px] md:text-[14px] text-white/80 leading-5 mb-4">
          {props.desc}
        </p>

        {/* subtle CTA */}
        <div className="opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="text-[12px] px-4 py-1.5 border border-white/40 rounded-full hover:bg-white hover:text-black transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageBox;
