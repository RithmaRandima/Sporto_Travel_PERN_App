import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightSquareFill, BsBoxSeam } from "react-icons/bs";

const ListItem = ({ item }) => {
  function truncateText(text, wordLimit) {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;

    return words.slice(0, wordLimit).join(" ") + " ...";
  }

  const shortText = truncateText(item.shortDescription, 23);

  return (
    <div className="group block overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg">
      <div className="flex flex-col lg:flex-row">
        {/* IMAGE SECTION */}
        <div className="lg:flex relative w-full lg:w-[380px]">
          {/* Main Image */}
          <div className="relative h-[220px] overflow-hidden bg-gray-100 lg:h-[240px] lg:w-[200px]">
            <img
              src={`http://localhost:4000/images/${item?.images?.main}`}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Discount Badge */}
            <div className="absolute left-3 top-3">
              <div className="rounded-lg bg-red-500/95 px-2.5 py-1.5 text-white shadow-md backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-wide opacity-80">
                  OFF
                </p>

                <p className="text-sm font-bold">{item.discount}%</p>
              </div>
            </div>

            {/* Open Icon */}
            <Link
              to={`/listProduct/${item._id}`}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md backdrop-blur-md transition-all group-hover:bg-pink-500 group-hover:text-white"
            >
              <BsArrowUpRightSquareFill className="text-sm" />
            </Link>
          </div>

          {/* Small Gallery */}
          <div className="grid lg:grid-cols-1 grid-cols-2 gap-2 bg-gray-100 p-2 lg:h-[240px] lg:w-[180px]">
            {[0, 1].map((index) => (
              <div
                key={index}
                className="h-[70px] lg:h-full overflow-hidden rounded-lg bg-white"
              >
                <img
                  src={`http://localhost:4000/images/${item?.images?.gallery[index]}`}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col justify-between bg-white/70 p-4 md:p-5">
          {/* TOP */}
          <div>
            {/* Badges */}
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-white">
                {item.category}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide
                ${
                  item.status === "In Stock"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* Product Name */}
            <h2 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-pink-600 capitalize">
              {item.name}
            </h2>

            {/* Description */}
            <p className="mt-2 line-clamp-2 max-w-xl text-[13px] leading-relaxed text-gray-500">
              {shortText}
            </p>
          </div>

          {/* BOTTOM */}
          <div className="mt-5 md:mt-0 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            {/* Pricing */}
            <div className="rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 px-4 py-2">
              <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                Price
              </p>

              <div className=" flex items-end gap-2">
                <h3 className="text-[22px] font-extrabold text-gray-900">
                  ${Number(item.newPrice).toFixed(2)}
                </h3>

                <p className="pb-1 text-[13px] font-semibold text-gray-400 line-through">
                  ${Number(item.oldPrice).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-pink-600 shadow-sm">
                <BsBoxSeam className="text-lg" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide text-gray-400">
                  Stock
                </p>

                <h3 className="text-[18px] font-bold text-gray-900">
                  {item.stock}
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
