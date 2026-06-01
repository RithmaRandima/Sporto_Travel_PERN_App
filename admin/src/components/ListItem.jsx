import { Link } from "react-router-dom";
import { BsArrowUpRightSquareFill, BsBoxSeam } from "react-icons/bs";

const ListItem = ({ item }) => {
  // Safe truncate
  function truncateText(text = "") {
    return text.split(" ").slice(0, 25).join(" ");
  }

  return (
    <div className="group block overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg">
      <div className="flex flex-col lg:flex-row">
        {/* IMAGE SECTION */}
        <div className="lg:flex relative w-full lg:w-[380px]">
          {/* Main Image */}
          <div className="relative h-[220px] overflow-hidden bg-gray-100 lg:h-[240px] lg:w-[200px]">
            <img
              src={`http://localhost:3000/uploads/${item.image_url}`}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Open Icon */}
            <Link
              to={`/trip/${item.id}`}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md backdrop-blur-md transition-all group-hover:bg-pink-500 group-hover:text-white"
            >
              <BsArrowUpRightSquareFill className="text-sm" />
            </Link>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col justify-between bg-white/70 p-4 md:p-5">
          {/* TOP */}
          <div>
            {/* Badges */}
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-white">
                {item.sport}
              </span>

              <span className="rounded-full bg-pink-100 px-3 py-1 text-[10px] font-semibold text-pink-700">
                {item.difficulty}
              </span>
            </div>

            {/* Title */}
            <h2 className="line-clamp-1 text-xl font-bold text-gray-900 group-hover:text-pink-600">
              {item.title}
            </h2>

            {/* Description */}
            <p className="mt-2 line-clamp-2 text-[13px] text-gray-500">
              {truncateText(item.description)}
            </p>

            {/* Location */}
            <p className="mt-2 text-sm text-gray-600">
              📍 {item.location}, {item.country}
            </p>
          </div>

          {/* BOTTOM */}
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            {/* PRICE */}
            <div className="rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 px-4 py-2">
              <p className="text-[10px] uppercase text-gray-400">Price</p>

              <h3 className="text-[22px] font-extrabold text-gray-900">
                ${item.price}
              </h3>
            </div>

            {/* DURATION */}
            <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-pink-600 shadow-sm">
                <BsBoxSeam className="text-lg" />
              </div>

              <div>
                <p className="text-[10px] uppercase text-gray-400">Duration</p>

                <h3 className="text-[18px] font-bold text-gray-900">
                  {item.duration_days} days
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
