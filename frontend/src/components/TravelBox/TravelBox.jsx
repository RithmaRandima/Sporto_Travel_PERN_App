import { FaClock, FaLocationDot, FaStar, FaUsers } from "react-icons/fa6";
import { GiMountainClimbing } from "react-icons/gi";
import { IoLeafOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function TravelBox({ props }) {
  const discountedPrice = props.price - (props.price * props.discount) / 100;

  return (
    <div className="group relative w-[90%] mx-auto overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)] mb-6">
      {/* IMAGE */}
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={`http://localhost:3000/uploads/${props.image_url}`}
          alt={props.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Discount */}
        {props.discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {props.discount}% OFF
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
          <FaStar className="text-yellow-500 text-sm" />
          <span className="text-sm font-semibold">{props.rating || "4.8"}</span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md text-xs font-medium">
          <FaClock className="text-red-500" />
          {props.duration_days} Days
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{props.title}</h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <FaLocationDot className="text-red-500" />
          <span>
            {props.city}, {props.country}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2 mb-5">
          {props.description}
        </p>

        {/* Trip Info */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <GiMountainClimbing className="mx-auto text-blue-600 text-xl mb-1" />
            <p className="text-xs text-gray-500">Difficulty</p>
            <p className="font-semibold text-sm">
              {props.difficulty || "Medium"}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <IoLeafOutline className="mx-auto text-green-600 text-xl mb-1" />
            <p className="text-xs text-gray-500">Season</p>
            <p className="font-semibold text-sm">{props.season || "Summer"}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <FaUsers className="mx-auto text-purple-600 text-xl mb-1" />
            <p className="text-xs text-gray-500">Group</p>
            <p className="font-semibold text-sm">{props.max_people || 10}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-4">
          <Link
            to={`/trips/${props.id}`}
            className="px-5 py-2 text-sm font-semibold rounded-full bg-gray-900 text-white hover:bg-black transition"
          >
            View Details
          </Link>

          <div className="text-right">
            <p className="text-xs text-gray-400">Starting From</p>

            <div className="flex items-center gap-2">
              <p className="text-2xl font-extrabold text-gray-900">
                ${discountedPrice.toFixed(2)}
              </p>

              {props.discount > 0 && (
                <p className="text-sm line-through text-gray-400">
                  ${props.price}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBox;
