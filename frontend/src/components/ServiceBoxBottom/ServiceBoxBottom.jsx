import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { GiTreasureMap } from "react-icons/gi";
import { Link } from "react-router-dom";

function ServiceBoxBottom({ props }) {
  return (
    <Link to={`/trips/${props.id}`}>
      <div className="group relative w-[90%] mx-auto overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
        {/* IMAGE */}
        <div className="relative h-[260px] overflow-hidden">
          <img
            src={props.img}
            alt={props.city}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* discount badge */}
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {props.discount}
          </div>

          {/* days badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md text-xs font-medium text-gray-800">
            <FaClock className="text-red-500" />
            {props.days}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5">
          {/* CITY + LOCATION */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900">{props.city}</h3>

            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <FaLocationDot className="text-red-500" />
              <span>{props.country}</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-500 line-clamp-2 mb-4">
            {props.description}
          </p>

          {/* FOOTER */}
          <div className="flex items-center justify-between">
            {/* details button */}
            <button className="px-4 py-2 text-xs font-semibold tracking-wider uppercase border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300">
              Details
            </button>

            {/* price */}
            <div className="text-right">
              <p className="text-xs text-gray-400">From</p>

              <div className="flex items-center gap-2">
                <p className="text-xl font-extrabold text-gray-900">
                  ${props.newPrice}
                </p>

                {props.oldPrice && (
                  <p className="text-sm line-through text-gray-400">
                    ${props.oldPrice}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ServiceBoxBottom;
